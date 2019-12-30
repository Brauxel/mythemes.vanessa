import { Component } from "react";
import PropTypes from "prop-types";
import { callAll } from "../../../helpers/utilities";

class Toggle extends Component {
	static defaultProps = {
		initialOn: false,
		onReset: () => {},
		// Now that a user can use this component effectively without
		// an `onToggle` prop (they can use `onStateChange` instead)
		// let's provide a default for `onToggle` and `onStateChange`
		onToggle: () => {},
		onStateChange: () => {},
		stateReducer: (state, changes) => changes
	};

	// let's add a function that can determine whether
	// the a prop is controlled. Call it `isControlled`.
	isControlled(prop) {
		return this.props[prop] !== undefined;
	}

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = { on: this.props.initialOn };

	// Any time I use a string as an identifier for a type,
	// I prefer to give it a variable name. That way folks who
	// want to reference the type can do so using variable which
	// will help mitigate the problems of indirection.
	static stateChangeTypes = {
		reset: "__toggle_reset__",
		toggle: "__toggle_toggle__"
	};

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	// We'll also need a `getState` method here that returns a
	// state object that has state from both internal state (`this.state`)
	// as well as external state (`this.props`).
	getState(state = this.state) {
		return Object.entries(state).reduce((combinedState, [key, value]) => {
			if (this.isControlled(key)) {
				combinedState[key] = this.props[key];
			} else {
				combinedState[key] = value;
			}

			return combinedState;
		}, {});
	}

	/*
		- This function serves as our state reducer
		- It calls the set state after filtering the changes through the state reducer passed by the parent
	*/
	internalSetState(changes, callback) {
		let allChanges;

		this.setState(
			state => {
				const combinedState = this.getState(state);

				// handles function set state calls
				const changesObject =
					typeof changes === "function" ? changes(combinedState) : changes;

				// apply state reducer
				allChanges =
					this.props.stateReducer(combinedState, changesObject) || {};

				// remove the type so it's not set into state
				// We've disabled linting for the next line but remember to not make this the norm, the line below is an edge case
				const { type: ignoredType, ...onlyChanges } = allChanges; // eslint-disable-line

				const nonControlledChanges = Object.keys(combinedState).reduce(
					(newChanges, stateKey) => {
						if (!this.isControlled(stateKey)) {
							newChanges[stateKey] = Object.prototype.hasOwnProperty.call(
								onlyChanges,
								stateKey
							)
								? onlyChanges[stateKey]
								: combinedState[stateKey];
						}
						return newChanges;
					},
					{}
				);

				// And we only return the non controlled values to set the state contolled by this component alone
				return Object.keys(nonControlledChanges || {}).length
					? nonControlledChanges
					: null;
			},
			() => {
				// In the setState callback, we first fire the prop of the parent component with the current set of state changes and the current state
				this.props.onStateChange(allChanges, this.getStateAndHelpers());
				callback();
			}
		);
	}

	toggle = ({ type = Toggle.stateChangeTypes.toggle } = {}) => {
		this.internalSetState(
			({ on }) => ({ type, on: !on }),
			() => {
				this.props.onToggle(this.getState().on);
			}
		);
	};

	reset = () =>
		this.internalSetState(
			{ ...this.initialState, type: Toggle.stateChangeTypes.reset },
			() => this.props.onReset(this.initialState)
		);

	getTogglerProps = ({ onClick, ...props }) => ({
		"aria-expanded": this.getState().on,
		onClick: callAll(onClick, () => this.toggle()), // this.toggle is called as a function in this case as it defines the type as an argument
		...props
	});

	getStateAndHelpers() {
		return {
			on: this.getState().on,
			toggle: this.toggle,
			reset: this.reset,
			getTogglerProps: this.getTogglerProps
		};
	}

	render() {
		return this.props.children(this.getStateAndHelpers());
	}
}

Toggle.propTypes = {
	onToggle: PropTypes.func,
	children: PropTypes.func.isRequired,
	initialOn: PropTypes.bool.isRequired,
	onReset: PropTypes.func.isRequired,
	stateReducer: PropTypes.func.isRequired,
	onStateChange: PropTypes.func.isRequired,
	on: PropTypes.bool
};

export default Toggle;

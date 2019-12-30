import { Component } from "react";
import PropTypes from "prop-types";
import { callAll } from "../../../helpers/utilities";

class Toggle extends Component {
	static defaultProps = {
		initialOn: false,
		onReset: () => {},
		stateReducer: (state, changes) => changes
	};

	// 🐨 let's add a function that can determine whether
	// the on prop is controlled. Call it `isOnControlled`.
	isOnControlled() {
		return this.props.on !== undefined;
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

	// 🐨 Now let's add a function that can return the state
	// whether it's coming from this.state or this.props
	// Call it `getState` and have it return on from
	// state if it's not controlled or props if it is.
	getState = () => {
		return {
			on: this.isOnControlled() ? this.props.on : this.state.on
		};
	};

	/*
		- This function serves as our state reducer
		- It calls the set state after filtering the changes through the state reducer passed by the parent
	*/
	internalSetState(changes, callback) {
		this.setState(state => {
			// handles function set state calls
			const changesObject =
				typeof changes === "function" ? changes(state) : changes;

			// apply state reducer
			const reducedState = this.props.stateReducer(state, changesObject) || {};

			// remove the type so it's not set into state
			// We've disabled linting for the next line but remember to not make this the norm, the line below is an edge case
			const { type: ignoredType, ...onlyChanges } = reducedState; // eslint-disable-line

			return Object.keys(onlyChanges).length ? onlyChanges : null;
		}, callback);
	}

	toggle = ({ type = Toggle.stateChangeTypes.toggle } = {}) => {
		// 🐨 if the toggle is controlled, then we shouldn't
		// be updating state. Instead we should just call
		// `this.props.onToggle` with what the state should be
		if (this.isOnControlled()) {
			this.props.onToggle(!this.getState().on);
		} else {
			this.internalSetState(
				({ on }) => ({ type, on: !on }),
				() => {
					this.props.onToggle(this.getState().on);
				}
			);
		}
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
	on: PropTypes.bool
};

export default Toggle;

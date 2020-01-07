import React, { Component } from "react";
import PropTypes from "prop-types";
import TabContext from "../../contexts/TabContext";
import TabsComponent from "./styles";

class Tabs extends Component {
	static defaultProps = {
		stateReducer: (state, changes) => changes,
		onStateChange: () => {},
		initialActive: "1"
	};

	// let's add a function that can determine whether
	// the a prop is controlled. Call it `isControlled`.
	isControlled(prop) {
		return this.props[prop] !== undefined;
	}

	// We'll also need a `getState` method here that returns a
	// state object that has state from both internal state (`this.state`)
	// as well as external state (`this.props`).
	// IMPORTANT: Don't forget to add an empty object as initialValue
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

	internalSetState(changes, callback) {
		let allChanges;

		this.setState(
			state => {
				// Lets filter out the controlled props
				let combinedState = this.getState(state);

				// handles function set state calls
				let changesObject =
					typeof changes === "function" ? changes(combinedState) : changes;

				// Next, we apply a stateReducer that is passed down to the component,
				// By default, the stateReducer just returns the changes,
				// alternaitvely if the function fails, we populate it with an empty object, its important that we apply the fallback object so it doesn't break the site as we deconstruct 'allChanges' in the next line
				allChanges = this.props.stateReducer(state, changesObject) || {};

				// Deconstruct allChanges to filter out the unnecessary data to prevent unnecessary renders
				// We've disabled linting for the next line but remember to not make this the norm, the line below is an edge case
				const { type: ignoredType, ...onlyChanges } = allChanges; // eslint-disable-line

				// Next, since we allow for both controlled props and a stateReducer, we need to seperate out only the non controlled props
				// Important, we reduce combinedState and not onlyChanges as it is data returned from the stateReducer, we need to keep the focus on the localised data
				const nonControlledChanges = Object.keys(combinedState).reduce(
					(newChanges, stateKey) => {
						// If the state is not controlled by a prop, we create a new set of only relevant changes while giving onlyChanges priority to populate the state
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

				// We don't change the state of the current component if the currentActive tab does not change
				if (nonControlledChanges.currentActive === combinedState.currentActive)
					return null;

				// And we only return the non controlled values to set the state contolled by this component alone
				// If the nonControlledChanges object is empty, we return NULL as it prevents a re-render
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

	toggle = (toggleValues = {}) => {
		this.internalSetState(toggleValues, () => {
			typeof this.props.onToggle === "function"
				? this.props.onToggle(this.getState())
				: "";
		});
	};

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = {
		currentActive: this.props.initialActive,
		toggle: this.toggle,
		type: this.props.type || "primary"
		//getTogglerProps: this.getTogglerProps
	};

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	// We get the latest state and helpers
	getStateAndHelpers() {
		return {
			currentActive: this.getState().currentActive,
			toggle: this.toggle
		};
	}

	render() {
		const { children } = this.props;
		const ui = typeof children === "function" ? children(this.state) : children;

		return (
			<TabContext.Provider value={this.state}>
				<TabsComponent tabType={this.state.type}>{ui}</TabsComponent>
			</TabContext.Provider>
		);
	}
}

// // Specifies the default values for props:
Tabs.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element,
		PropTypes.func
	]).isRequired,
	type: PropTypes.string,
	stateReducer: PropTypes.func.isRequired,
	onStateChange: PropTypes.func.isRequired,
	initialActive: PropTypes.string.isRequired,
	onToggle: PropTypes.func
};

export default Tabs;

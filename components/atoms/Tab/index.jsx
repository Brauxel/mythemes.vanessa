import React, { Component } from "react";
import PropTypes from "prop-types";
import TabContext from "../../contexts/TabContext";

class Tab extends Component {
	static defaultProps = {
		isActive: false
	};

	// let's add a function that can determine whether
	// the a prop is controlled. Call it `isControlled`.
	isControlled(prop) {
		return this.props[prop] !== undefined;
	}

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = { isActive: this.props.isActive };

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	// We'll also need a `getState` method here that returns a
	// state object that has state from both internal state (`this.state`)
	// as well as external state (`this.props`).
	// IMPORTANT: Don't forget to set the initialValue as an empty object
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

	getStateAndHelpers() {
		return {
			active: this.getState().isActive
		};
	}

	render() {
		return React.Children.map(this.props.children, child =>
			React.cloneElement(child, {
				id: this.props.id
			})
		);
	}
}

Tab.propTypes = {
	isActive: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element,
		PropTypes.func
	]).isRequired
};
export default Tab;

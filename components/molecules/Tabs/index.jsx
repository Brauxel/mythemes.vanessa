import React, { Component } from "react";
import PropTypes from "prop-types";
import TabContext from "../../contexts/TabContext";

class Tabs extends Component {
	toggle = (toggleValues = {}) => {
		this.internalSetState(toggleValues);
	};

	internalSetState(state = this.state) {
		console.log("tabs internal set state", state);
	}

	getTabProps = () => {
		console.log("Tabs get Tab props");
	};

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = {
		currentActive: "1",
		toggle: this.toggle,
		getTogglerProps: this.getTogglerProps
	};

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	render() {
		const { children } = this.props;
		const ui = typeof children === "function" ? children(this.state) : children;

		return <TabContext.Provider value={this.state}>{ui}</TabContext.Provider>;
	}
}

// // Specifies the default values for props:
Tabs.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element,
		PropTypes.func
	]).isRequired
};

export default Tabs;

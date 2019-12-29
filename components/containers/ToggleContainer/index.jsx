import Toggle from "../../molecules/Toggle/";
import ToggleSwitch from "../../atoms/ToggleSwitch/";
import PropTypes from "prop-types";
import { Component } from "react";

class Usage extends Component {
	static defaultProps = {
		onToggle: (...args) => console.log("Usage toggled", ...args),
		onReset: (...args) => console.log("Usage toggled", ...args)
	};

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = { timesClicked: 0 };

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	handleToggle = (...args) => {
		this.setState(({ timesClicked }) => ({
			timesClicked: timesClicked + 1
		}));

		this.props.onToggle(...args);
	};

	handleReset = (...args) => {
		this.setState(this.initialState);
		this.props.onReset(...args);
	};

	toggleStateReducer = (state, changes) => {
		if (this.state.timesClicked >= 4) {
			return { ...changes, on: false };
		}

		return changes;
	};

	render() {
		const { timesClicked } = this.state;

		return (
			<Toggle
				initialOn={false}
				stateReducer={this.toggleStateReducer}
				onReset={this.handleReset}
				onToggle={this.handleToggle}
			>
				{({ on, getTogglerProps, reset }) => (
					<div>
						{on ? "The button is on" : "The button is off"}
						<ToggleSwitch {...getTogglerProps({ on })} />
						<hr />
						<button
							{...getTogglerProps({
								"aria-label": "custom-label",
								onClick: () => console.log("Buttton Clicked")
							})}
						>
							{on ? "on" : "off"}
						</button>
						<button onClick={() => reset()}>Reset</button>
						{timesClicked >= 4 ? (
							<div>Too many clicks, you clicked {timesClicked} times</div>
						) : null}
					</div>
				)}
			</Toggle>
		);
	}
}

Usage.propTypes = {
	onToggle: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired
};

export default Usage;

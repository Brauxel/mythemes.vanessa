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
	initialState = { timesClicked: 0, toggleOn: false };

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

	// We have the state reducer, however we can also employ the controlled props via the "handleStateChange" function
	toggleStateReducer = (state, changes) => {
		if (changes.type === "forced") {
			return changes;
		}

		if (this.state.timesClicked >= 4) {
			return { ...changes, on: false };
		}

		return changes;
	};

	handleStateChange = changes => {
		if (changes.type === "forced") {
			this.setState({ toggleOn: true }, () => {
				this.props.onToggle(this.state);
			});
		} else if (changes.type === Toggle.stateChangeTypes.reset) {
			this.setState(this.initialState, () => {
				this.props.onReset(this.state);
			});
		} else if (changes.type === Toggle.stateChangeTypes.toggle) {
			this.setState(
				({ timesClicked }) => ({
					timesClicked: timesClicked + 1,
					toggleOn: timesClicked >= 4 ? false : changes.on
				}),
				() => {
					this.props.onToggle(this.state);
				}
			);
		}
	};

	render() {
		const { timesClicked, toggleOn } = this.state;

		return (
			<Toggle on={toggleOn} onStateChange={this.handleStateChange}>
				{({ on, getTogglerProps, toggle, reset }) => (
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
						<button onClick={() => toggle({ type: "forced" })}>
							Force Toggle
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
	onReset: PropTypes.func.isRequired,
	on: PropTypes.bool
};

export default Usage;

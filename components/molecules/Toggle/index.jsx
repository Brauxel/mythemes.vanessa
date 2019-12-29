import { Component } from "react";
import PropTypes from "prop-types";
import { callAll } from "../../../helpers/utilities";

class Toggle extends Component {
	static defaultProps = {
		initialOn: false,
		onReset: () => {}
	};

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = { on: this.props.initialOn };

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	toggle = () => {
		this.setState(
			({ on }) => ({ on: !on }),
			() => {
				this.props.onToggle(this.state.on);
			}
		);
	};

	reset = () => {
		this.setState(this.initialState, () => {
			this.props.onReset(this.initialState);
		});
	};

	getTogglerProps = ({ onClick, ...props }) => ({
		"aria-expanded": this.state.on,
		onClick: callAll(onClick, this.toggle),
		...props
	});

	getStateAndHelpers() {
		return {
			on: this.state.on,
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
	onReset: PropTypes.func.isRequired
};

export default Toggle;

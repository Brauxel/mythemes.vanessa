import { Component } from "react";
import PropTypes from "prop-types";
import { callAll } from "../../../helpers/utilities";

class Toggle extends Component {
	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = { on: false };

	toggle = () => {
		this.setState(
			({ on }) => ({ on: !on }),
			() => {
				this.props.onToggle(this.state.on);
			}
		);
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
			getTogglerProps: this.getTogglerProps
		};
	}

	render() {
		return this.props.children(this.getStateAndHelpers());
	}
}

Toggle.propTypes = {
	onToggle: PropTypes.func,
	children: PropTypes.func.isRequired
};

export default Toggle;

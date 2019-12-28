import React, { Component } from "react";
import ToggleSwitch from "../../atoms/ToggleSwitch/";
import PropTypes from "prop-types";

class Toggle extends Component {
	/* 
    - We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  */
	state = {
		on: false
	};

	toggle = () => {
		this.setState(
			({ on }) => ({ on: !on }),
			() => {
				this.props.onToggle(this.state.on);
			}
		);
	};

	render() {
		const { on } = this.state;
		return <ToggleSwitch on={on} onClick={this.toggle} />;
	}
}

Toggle.propTypes = {
	onToggle: PropTypes.func
};

export default Toggle;

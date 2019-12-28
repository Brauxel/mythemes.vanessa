import React, { Component } from "react";

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
				console.log("on toggle clicked");
				//this.props.onToggle(this.state.on);
			}
		);
	};

	render() {
		const { on } = this.state;
		return <div>Toggler goes gere, current on value {on.toString()}</div>;
	}
}

export default Toggle;

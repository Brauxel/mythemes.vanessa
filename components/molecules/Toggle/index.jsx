import React, { Component } from "react";
import ToggleSwitch from "../../atoms/ToggleSwitch/";
import PropTypes from "prop-types";

const ToggleContext = React.createContext({
	on: false,
	toggle: () => {}
});

class Toggle extends Component {
	/*
		- These static functions are used to implement Compound Components
		- Refer containers/ToggleContainer
	*/
	static On = ({ children }) => (
		<ToggleContext.Consumer>
			{({ on }) => (on ? children : null)}
		</ToggleContext.Consumer>
	);

	static Off = ({ children }) => (
		<ToggleContext.Consumer>
			{({ on }) => (on ? null : children)}
		</ToggleContext.Consumer>
	);

	// static Button = props => (
	// 	<ToggleContext.Consumer>
	// 		{({ on, toggle }) => <ToggleSwitch on={on} onClick={toggle} {...props} />}
	// 	</ToggleContext.Consumer>
	// );

	static Button = props => (
		<ToggleContext.Consumer>
			{({ on, toggle }) => <ToggleSwitch on={on} onClick={toggle} {...props} />}
		</ToggleContext.Consumer>
	);

	// static On = ({ on, children }) => (on ? children : null);
	// static Off = ({ on, children }) => (on ? null : children);
	// static Button = ({ on, toggle, ...props }) => (
	// 	<ToggleSwitch on={on} onClick={toggle} {...props} />
	// );

	toggle = () => {
		this.setState(
			({ on }) => ({ on: !on }),
			() => {
				this.props.onToggle(this.state.on);
			}
		);
	};

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = { on: false, toggle: this.toggle };

	render() {
		//const { on } = this.state;
		//return <ToggleSwitch on={on} onClick={this.toggle} />;
		/* 
			- We clone the children to add the props, this is done to implement the Compound Components
		*/
		// return React.Children.map(this.props.children, child =>
		// 	React.cloneElement(child, {
		// 		on: this.state.on,
		// 		toggle: this.toggle
		// 	})
		// );
		/*
			- This is used to implement a react context to apply flexible compound components
		*/
		return (
			<ToggleContext.Provider value={this.state}>
				{this.props.children}
			</ToggleContext.Provider>
		);
	}
}

Toggle.propTypes = {
	onToggle: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default Toggle;

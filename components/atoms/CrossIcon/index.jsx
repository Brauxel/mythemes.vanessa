import React, { Component } from "react";
import PropTypes from "prop-types";
import CrossIconComp from "./styles";

class CrossIcon extends Component {
	static defaultProps = {
		stroke: "#d20662",
		isOpen: false
	};

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = { isOpen: false };

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	render() {
		let { stroke } = this.props;
		let { isOpen } = this.state;

		return (
			<CrossIconComp>
				<svg width="100%" viewBox="0 0 100 100">
					<g stroke={stroke}>
						{!isOpen ? (
							<line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="5" />
						) : (
							""
						)}
						<line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="5" />
					</g>
				</svg>
			</CrossIconComp>
		);
	}
}

CrossIcon.propTypes = {
	as: PropTypes.string,
	styles: PropTypes.object,
	mobileLandscapeStyles: PropTypes.object,
	iPadPortraitStyles: PropTypes.object,
	iPadLandscapeStyles: PropTypes.object,
	onClick: PropTypes.func,
	isOpen: PropTypes.bool.isRequired,
	stroke: PropTypes.string.isRequired
};

export default CrossIcon;

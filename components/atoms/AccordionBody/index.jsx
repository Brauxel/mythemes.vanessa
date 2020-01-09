import React, { Component } from "react";
import PropTypes from "prop-types";
import AccordionBodyComp from "./styles";

class AccordionBody extends Component {
	render() {
		const { children } = this.props;
		return <AccordionBodyComp>{children}</AccordionBodyComp>;
	}
}

AccordionBody.propTypes = {
	as: PropTypes.string,
	styles: PropTypes.object,
	mobileLandscapeStyles: PropTypes.object,
	iPadPortraitStyles: PropTypes.object,
	iPadLandscapeStyles: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default AccordionBody;

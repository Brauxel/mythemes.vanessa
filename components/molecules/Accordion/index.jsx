import React, { Component } from "react";
import PropTypes from "prop-types";
import AccordionComp from "./styles";

class Accordion extends Component {
	render() {
		const { children } = this.props;
		return <AccordionComp>{children}</AccordionComp>;
	}
}

Accordion.propTypes = {
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

export default Accordion;

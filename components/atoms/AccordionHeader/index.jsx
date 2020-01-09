import React, { Component } from "react";
import PropTypes from "prop-types";
import AccordionHeaderComp from "./styles";

class AccordionHeader extends Component {
	render() {
		const { children } = this.props;
		return <AccordionHeaderComp>{children}</AccordionHeaderComp>;
	}
}

AccordionHeader.propTypes = {
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

export default AccordionHeader;

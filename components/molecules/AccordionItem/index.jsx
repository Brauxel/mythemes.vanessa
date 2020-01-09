import React, { Component } from "react";
import PropTypes from "prop-types";
import AccordionItemComp from "./styles";

class AccordionItem extends Component {
	render() {
		const { children } = this.props;
		return <AccordionItemComp>{children}</AccordionItemComp>;
	}
}

AccordionItem.propTypes = {
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

export default AccordionItem;

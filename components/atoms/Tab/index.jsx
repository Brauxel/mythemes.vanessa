import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
	render() {
		return React.Children.map(this.props.children, child =>
			React.cloneElement(child, {
				id: this.props.id
			})
		);
	}
}

Tab.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element,
		PropTypes.func
	]).isRequired
};
export default Tab;

import React, { Component } from "react";
import PropTypes from "prop-types";
import TabContext from "../../contexts/TabContext";

class TabContent extends Component {
	render() {
		return (
			<TabContext.Consumer>
				{({ currentActive }) =>
					currentActive.toString() === this.props.id ? (
						<div className="tab-content">{this.props.children}</div>
					) : (
						""
					)
				}
			</TabContext.Consumer>
		);
	}
}

TabContent.propTypes = {
	id: PropTypes.string
};

export default TabContent;

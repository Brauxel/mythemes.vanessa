import React, { Component } from "react";
import PropTypes from "prop-types";
import TabContext from "../../contexts/TabContext";
import TabContentComp from "./styles";

class TabContent extends Component {
	render() {
		return (
			<TabContext.Consumer>
				{({ currentActive }) =>
					currentActive.toString() === this.props.id ? (
						<TabContentComp className="tab-content">
							{this.props.children}
						</TabContentComp>
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

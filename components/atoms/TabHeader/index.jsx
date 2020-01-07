import { Component } from "react";
import PropTypes from "prop-types";
import TabContext from "../../contexts/TabContext";
import TabHeaderComp from "./styles";

class TabHeader extends Component {
	render() {
		const { id } = this.props;

		return (
			<TabContext.Consumer>
				{({ currentActive, toggle, type }) => (
					<TabHeaderComp
						tabType={type}
						active={currentActive.toString() === id}
						onClick={() =>
							toggle({
								currentActive: id
							})
						}
					>
						{this.props.children}
					</TabHeaderComp>
				)}
			</TabContext.Consumer>
		);
	}
}

TabHeader.propTypes = {
	isActive: PropTypes.bool,
	id: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default TabHeader;

import { Component } from "react";
import PropTypes from "prop-types";
import TabContext from "../../contexts/TabContext";
import TabHeaderComp from "./styles";

class TabHeader extends Component {
	toggle = () => {
		console.log("tab header toggle clicked");
	};

	render() {
		const { id } = this.props;

		return (
			<TabContext.Consumer>
				{({ currentActive, toggle }) => (
					<TabHeaderComp
						className={
							currentActive.toString() === id
								? "tab-header active"
								: "tab-header"
						}
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
	id: PropTypes.string
};

export default TabHeader;

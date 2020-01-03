import ListComponent from "./styles";
import PropTypes from "prop-types";
import React from "react";

const List = props => (
	<ListComponent as={props.as}>
		{React.Children.map(props.children, child =>
			React.cloneElement(child, {
				type: props.type ? props.type : props.as === "ul" ? "disc" : "decimal"
			})
		)}
	</ListComponent>
);

// Specifies the default values for props:
List.defaultProps = {
	as: "ul"
};

List.propTypes = {
	as: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["decimal", "disc", "custom"]),
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default List;

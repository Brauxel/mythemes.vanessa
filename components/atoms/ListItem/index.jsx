import ListItemComp from "./styles";
import PropTypes from "prop-types";

const ListItem = props => (
	<ListItemComp type={props.type}>{props.children}</ListItemComp>
);

// Specifies the default values for props:
ListItem.defaultProps = {
	type: "disc"
};

ListItem.propTypes = {
	type: PropTypes.oneOf(["decimal", "disc", "custom"]).isRequired,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default ListItem;

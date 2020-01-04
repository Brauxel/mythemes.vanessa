import ListItemComp from "./styles";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = ({ src, size, imageColor, children, ...requiredProps }) => (
	<ListItemComp {...requiredProps}>
		{src ? (
			<FontAwesomeIcon
				icon={src}
				size={size}
				color={imageColor}
				border
				fixedWidth
			/>
		) : (
			""
		)}
		{children}
	</ListItemComp>
);

// Specifies the default values for props:
ListItem.defaultProps = {
	type: "disc",
	imageColor: "#d20662"
};

ListItem.propTypes = {
	type: PropTypes.oneOf(["decimal", "disc", "image"]).isRequired,
	src: PropTypes.object,
	size: PropTypes.string,
	imageBorderSize: PropTypes.string,
	imageBorderColor: PropTypes.string,
	imageColor: PropTypes.string.isRequired,
	// We specify a custom validator for image padding as it needs to be a value between 0 and 1 (for CSS and design control reasons) and needs to be a number
	// Notest: It should return an Error object if the validation fails. Don't `console.warn` or throw, as this won't work inside `oneOfType`.
	imagePadding: function(props, propName, componentName) {
		if (props[propName]) {
			if (props[propName] < 0 || props[propName] > 1) {
				return new Error(
					"Invalid prop `" +
						propName +
						"` supplied to" +
						" `" +
						componentName +
						"`. Validation failed. It need to be a number between 0 and 1"
				);
			} else if (typeof props[propName] !== "number") {
				return new Error(
					"Invalid prop `" +
						propName +
						"` supplied to" +
						" `" +
						componentName +
						"`. Validation failed. It need to be a number"
				);
			}
		}
	},
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default ListItem;

import TextComp from "./styles";
import PropTypes from "prop-types";

const Text = props => <TextComp {...props}>{props.children}</TextComp>;

// Specifies the default values for props:
Text.defaultProps = {
	initialLetterColor: "#000"
};

Text.propTypes = {
	color: PropTypes.string,
	textAlign: PropTypes.string,
	fontFamily: PropTypes.string,
	initialLetterStyled: PropTypes.bool,
	initialLetterColor: PropTypes.string.isRequired,
	initialLetterBorder: PropTypes.string,
	initialLetterBackgroundColor: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default Text;

import PropTypes from "prop-types";
import HeadingComp from "./styles";

const Heading = props => <HeadingComp {...props}>{props.children}</HeadingComp>;

Heading.propTypes = {
	color: PropTypes.string,
	textAlign: PropTypes.string,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.string,
	marginTop: PropTypes.string,
	iPadFontSizes: PropTypes.string,
	textTransform: PropTypes.string,
	as: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default Heading;

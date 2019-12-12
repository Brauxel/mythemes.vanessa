import TextComp from "./styles";
import PropTypes from "prop-types";

const Text = props => <TextComp {...props}>{props.children}</TextComp>;

Text.propTypes = {
	color: PropTypes.string,
	textAlign: PropTypes.string,
	fontFamily: PropTypes.string
};

export default Text;

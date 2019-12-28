import Toggle from "../../molecules/Toggle/";
import PropTypes from "prop-types";

const Usage = ({
	onToggle = (...args) => console.log("onToggle", ...args)
}) => <Toggle onToggle={onToggle} />;

Usage.title = "Toggle Container";

Usage.propTypes = {
	onToggle: PropTypes.func
};

export default Usage;

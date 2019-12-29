import Toggle from "../../molecules/Toggle/";
import PropTypes from "prop-types";

const Usage = ({
	onToggle = (...args) => console.log("onToggle", ...args)
}) => (
	<Toggle onToggle={onToggle}>
		<Toggle.On>The the switch is ON</Toggle.On>
		<Toggle.Off>The the switch is OFF</Toggle.Off>
		<Toggle.Button />
	</Toggle>
);

Usage.title = "Toggle Container";

Usage.propTypes = {
	onToggle: PropTypes.func
};

export default Usage;

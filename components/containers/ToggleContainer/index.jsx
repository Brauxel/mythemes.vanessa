import Toggle from "../../molecules/Toggle/";
import ToggleSwitch from "../../atoms/ToggleSwitch/";
import PropTypes from "prop-types";

const Usage = ({
	onToggle = (...args) => console.log("onToggle", ...args)
}) => (
	<Toggle onToggle={onToggle}>
		{({ on, toggle }) => (
			<div>
				{on ? "The button is on" : "The button is off"}
				<ToggleSwitch on={on} onClick={toggle} />
				<hr />
				<button aria-label="custom-button" onClick={toggle}>
					{on ? "on" : "off"}
				</button>
			</div>
		)}
	</Toggle>
);

Usage.propTypes = {
	onToggle: PropTypes.func
};

export default Usage;

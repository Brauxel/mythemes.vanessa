import Toggle from "../../molecules/Toggle/";
import ToggleSwitch from "../../atoms/ToggleSwitch/";
import PropTypes from "prop-types";

const Usage = ({
	onToggle = (...args) => console.log("onToggle", ...args)
}) => (
	<Toggle onToggle={onToggle}>
		{({ on, getTogglerProps }) => (
			<div>
				{on ? "The button is on" : "The button is off"}
				<ToggleSwitch {...getTogglerProps({ on })} />
				<hr />
				<button
					{...getTogglerProps({
						"aria-label": "custom-label",
						onClick: () => console.log("Buttton Clicked")
					})}
				>
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

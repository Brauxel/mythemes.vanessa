import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { ToggleButton, ToggleInput } from "./styles";

class ToggleSwitch extends Component {
	render() {
		const { on, className, ...props } = this.props;
		let btnClassName = [className, on ? "toggle-on" : "toggle-off"]
			.filter(Boolean)
			.join(" ");

		return (
			<Fragment>
				<ToggleInput
					onChange={() => {}} // the change is handled via the button
					type="checkbox"
					checked={on}
				/>
				<ToggleButton aria-label="toggle" className={btnClassName} {...props} />
			</Fragment>
		);
	}
}

ToggleSwitch.propTypes = {
	on: PropTypes.bool,
	onClick: PropTypes.func,
	className: PropTypes.array
};

export default ToggleSwitch;

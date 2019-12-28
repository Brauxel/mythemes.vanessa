import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class ToggleSwitch extends Component {
	render() {
		const { on, className, ...props } = this.props;
		let btnClassName = [className, on ? "toggle-on" : "toggle-off"]
			.filter(Boolean)
			.join(" ");

		return (
			<Fragment>
				<input
					className="toggle-input"
					onChange={() => {}} // the change is handled via the button
					type="checkbox"
					checked={on}
				/>
				<button aria-label="toggle" className={btnClassName} {...props}>
					This is a toggle button
				</button>
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

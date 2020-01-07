import PropTypes from "prop-types";
import LineProgress from "./styles";

import React, { Component } from "react";

class ProgressBars extends Component {
	state = { animationInited: false };

	getProgress = () => {
		const { initialAnimation, progress } = this.props;
		const { animationInited } = this.state;

		return !animationInited ? "0" : "0";
	};

	componentDidMount() {
		setTimeout(this.initAnimation, 300);
	}

	initAnimation = () => {
		this.setState({ animationInited: true });
	};

	render() {
		return (
			<LineProgress id="line-progress" height="120" width="120">
				<g className="progress-container">
					<line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="30" />
				</g>

				{this.state.animationInited ? (
					<g className="progress-content">
						<line
							x1="0"
							y1="50%"
							x2="100%"
							y2="50%"
							stroke="#C2E362"
							fill="transparent"
							strokeDasharray="100%"
							//strokeDashoffset={this.getProgress()}
							strokeWidth="28"
						/>
					</g>
				) : (
					""
				)}
				<text className="percentage" x="40%" y="55%">
					50%
				</text>
			</LineProgress>
		);
	}
}

ProgressBars.propTypes = {
	toolTip: PropTypes.bool
};

export default ProgressBars;

import React, { Component } from "react";
import PropTypes from "prop-types";
import LineProgress from "./styles";
import ToolTip from "../../atoms/ToolTip/";
import ProgressBarContainer from "./ProgressBarContainer";

class ProgressBar extends Component {
	static defaultProps = {
		barColor: "#d20662",
		backgroundColor: "#e0dee4",
		showToolTip: true
	};

	progressInterval = 0;

	state = { count: 0 };

	componentDidMount() {
		this.progressInterval = setInterval(this.initLineAnimation, 30);
	}

	componentWillUnmount() {
		clearInterval(this.progressInterval);
	}

	initLineAnimation = () => {
		let { percentValue } = this.props;

		this.setState(({ count }) => {
			if (count >= percentValue) {
				return null;
			}

			return { count: count + 1 };
		});
	};

	render() {
		return (
			<ProgressBarContainer>
				{this.props.progressTitle ? (
					<text>{this.props.progressTitle}</text>
				) : (
					""
				)}

				<LineProgress
					height="10px"
					width="100%"
					className={this.props.className}
				>
					<g className="progress-content">
						<rect
							x="0"
							y="25%"
							width="100%"
							height="50%"
							fill={this.props.backgroundColor}
							className="background-rect"
						/>

						<rect
							x="0"
							y="0"
							width={this.state.count + "%"}
							height="100%"
							fill={this.props.barColor}
						/>
					</g>
				</LineProgress>

				{this.props.showToolTip ? (
					<ToolTip
						toolTipStyles={this.props.toolTipStyles}
						toLeft={this.state.count - 2}
						styles={{
							top: this.props.progressTitle ? "-3rem" : "-5rem"
						}}
					>
						{this.state.count.toString() + "%"}
					</ToolTip>
				) : (
					""
				)}
			</ProgressBarContainer>
		);
	}
}

ProgressBar.propTypes = {
	toolTip: PropTypes.bool,
	percentValue: PropTypes.number.isRequired,
	barColor: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	className: PropTypes.string,
	toolTipStyles: PropTypes.object,
	progressTitle: PropTypes.string,
	showToolTip: PropTypes.bool.isRequired
};

export default ProgressBar;

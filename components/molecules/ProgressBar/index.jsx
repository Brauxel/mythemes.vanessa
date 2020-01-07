import React, { Component } from "react";
import PropTypes from "prop-types";
import LineProgress from "./styles";

class ProgressBars extends Component {
	static defaultProps = {
		barColor: "#C2E362",
		backgroundColor: "#e0dee4"
	};

	progressInterval = 0;

	state = { count: 0 };

	componentDidMount() {
		this.progressInterval = setInterval(this.initLineAnimation, 2);
	}

	componentWillUnmount() {
		clearInterval(this.progressInterval);
	}

	initLineAnimation = () => {
		this.setState(({ count }) => {
			if (count > 50) {
				return null;
			}

			return { count: count + 1 };
		});
	};

	render() {
		return (
			<LineProgress id="line-progress" height="10px" width="100%">
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
		);
	}
}

ProgressBars.propTypes = {
	toolTip: PropTypes.bool,
	barColor: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired
};

export default ProgressBars;

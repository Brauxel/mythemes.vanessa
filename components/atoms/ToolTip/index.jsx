import PropTypes from "prop-types";
import {
	innerComp as ToolTipInnerComp,
	outerComp as ToolTipOuterComp
} from "./styles";
import DownArrow from "../../atoms/DownArrow/";
import FlexContainer from "../../containers/FlexContainer/";

const ToolTip = ({ children, toLeft, toolTipStyles, styles }) => (
	<ToolTipOuterComp style={{ left: toLeft + "%" }} styles={styles}>
		<FlexContainer
			styles={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}
		>
			<ToolTipInnerComp styles={toolTipStyles}>{children}</ToolTipInnerComp>
			<DownArrow
				styles={{
					borderTopColor: extractColor(toolTipStyles)
				}}
			/>
		</FlexContainer>
	</ToolTipOuterComp>
);

function extractColor(styles = {}) {
	return Object.prototype.hasOwnProperty.call(styles, "background")
		? styles.background
		: "#454652";
}

// Specifies the default values for props:
ToolTip.defaultProps = {
	toLeft: 0
};

ToolTip.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired,
	toLeft: PropTypes.number.isRequired,
	toolTipStyles: PropTypes.object,
	styles: PropTypes.object
};

export default ToolTip;

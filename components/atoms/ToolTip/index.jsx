import PropTypes from "prop-types";
import {
	innerComp as ToolTipInnerComp,
	outerComp as ToolTipOuterComp
} from "./styles";
import DownArrow from "../../atoms/DownArrow/";
import FlexContainer from "../../containers/FlexContainer/";

const ToolTip = ({ children, toLeft, ...cssProps }) => (
	<ToolTipOuterComp style={{ left: toLeft + "%" }} {...cssProps}>
		<FlexContainer
			styles={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}
		>
			<ToolTipInnerComp>{children}</ToolTipInnerComp>
			<DownArrow />
		</FlexContainer>
	</ToolTipOuterComp>
);

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
	toLeft: PropTypes.number.isRequired
};

export default ToolTip;

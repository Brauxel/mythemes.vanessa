import styled from "styled-components";
import { fontSizes, iPadFontSizes } from "./cssVariables";
import { minBreakpoints } from "../../styles/breakpoints";

const styles = styled.h1`
	color ${props => props.color || "#43474d"};
	text-align: ${props => props.textAlign || "inherit"};
	text-transform: ${props => props.textTransform || "uppercase"};
	font-size: ${props => props.fontSize || fontSizes[props.as || "h1"]};
	margin-bottom: ${props => props.marginTop || "8px"};
	font-family: ${props =>
		props.fontFamily || "'Raleway', Helvetica, Arial, sans-serif"};

	@media ${minBreakpoints.iPadPortrait} {
		font-size: ${props => props.iPadFontSize || iPadFontSizes[props.as || "h1"]};
		margin-bottom: ${props => props.iPadmarginTop || "10px"};
	}
`;

export default styles;

import styled from "styled-components";
import { fontSizes, iPadFontSizes } from "./cssVariables";
import { minBreakpoints } from "../../styles/breakpoints";
import { generateCSS } from "../../../helpers/utilities";

const styles = styled.h1`
	color: #43474d;
	text-transform: uppercase;
	font-size: ${props => fontSizes[props.as || "h1"]};
	margin-bottom: 0.8rem;
	font-family: "Raleway", Helvetica, Arial, sans-serif;
	letter-spacing: 1rem;
	${props => generateCSS(props.styles)}

	@media ${minBreakpoints.mobileLandscape} {
		${props => generateCSS(props.mobileLandscapeStyles)}
	}	

	@media ${minBreakpoints.iPadPortrait} {
		font-size: ${props => iPadFontSizes[props.as || "h1"]};
		margin-bottom: 10px;
		${props => generateCSS(props.iPadPortraitStyles)}
	}

	@media ${minBreakpoints.iPadLandscape} {
		${props => generateCSS(props.iPadLandscapeStyles)}
	}		
`;

export default styles;

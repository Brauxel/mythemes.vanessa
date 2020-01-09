import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";
import { generateCSS } from "../../../helpers/utilities";

const styles = styled.th`
	padding: 1rem 0.5rem;	
	color: #43474d;

	${props => generateCSS(props.styles)}

	@media ${minBreakpoints.mobileLandscape} {
		padding: 1rem 1.5rem;
		${props => generateCSS(props.mobileLandscapeStyles)}
	}	

	@media ${minBreakpoints.iPadPortrait} {
		${props => generateCSS(props.iPadPortraitStyles)}
	}

	@media ${minBreakpoints.iPadLandscape} {
		${props => generateCSS(props.iPadLandscapeStyles)}
	}		
`;

export default styles;

import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";
import { generateCSS } from "../../../helpers/utilities";

const styles = styled.div`
	padding: 2.5rem 0 1.5rem 1.5rem;
	color: #bababa;

	${props => generateCSS(props.styles)}

	@media ${minBreakpoints.mobileLandscape} {
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

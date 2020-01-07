import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";
import { generateCSS } from "../../../helpers/utilities";

const styles = styled.div`
	display: block;
	${props => generateCSS(props.styles)}

	@media ${minBreakpoints.mobileLandscape} {
		display: block;
		${props => generateCSS(props.mobileLandscapeStyles)}
	}	

	@media ${minBreakpoints.iPadPortrait} {
		display: flex;
		${props => generateCSS(props.iPadPortraitStyles)}
	}

	@media ${minBreakpoints.iPadLandscape} {
		display: flex;
		${props => generateCSS(props.iPadLandscapeStyles)}
	}	
`;

export default styles;

import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";
import { generateCSS } from "../../../helpers/utilities";

const styles = styled.div`
	border: 1px solid #b0adb4;
	padding: 1rem 1.5rem;	
	margin-top: 0.25rem;
	margin-bottom: 0.25rem;
	color: #43474d;
	transition: all 0.3s ease-in;

	&:hover {
		color: #e0005f;
		border-color: #e0005f;
	}


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
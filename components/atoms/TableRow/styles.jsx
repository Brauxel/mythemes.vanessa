import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";
import { generateCSS } from "../../../helpers/utilities";

const styles = styled.tr`
	${props => generateCSS(props.styles)}

	&:nth-child(even) {
		background-color: #eae8ee;
	}

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

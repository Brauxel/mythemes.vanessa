import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";
import { generateCSS } from "../../../helpers/utilities";

const SectionContainerComponent = styled.div`
	padding-top: 10px;
	padding-bottom: 10px;

	${props => generateCSS(props.styles)}

	@media ${minBreakpoints.iPadPortrait} {
		padding-top: 20px;
		padding-bottom: 20px;
		${props => generateCSS(props.iPadPortraitStyles)}
	}
`;

export default SectionContainerComponent;

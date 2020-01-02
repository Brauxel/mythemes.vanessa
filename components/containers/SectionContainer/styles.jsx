import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";

const SectionContainerComponent = styled.div`
	padding-top: 10px;
	padding-bottom: 10px;

	@media ${minBreakpoints.iPadPortrait} {
		padding-top: 20px;
		padding-bottom: 20px;
	}
`;

export default SectionContainerComponent;

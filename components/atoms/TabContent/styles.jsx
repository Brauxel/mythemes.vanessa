import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";

const styles = styled.div`
	order: 99;
	flex-basis: 100%;
	flex-grow: 1;
	padding-top: 2rem;
	margin-top: ${props => (props.tabType === "secondary" ? "inherit" : "-1px")};
	${props => (props.tabType === "secondary" ? "background: #ffffff" : "")};
	${props =>
		props.tabType === "secondary" ? "" : "border-top: 1px solid #000;"};
`;

export default styles;

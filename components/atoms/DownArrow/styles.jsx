import styled from "styled-components";
import { generateCSS } from "../../../helpers/utilities";

const styles = styled.div`
	width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 8px solid #454652;

	${props => generateCSS(props.styles)}
`;

export default styles;

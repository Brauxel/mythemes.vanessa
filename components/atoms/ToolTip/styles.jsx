import styled from "styled-components";
import { generateCSS } from "../../../helpers/utilities";

const outerComp = styled.span`
	position: absolute;
	top: -4rem;
`;

const innerComp = styled.span`
	background: #454652;
	padding: 0.8rem 1.4rem;
	color: #fff;
	font-size: 1.2rem;

	${props => generateCSS(props.styles)}
`;

export { outerComp, innerComp };

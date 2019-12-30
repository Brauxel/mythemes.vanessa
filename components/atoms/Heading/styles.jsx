import styled from "styled-components";
import { fontSizes } from "./cssVariables";

const styles = styled.h1`
	color ${props => props.color || "#43474d"};
	text-align: ${props => props.textAlign || "inherit"};
	text-transform: ${props => props.textTransform || "uppercase"};
	font-size: ${props => props.fontSize || fontSizes[props.as || "h1"]};
	font-family: ${props =>
		props.fontFamily || "'Raleway', Helvetica, Arial, sans-serif"};

	@media screen and (min-width: 768px) {
		font-size: ${props => props.iPadfontSize || "4.8rem"};
	}

	h2 {
		font-size: 1rem;
	}
`;

export default styles;

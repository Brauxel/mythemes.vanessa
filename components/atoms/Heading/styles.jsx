import styled from "styled-components";

const styles = styled.h1`
	color ${props => props.color || "#43474d"};
	text-align: ${props => props.textAlign || "inherit"};
	text-transform: ${props => props.textTransform || "uppercase"};
	font-size: ${props => props.fontSize || "2.4rem"};
	font-family: ${props =>
		props.fontFamily || "'Raleway', Helvetica, Arial, sans-serif"};

	@media screen and (min-width: 768px) {
		font-size: ${props => props.iPadfontSize || "4.8rem"};
	}
`;

export default styles;

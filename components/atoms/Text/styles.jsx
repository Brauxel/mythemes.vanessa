import styled from "styled-components";

const styles = styled.p`
	color ${props => props.color || "inherit"};
	text-align: ${props => props.textAlign || "inherit"};
	font-family: ${props => props.fontFamily || "inherit"};
`;

export default styles;

import styled, { css } from "styled-components";

const initialLetterStyles = css`
	&::first-letter {
		float: left;
		font-size: 300%;
		line-height: 1;
		margin-right: 9px;
		color: ${props => props.initialLetterColor};
		${({ initialLetterBorder }) =>
			initialLetterBorder ? "border: 1px solid " + initialLetterBorder : ""};
		padding: 5px 10px;
		${({ initialLetterBackgroundColor }) =>
			initialLetterBackgroundColor
				? "background: " + initialLetterBackgroundColor
				: ""};
	}

	&::after {
		content: "";
		clear: both;
	}
`;

const styles = styled.p`
	color ${props => props.color || "inherit"};
	text-align: ${props => props.textAlign || "inherit"};
	font-family: ${props => props.fontFamily || "inherit"};

	${props => (props.initialLetterStyled ? initialLetterStyles : "")}
`;

export default styles;

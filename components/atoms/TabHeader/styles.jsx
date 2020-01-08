import styled, { css } from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";

const primaryStyles = css`
	border-bottom: 1px solid #fff;
`;

const primaryActiveStyles = css`
	border: 1px solid #000;
	border-bottom: 1px solid #fff;
	z-index: 1;
	color: #e0005f;
`;

const secondaryStyles = css`
	border-top: 3px solid transparent;
`;

const secondaryActiveStyles = css`
	border-top: 3px solid #e0005f;
	background-color: #fff;
`;

function determineStyles(tabType = "primary", active = false) {
	if (tabType === "secondary") {
		if (active) {
			return secondaryActiveStyles;
		} else {
			return secondaryStyles;
		}
	}

	if (active) {
		return primaryActiveStyles;
	}

	return primaryStyles;
}

const styles = styled.div`
	font-size: 1.2rem;
	line-height: 3.6rem;
	font-family: "Roboto";
	font-weight: 300;
	text-align: center;
	cursor: pointer;
	padding: 0 2rem;
	text-transform: uppercase;
	color: #000;
	transition: color 0.2s ease-in 0.1s;
	letter-spacing: 0.3rem;
	${props => determineStyles(props.tabType, props.active)}

	&:hover {
		color: #e0005f;
	}

	@media ${minBreakpoints.desktop} {
		padding: 0 3rem;
	}
`;

export default styles;

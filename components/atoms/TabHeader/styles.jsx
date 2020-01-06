import styled from "styled-components";
import { minBreakpoints } from "../../styles/breakpoints";

const styles = styled.div`
	font-size: 1.2rem;
	line-height: 3.6rem;
	font-family: "Roboto";
	font-weight: 300;
	text-align: center;
	border-bottom: 1px solid #000;
	cursor: pointer;
	padding: 0 2rem;
	text-transform: uppercase;
	color: #000;
	transition: color 0.2s ease-in 0.1s;

	&:hover {
		color: #e0005f;
	}

	&.active {
		border: 1px solid #000;
		border-bottom: 1px solid #fff;
		z-index: 1;
		color: #e0005f;
	}

	border-bottom: 1px solid #fff;

	@media ${minBreakpoints.desktop} {
		padding: 0 3rem;
	}
`;

export default styles;

import styled from "styled-components";

const styles = styled.svg`
	.progress-content {
		rect {
			transition: width linear;

			&.background-rect {
				position: absolute;
				left: 0;
			}
		}
	}
`;

export default styles;

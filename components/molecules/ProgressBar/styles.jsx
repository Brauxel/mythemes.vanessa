import styled, { keyframes } from "styled-components";

// Create the keyframes
const dash = keyframes`
  from {
    stroke-dashoffset: 100%;
  }

  to {
    stroke-dashoffset: 50%;
  }
`;

const styles = styled.svg`
	.progress-container {
		stroke: darken(#392f32, 5%);
		stroke-width: 2px;
		fill: #392f32;
		.top {
			z-index: 2;
		}
	}
	.progress-content {
		stroke: darken(#c2e362, 5%);
		stroke-width: 2px;
		fill: #c2e362;
		.top {
			z-index: 1;
		}

		line {
			animation: ${dash} 1s linear;
			stroke-dashoffset: 50%;
		}
	}
	.percentage {
		fill: #f8f9f9;
		text-shadow: 1px 1px 1px black;
	}
`;

export default styles;

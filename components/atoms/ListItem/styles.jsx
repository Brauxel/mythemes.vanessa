import styled, { css } from "styled-components";

const decimalTypeStyles = css`
	counter-increment: my-awesome-counter;
	position: relative;

	&::before {
		content: counter(my-awesome-counter);
		color: #ffffff;
		font-size: 1.6rem;
		position: absolute;
		--size: 2.4rem;
		left: calc(-1 * var(--size) - 10px);
		line-height: var(--size);
		width: var(--size);
		height: var(--size);
		top: 0;
		background: #d20662;
		border-radius: 50%;
		text-align: center;
	}
`;

const discTypeStyles = css`
	position: relative;

	&::before {
		content: "";
		font-size: 1.6rem;
		position: absolute;
		--size: 1rem;
		line-height: var(--size);
		width: var(--size);
		height: var(--size);
		background: #d20662;
		border-radius: 50%;
		text-align: center;
		margin-top: auto;
		margin-bottom: auto;
		top: 0;
		left: calc(-2 * var(--size));
		bottom: 0;
		right: 0;
	}
`;

const imageTypeStyles = css`
	display: flex;
	align-items: center;

	> svg:first-child {
		padding: ${props =>
			props.imagePadding ? props.imagePadding + "em" : "0.5em"};
		width: 1.5em;
		margin-right: 20px;
		border-width: ${props =>
			props.imageBorderSize ? props.imageBorderSize : "1px"};
		border-color: ${props =>
			props.imageBorderColor ? props.imageBorderColor : "#d20662"};
	}
`;

const ListItem = styled.li`
	margin: 0 0 1.5rem 0;

	${props => determineType(props.type)}
`;

const determineType = type => {
	switch (type) {
		case "decimal":
			return decimalTypeStyles;
		case "image":
			return imageTypeStyles;
		default:
			return discTypeStyles;
	}
};

export default ListItem;

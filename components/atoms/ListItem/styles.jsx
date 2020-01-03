import styled from "styled-components";

const decimalTypeStyles = `
	content: counter(my-awesome-counter);
	color: #fcd000;
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
`;

const discTypeStyles = `
	content: "";
	color: #fcd000;
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
	top: 0; left: calc(-2 * var(--size)); bottom: 0; right: 0;
`;

const ListItem = styled.li`
	margin: 0 0 1.5rem 0;
	counter-increment: my-awesome-counter;
	position: relative;

	&::before {
		${props => (props.type === "decimal" ? decimalTypeStyles : discTypeStyles)}
	}
`;

export default ListItem;

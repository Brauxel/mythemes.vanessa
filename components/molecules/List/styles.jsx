import styled from "styled-components";

const orderedList = `
	counter-reset: my-awesome-counter;
	padding-left: 40px;
`;

const unOrderedList = `
	padding-left: 20px;
`;

const List = styled.ul`
	list-style: none;
	${props => (props.as === "ol" ? orderedList : unOrderedList)};
	${props => (props.type === "image" ? "padding-left: 0" : "")};
`;

export default List;

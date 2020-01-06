import styled from "styled-components";

const styles = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	${props => (props.tabType === "secondary" ? "background: #e0dee4" : "")}
`;

export default styles;

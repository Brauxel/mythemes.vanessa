import styled from "styled-components";

const styles = styled(props => {
	// We've disabled linting for the next line but remember to not make this the norm, the line below is an edge case
	const { color, textAlign, fontFamily, ...drillProps } = props; // eslint-disable-line

	return <p {...drillProps} />;
})`
    color ${props => props.color || "inherit"};
    text-align: ${props => props.textAlign || "inherit"};
    font-family: ${props => props.fontFamily || "inherit"};
`;

export default styles;

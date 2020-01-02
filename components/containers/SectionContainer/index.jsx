import SectionContainerComponent from "./styles";
import PropTypes from "prop-types";

const SectionContainer = props => {
	return (
		<SectionContainerComponent>{props.children}</SectionContainerComponent>
	);
};

SectionContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default SectionContainer;

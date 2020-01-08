import SectionContainerComponent from "./styles";
import PropTypes from "prop-types";

const SectionContainer = ({ children, ...cssProps }) => {
	return (
		<SectionContainerComponent {...cssProps}>
			{children}
		</SectionContainerComponent>
	);
};

SectionContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired,
	styles: PropTypes.object,
	mobileLandscapeStyles: PropTypes.object,
	iPadPortraitStyles: PropTypes.object,
	iPadLandscapeStyles: PropTypes.object
};

export default SectionContainer;

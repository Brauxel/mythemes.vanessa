import PropTypes from "prop-types";
import HeadingComp from "./styles";

const Heading = ({ children, as, ...cssProps }) => (
	<HeadingComp as={as} styles={cssProps}>
		{children}
	</HeadingComp>
);

Heading.propTypes = {
	as: PropTypes.string,
	styles: PropTypes.object,
	mobileLandscapeStyles: PropTypes.object,
	iPadPortraitStyles: PropTypes.object,
	iPadLandscapeStyles: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default Heading;

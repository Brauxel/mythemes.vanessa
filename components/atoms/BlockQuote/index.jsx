import PropTypes from "prop-types";
import BlockQuoteComp from "./styles";

const BlockQuote = ({ children, as, ...cssProps }) => (
	<BlockQuoteComp as={as} {...cssProps}>
		{children}
	</BlockQuoteComp>
);

BlockQuote.propTypes = {
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

export default BlockQuote;

import PropTypes from "prop-types";
import TableComp from "./styles";

const Table = ({ children, as, ...cssProps }) => (
	<TableComp as={as} {...cssProps}>
		{children}
	</TableComp>
);

Table.propTypes = {
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

export default Table;

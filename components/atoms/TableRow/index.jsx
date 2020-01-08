import PropTypes from "prop-types";
import TableRowComp from "./styles";

const TableRow = ({ children, as, ...cssProps }) => (
	<TableRowComp as={as} {...cssProps}>
		{children}
	</TableRowComp>
);

TableRow.propTypes = {
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

export default TableRow;

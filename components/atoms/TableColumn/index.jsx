import PropTypes from "prop-types";
import TableColumnComp from "./styles";

const TableColumn = ({ children, as, ...cssProps }) => (
	<TableColumnComp as={as} {...cssProps}>
		{children}
	</TableColumnComp>
);

TableColumn.propTypes = {
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

export default TableColumn;

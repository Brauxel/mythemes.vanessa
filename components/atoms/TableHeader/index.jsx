import PropTypes from "prop-types";
import TableHeaderComp from "./styles";

const TableHeader = ({ children, as, ...cssProps }) => (
	<TableHeaderComp as={as} {...cssProps}>
		{children}
	</TableHeaderComp>
);

TableHeader.propTypes = {
	as: PropTypes.string,
	styles: PropTypes.object,
	mobileLandscapeStyles: PropTypes.object,
	iPadPortraitStyles: PropTypes.object,
	iPadLandscapeStyles: PropTypes.object,
	colSpan: PropTypes.string,
	rowSpan: PropTypes.string,
	id: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default TableHeader;

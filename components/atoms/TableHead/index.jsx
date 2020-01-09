import PropTypes from "prop-types";
import TableHeadComp from "./styles";

const TableHead = ({ children, as, ...cssProps }) => (
	<TableHeadComp as={as} {...cssProps}>
		{children}
	</TableHeadComp>
);

TableHead.propTypes = {
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

export default TableHead;

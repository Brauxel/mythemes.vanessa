import PropTypes from "prop-types";
import TableBodyComp from "./styles";

const TableBody = ({ children, as, ...cssProps }) => (
	<TableBodyComp as={as} {...cssProps}>
		{children}
	</TableBodyComp>
);

TableBody.propTypes = {
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

export default TableBody;

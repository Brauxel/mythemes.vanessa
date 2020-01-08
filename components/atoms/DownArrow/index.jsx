import DownArrowComp from "./styles";
import PropTypes from "prop-types";

const DownArrow = ({ styles }) => <DownArrowComp styles={styles} />;

DownArrow.propTypes = {
	styles: PropTypes.object
};

export default DownArrow;

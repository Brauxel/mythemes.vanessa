import SiteContainerComponent from "./styles";
import PropTypes from "prop-types";

const SiteContainer = props => {
	return <SiteContainerComponent>{props.children}</SiteContainerComponent>;
};

SiteContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default SiteContainer;

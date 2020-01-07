import FlexBox from "./styles";
import PropTypes from "prop-types";

const FlexContainer = ({ children, ...cssObject }) => {
  return <FlexBox {...cssObject}>{children}</FlexBox>;
};

/* 
  - Prop Validation is required and cannot be ignored
  - ESLint is setup to throw up an errof if validation for a prop is not included
*/
FlexContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object,
  mobileLandscapeStyles: PropTypes.object,
  iPadPortraitStyles: PropTypes.object,
  iPadLandscapeStyles: PropTypes.object,
  desktopStyles: PropTypes.object,
  as: PropTypes.string
};

export default FlexContainer;

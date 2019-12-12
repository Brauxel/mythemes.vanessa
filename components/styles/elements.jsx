import { createGlobalStyle } from "styled-components";

const Elements = createGlobalStyle`
  body {
    font-family: ${props =>
      props.fontFamily || "'Roboto', Helvetica, Arial, sans-serif"};;
    font-weight: ${props => props.fontWeight || 300};;
    color: ${props => props.color || "#bababa"};
    font-size: ${props => props.fontSize || "1.4rem"};
    line-height: ${props => props.lineHeight || "1.5"};
  }

  body.noscroll {
    overflow: hidden;
  }

  html {
    font-size: 10px;
  }

  html.noscroll {
    overflow: hidden;
  }
`;

export default Elements;

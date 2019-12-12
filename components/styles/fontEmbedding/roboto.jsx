import { createGlobalStyle } from "styled-components";

const Roboto = createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    src: url('/static/fonts/roboto/roboto-light-webfont.eot');
    src: url('/static/fonts/roboto/roboto-light-webfont.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/roboto/roboto-light-webfont.woff2') format('woff2'),
         url('/static/fonts/roboto/roboto-light-webfont.woff') format('woff'),
         url('/static/fonts/roboto/roboto-light-webfont.ttf') format('truetype'),
         url('/static/fonts/roboto/roboto-light-webfont.svg#robotolight') format('svg');
    font-weight: light;
    font-style: normal;

}
`;

export default Roboto;

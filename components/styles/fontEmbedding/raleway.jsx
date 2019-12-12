import { createGlobalStyle } from "styled-components";

const Raleway = createGlobalStyle`
@font-face {
    font-family: 'Raleway';
    src: url('/static/fonts/raleway/raleway-light-webfont.eot');
    src: url('/static/fonts/raleway/raleway-light-webfont.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/raleway/raleway-light-webfont.woff2') format('woff2'),
         url('/static/fonts/raleway/raleway-light-webfont.woff') format('woff'),
         url('/static/fonts/raleway/raleway-light-webfont.ttf') format('truetype'),
         url('/static/fonts/raleway/raleway-light-webfont.svg#ralewaylight') format('svg');
    font-weight: light;
    font-style: normal;

}
`;

export default Raleway;

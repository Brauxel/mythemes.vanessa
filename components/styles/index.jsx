import { Fragment } from "react";
import "../../node_modules/normalize.css/normalize.css";
import "../../static/css/resets.css";
import { Raleway, Roboto } from "./fontEmbedding/";
import Elements from "./elements";

const Styles = () => (
	<Fragment>
		<Raleway />
		<Roboto />
		<Elements />
	</Fragment>
);

export default Styles;

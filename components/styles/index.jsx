import { Fragment } from "react";
import "../../node_modules/normalize.css/normalize.css";
import "../../static/css/resets.css";
import { Raleway, Roboto } from "./fontEmbedding/";
import Elements from "./elements";

const Styles = props => (
	<Fragment>
		<Raleway />
		<Roboto />
		<Elements {...props} />
	</Fragment>
);

export default Styles;

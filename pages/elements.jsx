import Styles from "../components/styles/";
import Text from "../components/atoms/Text/";
import Heading from "../components/atoms/Heading/";
import Toggle from "../components/atoms/Toggle/";

const Elements = () => (
	<main>
		<Styles />

		<Heading>Heading 1</Heading>

		<Text textAlign="center">
			There are many variations of passages of Lorem Ipsum available, but the
			majority have suffered.
		</Text>

		<Toggle />
	</main>
);

export default Elements;

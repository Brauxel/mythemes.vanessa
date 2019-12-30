import Styles from "../components/styles/";
import Text from "../components/atoms/Text/";
import Heading from "../components/atoms/Heading/";
import Toggle from "../components/containers/ToggleContainer/";

const Elements = () => (
	<main>
		<Styles />

		<Heading>Heading 1</Heading>
		<Heading as="h2">Heading 2</Heading>
		<Heading as="h3">Heading 3</Heading>
		<Heading as="h4">Heading 4</Heading>
		<Heading as="h5">Heading 5</Heading>
		<Heading as="h6">Heading 6</Heading>

		<Text textAlign="center">
			There are many variations of passages of Lorem Ipsum available, but the
			majority have suffered.
		</Text>

		<Heading>Toggle with no control prop</Heading>
		<Toggle />

		<Heading>Toggle with control prop</Heading>
		<Toggle on={true} />
	</main>
);

export default Elements;

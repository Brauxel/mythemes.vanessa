import Styles from "../components/styles/";
import Text from "../components/atoms/Text/";
import Heading from "../components/atoms/Heading/";
import Toggle from "../components/containers/ToggleContainer/";
import SiteContainer from "../components/containers/SiteContainer/";
import SectionContainer from "../components/containers/SectionContainer/";

const Elements = () => (
	<main>
		<SiteContainer>
			<Styles fontFamily="Raleway" />

			<SectionContainer>
				<Heading as="h2" textAlign="center">
					Typography
				</Heading>

				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don&apos;t look even slightly
					believable. If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn&apos;t anything embarrassing hidden in the middle
					of text. All the Lorem Ipsum generators on the Internet tend to repeat
					predefined chunks as necessary, making this the first true generator
					on the Internet. It uses a dictionary of over 200 Latin words,
					combined with a handful of model sentence structures, to generate
					Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
					therefore always free from repetition, injected humour, or
					non-characteristic words etc.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Heading>Heading 1</Heading>
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Heading as="h2">Heading 2</Heading>
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Heading as="h3">Heading 3</Heading>
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Heading as="h4">Heading 4</Heading>
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Heading as="h5">Heading 5</Heading>
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Heading as="h6">Heading 6</Heading>
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Text textAlign="center">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Heading>Toggle with no control prop</Heading>
				<Toggle />

				<Heading>Toggle with control prop</Heading>
				<Toggle on={true} />
			</SectionContainer>
		</SiteContainer>
	</main>
);

export default Elements;

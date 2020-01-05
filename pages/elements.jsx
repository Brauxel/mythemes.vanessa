import Styles from "../components/styles/";
//import Text from "../components/atoms/Text/";
//import Heading from "../components/atoms/Heading/";
import Toggle from "../components/containers/ToggleContainer/";
import SiteContainer from "../components/containers/SiteContainer/";
import SectionContainer from "../components/containers/SectionContainer/";

import { List, ListItem, Text, Heading } from "../components/ui/";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";

const Elements = () => (
	<main>
		<SiteContainer>
			<Styles />

			<SectionContainer>
				<Heading as="h2" textAlign="center">
					Typography
				</Heading>

				<Text color="red">
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
				<Heading as="h2" color="red">
					Heading 2
				</Heading>
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
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>

				<List as="ol">
					<ListItem>professional studio photography</ListItem>
					<ListItem>some styles web design like Picasso wide</ListItem>
					<ListItem>team like typography and proffesional tips</ListItem>
					<ListItem>branding, logo, infographics design</ListItem>
				</List>
			</SectionContainer>

			<SectionContainer>
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>

				<List>
					<ListItem>professional studio photography</ListItem>
					<ListItem>some styles web design like Picasso wide</ListItem>
					<ListItem>team like typography and proffesional tips</ListItem>
					<ListItem>branding, logo, infographics design</ListItem>
				</List>
			</SectionContainer>

			<SectionContainer>
				<Text>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</Text>

				<List type="image">
					<ListItem
						src={faPhotoVideo}
						size="2x"
						imageBorderSize="1px"
						imagePadding={0.25}
					>
						professional studio photography
					</ListItem>

					<ListItem src={faCommentAlt} size="2x">
						some styles web design like Picasso wide
					</ListItem>

					<ListItem>team like typography and proffesional tips</ListItem>
					<ListItem>branding, logo, infographics design</ListItem>
				</List>
			</SectionContainer>

			<SectionContainer>
				<Text initialLetterStyled initialLetterBorder="#d20662">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don&apos;t look even slightly
					believable. If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn&apos;t anything embarrassing hidden in the middle
					of text.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Text initialLetterStyled initialLetterColor="#d20662">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don&apos;t look even slightly
					believable. If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn&apos;t anything embarrassing hidden in the middle
					of text.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Text
					initialLetterStyled
					initialLetterColor="#d20662"
					initialLetterBorder="#000"
				>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don&apos;t look even slightly
					believable. If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn&apos;t anything embarrassing hidden in the middle
					of text.
				</Text>
			</SectionContainer>

			<SectionContainer>
				<Text
					initialLetterStyled
					initialLetterColor="#ffffff"
					initialLetterBorder="#d20662"
					initialLetterBackgroundColor="#d20662"
				>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don&apos;t look even slightly
					believable. If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn&apos;t anything embarrassing hidden in the middle
					of text.
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

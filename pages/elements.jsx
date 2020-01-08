import Styles from "../components/styles/";
//import Text from "../components/atoms/Text/";
//import Heading from "../components/atoms/Heading/";
import Toggle from "../components/containers/ToggleContainer/";
import SiteContainer from "../components/containers/SiteContainer/";
import SectionContainer from "../components/containers/SectionContainer/";

import {
	List,
	ListItem,
	Text,
	Heading,
	Tabs,
	Tab,
	TabHeader,
	TabContent,
	ProgressBar,
	FlexContainer,
	GridContainer
} from "../components/ui/";
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
				<Heading as="h3" textAlign="center">
					Tabs
				</Heading>

				<Tabs
					onToggle={(state = {}) => {
						console.log("onToggle in Elements", state);
					}}
				>
					<Tab id="1">
						<TabHeader>Introduction</TabHeader>

						<TabContent>
							<FlexContainer
								id="test-id"
								className="test-classname"
								as="article"
								styles={{
									backgroundColor: "pink"
								}}
								mobileLandscapeStyles={{
									backgroundColor: "black"
								}}
							>
								<Text>
									Combined with a handful of model sentence structures, to
									generate Lorem Ipsum which looks reasonable.
									<br /> The generated Lorem Ipsum is therefore always free from
									repetition, injected humour, or non-characteristic words etc.
									<br /> Combined with a handful of model sentence structures,
									to generate Lorem Ipsum which looks reasonable.
								</Text>

								<img src="/static/images/Nasa01.jpg" width="400" alt="Nasa" />
							</FlexContainer>
						</TabContent>
					</Tab>

					<Tab id="2">
						<TabHeader>Services</TabHeader>

						<TabContent>Services Content</TabContent>
					</Tab>

					<Tab id="3">
						<TabHeader>Our News</TabHeader>

						<TabContent>Our News Content</TabContent>
					</Tab>
				</Tabs>
			</SectionContainer>

			<SectionContainer>
				<Heading as="h3" textAlign="center">
					Tabs
				</Heading>

				<Tabs type="secondary">
					<Tab id="1">
						<TabHeader>Introduction</TabHeader>

						<TabContent>
							<Text>
								Combined with a handful of model sentence structures, to
								generate Lorem Ipsum which looks reasonable.
							</Text>
							<Text>
								The generated Lorem Ipsum is therefore always free from
								repetition, injected humour, or non-characteristic words etc.
							</Text>
							<Text>
								Combined with a handful of model sentence structures, to
								generate Lorem Ipsum which looks reasonable.
							</Text>

							<img src="/static/images/Nasa01.jpg" width="400" alt="Nasa" />
						</TabContent>
					</Tab>

					<Tab id="2">
						<TabHeader>Services</TabHeader>

						<TabContent>Services Content</TabContent>
					</Tab>

					<Tab id="3">
						<TabHeader>Our News</TabHeader>

						<TabContent>Our News Content</TabContent>
					</Tab>
				</Tabs>
			</SectionContainer>

			<SectionContainer>
				<Heading as="h3" textAlign="center">
					Progress bars
				</Heading>

				<ProgressBar
					className="test-class"
					barColor="green"
					backgroundColor="red"
					percentValue={70}
					progressTitle="Web Design"
					animationInterval={5}
					toolTipStyles={{
						background: "red",
						color: "green"
					}}
				/>

				<ProgressBar percentValue={40} showToolTip={true} />
			</SectionContainer>

			<SectionContainer>
				<Heading>Toggle with no control prop</Heading>
				<Toggle />

				<Heading>Toggle with control prop</Heading>
				<Toggle on={true} />
			</SectionContainer>

			<GridContainer>GRID CONTAINER</GridContainer>

			<FlexContainer>
				<SectionContainer>
					<Heading
						as="h2"
						styles={{
							textAlign: "center"
						}}
					>
						Typography
					</Heading>

					<Text color="red">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don&apos;t look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn&apos;t anything embarrassing hidden in the
						middle of text. All the Lorem Ipsum generators on the Internet tend
						to repeat predefined chunks as necessary, making this the first true
						generator on the Internet. It uses a dictionary of over 200 Latin
						words, combined with a handful of model sentence structures, to
						generate Lorem Ipsum which looks reasonable. The generated Lorem
						Ipsum is therefore always free from repetition, injected humour, or
						non-characteristic words etc.
					</Text>
				</SectionContainer>
			</FlexContainer>
		</SiteContainer>
	</main>
);

export default Elements;

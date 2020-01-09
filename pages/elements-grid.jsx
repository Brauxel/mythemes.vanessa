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
	BlockQuote,
	Table,
	TableHead,
	TableHeader,
	TableBody,
	TableRow,
	TableColumn,
	GridContainer
} from "../components/ui/";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";

const Elements = () => (
	<main>
		<SiteContainer>
			<Styles />

			<SectionContainer>
				<Heading
					as="h2"
					styles={{
						textAlign: "center"
					}}
				>
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

			<FlexContainer
				iPadPortraitStyles={{
					display: "block"
				}}
			>
				<SectionContainer
					styles={{
						flexGrow: 1,
						flexBasis: "33.3%"
					}}
				>
					<SectionContainer>
						<Heading>Heading 1</Heading>

						<Text>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</Text>
					</SectionContainer>

					<SectionContainer>
						<Heading as="h2">Heading 2</Heading>
						<Text>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</Text>
					</SectionContainer>

					<SectionContainer>
						<Heading as="h3">Heading 3</Heading>
						<Text>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</Text>
					</SectionContainer>

					<SectionContainer>
						<Heading as="h4">Heading 4</Heading>
						<Text>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</Text>
					</SectionContainer>

					<SectionContainer>
						<Heading as="h5">Heading 5</Heading>
						<Text>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</Text>
					</SectionContainer>

					<SectionContainer>
						<Heading as="h6">Heading 6</Heading>
						<Text>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</Text>
					</SectionContainer>
				</SectionContainer>

				<SectionContainer
					styles={{
						flexGrow: 1,
						flexBasis: "33.3%"
					}}
				>
					<SectionContainer>
						<Text>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
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
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
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
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
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
				</SectionContainer>

				<SectionContainer
					styles={{
						flexGrow: 1,
						flexBasis: "33.3%"
					}}
				>
					<SectionContainer>
						<Text initialLetterStyled initialLetterBorder="#d20662">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don&apos;t look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn&apos;t anything embarrassing
							hidden in the middle of text.
						</Text>
					</SectionContainer>

					<SectionContainer>
						<Text initialLetterStyled initialLetterColor="#d20662">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don&apos;t look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn&apos;t anything embarrassing
							hidden in the middle of text.
						</Text>
					</SectionContainer>

					<SectionContainer>
						<Text
							initialLetterStyled
							initialLetterColor="#d20662"
							initialLetterBorder="#000"
						>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don&apos;t look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn&apos;t anything embarrassing
							hidden in the middle of text.
						</Text>
					</SectionContainer>

					<SectionContainer>
						<Text
							initialLetterStyled
							initialLetterColor="#ffffff"
							initialLetterBorder="#d20662"
							initialLetterBackgroundColor="#d20662"
						>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don&apos;t look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn&apos;t anything embarrassing
							hidden in the middle of text.
						</Text>
					</SectionContainer>
				</SectionContainer>
			</FlexContainer>

			<SectionContainer>
				<FlexContainer
					iPadPortraitStyles={{
						display: "block"
					}}
				>
					<SectionContainer
						style={{
							flexGrow: 1,
							flexBasis: "50%",
							padding: "2rem 2rem"
						}}
					>
						<Heading
							as="h3"
							styles={{
								textAlign: "center"
							}}
						>
							Blockquote
						</Heading>

						<Text>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don&apos;t look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn&apos;t anything embarrassing
							hidden in the middle of text.
						</Text>

						<BlockQuote>
							<em>
								All the Lorem Ipsum generators on the Internet tend to repeat
								predefined chunks as necessary, making this the first true
								generator on the Internet. It uses a dictionary of over 200
								Latin words, combined with a handful.
							</em>
						</BlockQuote>

						<Text>
							Combined with a handful of model sentence structures, to generate
							Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
							therefore always free from repetition, injected humour, or
							non-characteristic words etc.
						</Text>
					</SectionContainer>

					<SectionContainer
						style={{
							flexGrow: 1,
							flexBasis: "50%",
							padding: "2rem 2rem"
						}}
					>
						<Heading
							as="h3"
							styles={{
								textAlign: "center"
							}}
						>
							Table
						</Heading>

						<Table>
							<TableHead>
								<TableRow>
									<TableHeader>&nbsp;</TableHeader>
									<TableHeader>Column 1</TableHeader>
									<TableHeader>Column 2</TableHeader>
									<TableHeader>Column 3</TableHeader>
								</TableRow>
							</TableHead>

							<TableBody>
								<TableRow>
									<TableColumn
										styles={{
											color: "#43474d",
											textTransform: "uppercase",
											textAlign: "left"
										}}
									>
										Row 1
									</TableColumn>
									<TableColumn>45</TableColumn>
									<TableColumn>15</TableColumn>
									<TableColumn>new</TableColumn>
								</TableRow>

								<TableRow>
									<TableColumn
										styles={{
											color: "#43474d",
											textTransform: "uppercase",
											textAlign: "left"
										}}
									>
										Row 2
									</TableColumn>

									<TableColumn>
										<a href="/">126</a>
									</TableColumn>

									<TableColumn>46</TableColumn>

									<TableColumn>37</TableColumn>
								</TableRow>

								<TableRow>
									<TableColumn
										styles={{
											color: "#43474d",
											textTransform: "uppercase",
											textAlign: "left"
										}}
									>
										Row 3
									</TableColumn>
									<TableColumn>7</TableColumn>
									<TableColumn>56</TableColumn>
									<TableColumn>79</TableColumn>
								</TableRow>

								<TableRow>
									<TableColumn
										styles={{
											color: "#43474d",
											textTransform: "uppercase",
											textAlign: "left"
										}}
									>
										Row 4
									</TableColumn>
									<TableColumn>new</TableColumn>
									<TableColumn>23</TableColumn>
									<TableColumn>46</TableColumn>
								</TableRow>
							</TableBody>
						</Table>
					</SectionContainer>
				</FlexContainer>
			</SectionContainer>

			<SectionContainer>
				<Heading
					as="h3"
					styles={{
						textAlign: "center"
					}}
				>
					Accordion And Toggle
				</Heading>

				<FlexContainer
					iPadPortraitStyles={{
						display: "block"
					}}
				>
					<SectionContainer
						style={{
							flexGrow: 1,
							flexBasis: "50%",
							padding: "2rem 2rem"
						}}
					>
						Accordion goes here
					</SectionContainer>

					<SectionContainer
						style={{
							flexGrow: 1,
							flexBasis: "50%",
							padding: "2rem 2rem"
						}}
					>
						Secondary Accordion goes here
					</SectionContainer>
				</FlexContainer>
			</SectionContainer>

			<SectionContainer>
				<Heading
					as="h3"
					styles={{
						textAlign: "center"
					}}
				>
					Tabs
				</Heading>

				<FlexContainer
					iPadPortraitStyles={{
						display: "block"
					}}
				>
					<SectionContainer
						style={{
							flexGrow: 1,
							flexBasis: "50%",
							padding: "2rem 2rem"
						}}
					>
						<Tabs>
							<Tab id="1">
								<TabHeader>Introduction</TabHeader>

								<TabContent>
									<FlexContainer as="article">
										<Text>
											Combined with a handful of model sentence structures, to
											generate Lorem Ipsum which looks reasonable.
											<br /> The generated Lorem Ipsum is therefore always free
											from repetition, injected humour, or non-characteristic
											words etc.
											<br /> Combined with a handful of model sentence
											structures, to generate Lorem Ipsum which looks
											reasonable.
										</Text>

										<img
											src="/static/images/Nasa01.jpg"
											width="200"
											alt="Nasa"
										/>
									</FlexContainer>
								</TabContent>
							</Tab>

							<Tab id="2">
								<TabHeader>Services</TabHeader>

								<TabContent>Services Content</TabContent>
							</Tab>

							<Tab id="3">
								<TabHeader>Our News</TabHeader>

								<TabContent>
									<FlexContainer as="article">
										<Text>
											Combined with a handful of model sentence structures, to
											generate Lorem Ipsum which looks reasonable.
											<br /> The generated Lorem Ipsum is therefore always free
											from repetition, injected humour, or non-characteristic
											words etc.
											<br /> Combined with a handful of model sentence
											structures, to generate Lorem Ipsum which looks
											reasonable.
										</Text>
										<img
											src="/static/images/Nasa01.jpg"
											width="200"
											alt="Nasa"
										/>
									</FlexContainer>
								</TabContent>
							</Tab>
						</Tabs>
					</SectionContainer>

					<SectionContainer
						style={{
							flexGrow: 1,
							flexBasis: "50%",
							padding: "2rem 2rem"
						}}
					>
						<Tabs type="secondary">
							<Tab id="1">
								<TabHeader>Introduction</TabHeader>

								<TabContent>
									<FlexContainer as="article">
										<Text>
											Combined with a handful of model sentence structures, to
											generate Lorem Ipsum which looks reasonable.
											<br /> The generated Lorem Ipsum is therefore always free
											from repetition, injected humour, or non-characteristic
											words etc.
											<br /> Combined with a handful of model sentence
											structures, to generate Lorem Ipsum which looks
											reasonable.
										</Text>
										<img
											src="/static/images/Nasa01.jpg"
											width="200"
											alt="Nasa"
										/>
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
				</FlexContainer>
			</SectionContainer>
		</SiteContainer>
	</main>
);

export default Elements;

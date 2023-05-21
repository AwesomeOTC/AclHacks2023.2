import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Section, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0"
			sm-padding="40px 0 40px 0"
			background="linear-gradient(0deg,#1c1717 20.4%,rgba(0,0,0,.2) 100%),--color-dark url(https://uploads.quarkly.io/6467fa63820441001fb14f5b/images/pirategopewpew.jpg?v=2023-05-20T16:36:52.263Z) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Override slot="SectionContent" sm-align-items="center" />
			<Image src="https://uploads.quarkly.io/6467fa63820441001fb14f5b/images/logo.png?v=2023-05-20T19:13:33.158Z" display="block" width="300px" />
			<Box display="flex" margin="-16px -16px -16px -16px" flex-wrap="wrap" width="100%">
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex" font="--lead" />
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				/>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				/>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				/>
			</Box>
			<Box width="100%">
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Scallywag
					<br />
					Spotter
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					width="100%"
					text-align="center"
					font="300 40px/50px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
					color="#ffffff"
					border-color="#ffffff"
					box-shadow="0 0 0 0 #9f0808"
					text-shadow="0 0 0 #c71010"
					border-width="2px"
				>
					'Tis the legend of a Drunk-Driving Detector forged from the fiery depths of AI and ML!
				</Text>
			</Box>
		</Section>
		<Section
			padding="80px 0"
			sm-padding="40px 0"
			position="static"
			background="linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0, 0, 0, 0) 100%),#000000 url(https://uploads.quarkly.io/6467fa63820441001fb14f5b/images/07b2f940c36e4295302b8c5cbea4b4d7.jpg?v=2023-05-20T20:51:39.387Z) 0% 0%/cover"
			color="#e3d5d5"
		>
			<Override slot="SectionContent" align-items="center" color="#fffafa" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				This be about Scallywag Spotter
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Arrr, mateys! Scallywag Spotter be an idea brewed in the dark depths o' a 15-year-old scurvy dog's mind, aye. Aft spyin' a tiktok, he reckoned it be a blasted madness to be hauled in and charged with groggy drivin' 'cause ye swished mouthwash a mere 10 minutes afore (a tale as true as Davy Jones' locker). Henceforth, a crew o' 3 hearty souls set sail to craft and code a grand idea and invention to battle false accusations of groggy drivin'! Shiver me timbers, a piratical endeavor if there ever was one, scorin' a 20 on the piratiness scale!
			</Text>
			<Components.ButtonC pointer-events="auto" user-select="auto" />
		</Section>
		<Section padding="140px 0" sm-padding="40px 0 40px 0" background="linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%),url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box max-width="360px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				/>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Ahoy! The Spotter!
				</Text>
				<Text font="--base">
					Avast, me hearties! We be unveilin' the Scallywag Spotter, a masterpiece of code and craft. This marvel identifies groggy drivers like no other, usherin' in a new age of safe sailin'. With our officers and this mighty contraption, we be keepin' the seas clear o' wayward scoundrels. Raise yer tankards in celebration! Yo-ho-ho, for a sober driver's life!
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 90px 0" background="#f0e5dc linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 59%)" quarkly-title="Product-4">
			<Override slot="SectionContent" align-items="center" />
			<Box
				min-width="100px"
				min-height="100px"
				display="block"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				grid-gap="0 35px"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
				margin="0px 0px 0 0px"
				lg-margin="0px 0px 0 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="row"
					align-items="center"
					md-flex-direction="column"
				>
					<Image
						src="https://uploads.quarkly.io/6467fa63820441001fb14f5b/images/343259310_3618833308442065_7038958094780883619_n.jpg?v=2023-05-21T04:57:46.064Z"
						display="block"
						max-width="100%"
						margin="0px 0px 0 0px"
						height="500px"
						width="50%"
						object-fit="cover"
						sm-height="220px"
						md-width="100%"
						md-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 35px 0px"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="0px 80px 0px 80px"
						width="50%"
						lg-padding="0px 50px 0px 50px"
						md-width="100%"
						sm-padding="0px 0 0px 0"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 42px/1.2 --fontFamily-sans" text-align="left" lg-font="normal 600 36px/1.2 --fontFamily-sans">
							Argggggghhhhhhh me eyes spot a product!
						</Text>
						<Text margin="0px 0px 50px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" lg-margin="0px 0px 40px 0px" sm-margin="0px 0px 30px 0px">
							Avast, me hearties! Listen up, for we've a proposition for ye! Set yer sights upon our mighty treasure, a product forged with the blood, sweat, and tears of our pirate crew. We humbly beseech ye, lend us yer support, and partake in our fine wares. By purchasin' our treasure, ye not only acquire a remarkable creation but also contribute to the sustenance of our pirate horde. We be in need of a bit o' gold to keep our sails full and our cannons roar. So, if ye seek adventure and wish to aid our pirate cause, seize this opportunity and acquire our prized possession! Let the spirit of the pirate's code guide ye, and may fortune smile upon us all!
						</Text>
						<Button
							font="normal 500 18px/1.5 --fontFamily-sans"
							href="/"
							padding="0 0 0 0"
							background="0"
							color="--red"
						/>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0" background="linear-gradient(0deg,rgba(0,0,0,1) 3.3%,rgba(0,0,0,0) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6467fa63820441001fb14f5b/images/pirate.jpg?v=2023-05-21T16:39:06.598Z) 0% 0%/contain">
			<Override slot="SectionContent" align-items="center" color="#ffffff" />
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
			>
				Soused Sailin' Scallywag and Arrr, Balancin' Scallywag{" "}
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				"Arrr, here be a diagnostic test for future reckonin' in catchin' scurvy dogs sailin' under the influence o' rum. Take the test, forget about it, and then take it when ye might be three sheets to the wind to be rightly identified as a drunk driver. Go here for the project!https://scratch.mit.edu/projects/854424850. Also check out the Arrr, Balancin' Scallywag using CV for drunk detection. Link here! https://scratch.mit.edu/projects/854455544
			</Text>
		</Section>
		<Section text-align="center" padding="80px 0" sm-padding="40px 0" background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%)">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				'Tis the creators!
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Avast, me hearties! Cast yer eyes upon this fine assemblage of scallywags! Here stand before ye the valiant trio whose combined wit and skill hath breathed life into the wondrous marvel known as the Scallywag Spotter! From the fertile grounds of imagination to the realm of tangible reality, these three minds have toiled tirelessly, overcoming challenges and charting uncharted waters to birth this extraordinary creation! Let their names be whispered among pirate legends, for their ingenuity and determination have forever shaped the course of our pirate tale!
			</Text>
			<Image src="https://uploads.quarkly.io/6467fa63820441001fb14f5b/images/image0.jpeg?v=2023-05-21T16:29:30.344Z" display="block" />
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px" />
				<Box padding="10px" />
				<Box padding="10px" />
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6467fa63820441001fb14f59"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
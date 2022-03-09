import React from "react";
import {
	DiFirebase,
	DiReact,
	DiZend,
} from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="skills">
		<SectionDivider divider />
		<SectionTitle>Skills</SectionTitle>
		<SectionText>
			I have worked with a range a
			technologies in the web development
			world. I have worked with the
			following technologies:
		</SectionText>
		<List>
			<ListItem>
				<picture>
					<DiReact size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>
						Front-End
					</ListTitle>
					<ListParagraph>
						Experiece with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiFirebase size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>
						Back-End
					</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider colorAlt />
	</Section>
);

export default Technologies;

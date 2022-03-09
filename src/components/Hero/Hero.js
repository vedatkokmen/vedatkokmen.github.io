import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Personal Portfolio
				</SectionTitle>
				<SectionText>
					Translator, self taught
					developer. I am a passionate
					and creative person who loves
					to create and build things.
				</SectionText>
				<Button
					onClick={() =>
						(window.location =
							"mailto:vedatkoekmen@gmail.com")
					}
				>
					Contact Me
				</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;

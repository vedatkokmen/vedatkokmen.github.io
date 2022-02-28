import Acomplishments from "../src/components/Acomplishments/Acomplishments";
import BgAnimation from "../src/components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../src/components/Hero/Hero";
import Technologies from "../src/components/Technologies/Technologies";
import Timeline from "../src/components/TimeLine/TimeLine";
import { Layout } from "../src/layout/Layout";
import { Section } from "../src/styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Vedat Kökmen</title>
        <meta
          name="description"
          content="Vedat Kökmen is a Front-End Developer based in Istanbul, Turkey. He is a passionate and creative person who loves to create and build things. He is a self-taught developer and has a passion for learning new technologies and frameworks."
        />
        <meta
          name="keywords"
          content="frontend developer vedat kökmen istanbul translator turkish sdl reactjs javascript"
        />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;

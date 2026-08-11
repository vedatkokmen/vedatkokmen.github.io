import Head from "next/head";
import About from "../src/components/About";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vedat Kokmen | Full-Stack AI Engineer</title>
        <meta
          name="description"
          content="Vedat Kokmen is a full-stack AI engineer building production software with React, TypeScript, .NET and AI-native development workflows."
        />
        <meta
          name="keywords"
          content="Vedat Kökmen, full-stack AI engineer, AI agents, agentic development, React, TypeScript, .NET, C#, Microsoft 365, Microsoft Graph, Azure"
        />
        <meta property="og:title" content="Vedat Kokmen | Full-Stack AI Engineer" />
        <meta
          property="og:description"
          content="Full-stack AI engineer building production software with React, TypeScript, .NET and AI-native development workflows."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </Layout>
    </div>
  );
}

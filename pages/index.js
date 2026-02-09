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
        <title>Vedat Kokmen | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Vedat Kokmen - Full-stack developer specializing in React, ASP.NET, and Node.js with experience crafting efficient web applications."
        />
        <meta
          name="keywords"
          content="web developer, portfolio, vedat kökmen, full-stack developer, react, asp.net, node.js, typescript"
        />
        <meta property="og:title" content="Vedat Kokmen | Full-Stack Developer" />
        <meta property="og:description" content="Full-stack developer specializing in React, ASP.NET, and Node.js" />
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

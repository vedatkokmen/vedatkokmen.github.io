import Image from "next/image";

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-center about-center">
        <article>
          <Image
            src="/blush.svg"
            className="hero-photo"
            alt="about img"
            width="300"
            height="300"
          />
        </article>
        <article className="about-info">
          <div className="section-title about-title">
            <h2>about</h2>
            <div className="underline"></div>
          </div>
          <p>
            Hi, I'm Vedat. I have 8 years of experience as an English-Turkish
            Translator/Reviewer, where I ensure smooth and culturally
            appropriate translations while maintaining the original meaning and
            style. Additionally, I am a self-taught and highly motivated web
            developer, looking to pursue a career in building web applications
            and services.
          </p>
          <p>
            I offer full-stack web development services, specializing in React,
            ASP.NET, and Node.js.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;

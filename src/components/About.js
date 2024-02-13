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
            Hi, I am Vedat, a results-driven full-stack developer specializing in React, ASP.NET, and Node.js. With nearly 2 years of hands-on experience, I craft efficient and engaging web applications.
          </p>
          <p>
            I focus on delivering clean code, optimal performance, and user-centric experiences. Let us collaborate to bring your digital projects to life.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;

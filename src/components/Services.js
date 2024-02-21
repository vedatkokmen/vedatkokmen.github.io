import { FaCode } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";

function Services() {
  return (
    <section className="section bg-grey" id="services">
      <div className="section-title">
        <h2>services</h2>
        <div className="underline"></div>
      </div>
      <div className="services-center section-center">
        <article className="service">
          <FaCode className="service-icon" />
          <h4>web development</h4>
          <div className="underline"></div>
          <p>
          Results-driven web developer with a proven track record of delivering high-quality solutions in C#, .NET, React, and TypeScript. With two years of hands-on experience and a strong foundation in full-stack development, I am committed to driving innovation, collaborating effectively in team environments, and continuously expanding my skill set. Passionate about leveraging technology to solve complex problems and eager to explore new opportunities for growth and advancement in the field of web development.
          </p>
        </article>

        <article className="service">
          <MdTranslate className="service-icon" />
          <h4>translation/review</h4>
          <div className="underline"></div>
          <p>
            Specializing in translating and reviewing UI and UA strings,
            operator manuals, workshop service manuals, and user manuals for
            leading international clients in the automotive and technology
            industries, from English to Turkish. Additionally, I provide
            post-editing and quality assurance services.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;

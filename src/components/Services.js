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
            With three years of coding experience, I am eager to embark on a
            career in web development. I am looking for opportunities to gain
            practical experience, collaborate in both team and individual
            settings, enhance my skills, and master my current abilities.
            Although I am currently employed, I am open to new prospects.
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

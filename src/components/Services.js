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
            As an experienced Translator, I am looking for a Web Developer
            role/experience. I have been regularly coding for over 2 years and
            finally, I feel ready to start my developer career. My goal is to
            gain experience, work in teams and/or individually, learn new
            skills, master existing ones.
          </p>
        </article>

        <article className="service">
          <MdTranslate className="service-icon" />
          <h4>translation/review</h4>
          <div className="underline"></div>
          <p>
            Translation, review, post-editing and QA of UI and UA strings,
            operator manuals, workshop service manuals, user manuals, etc. for
            leading international clients within automotive and tech from EN-TR.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;

import Image from 'next/image';
import Link from 'next/link';

function About() {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'C#', '.NET',
    'Node.js', 'PostgreSQL', 'REST APIs', 'GraphQL',
    'Tailwind', 'Docker', 'Git'
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-image-frame">
            <Image
              src="/5.jpg"
              alt="Vedat Kökmen"
              fill
              className="about-image"
            />
          </div>
          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Building with purpose and precision</h2>
            <p className="about-text">
              I&apos;m a results-driven full-stack developer specializing in C#, React, ASP.NET, and Node.js.
              With 5 years of hands-on experience, I craft efficient and engaging web applications,
              focusing on clean code, optimal performance, and user-centric experiences.
            </p>
            <p className="about-highlight">
              &quot;I don&apos;t just write code; I build solutions that make a difference.&quot;
            </p>
            <p className="about-text">
              My approach combines technical expertise with a passion for continuous learning.
              I stay current with modern best practices and apply them to solve complex problems,
              delivering tangible value through scalable, maintainable architecture.
            </p>
            <div className="about-tags">
              {skills.map((skill) => (
                <span key={skill} className="about-tag">
                  {skill}
                </span>
              ))}
            </div>
            <Link href="#contact" className="btn btn-primary">
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

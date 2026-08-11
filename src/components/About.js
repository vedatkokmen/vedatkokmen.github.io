import Image from 'next/image';
import Link from 'next/link';

function About() {
  const skills = [
    'AI Agents', 'Agentic Development', 'Claude Code',
    'React', 'TypeScript', 'Next.js', 'C#', '.NET',
    'Node.js', 'REST APIs', 'Microsoft Graph', 'Azure'
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
            <h2 className="section-title">Building software differently</h2>
            <p className="about-text">
              I&apos;m a full-stack engineer specializing in React, TypeScript, C#, and .NET,
              with experience building enterprise Microsoft 365 governance applications and
              independent products from the ground up.
            </p>
            <p className="about-highlight">
              &quot;The valuable part of engineering is increasingly about reasoning, architecture,
              validation, and outcomes — not manually producing every line of code.&quot;
            </p>
            <p className="about-text">
              My development workflow is now heavily AI-native. I use AI agents, including
              Claude Code, throughout the software lifecycle: understanding requirements,
              exploring existing codebases, planning implementations, writing and refactoring
              code, generating tests, investigating bugs, and iterating on features.
              This has significantly reduced development time and helped reduce bugs while
              letting me focus more on product decisions and system design.
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

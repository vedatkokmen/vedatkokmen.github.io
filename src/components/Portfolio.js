import Link from 'next/link';
import Image from 'next/image';

function Portfolio() {
  const projects = [
    {
      title: 'External User Manager',
      description: 'Enterprise Microsoft 365 governance software for managing external users and collaboration environments, built with React, TypeScript, .NET, Microsoft Graph, and Azure.',
      image: '/eum-screenshot.png',
      tags: ['React', 'TypeScript', '.NET', 'Microsoft Graph', 'Azure'],
      link: 'https://appsource.microsoft.com/en-us/product/office/wa200003014'
    },
    {
      title: 'Shortcut Social',
      description: 'An independent location-based social and dating product designed for Bali, taken from product concept through implementation and deployment using an AI-native development workflow.',
      tags: ['React Native', 'TypeScript', 'AI Agents', 'Product Engineering'],
      link: 'https://shortcut4u.com/'
    },
    {
      title: 'Runway Lite',
      description: 'A lightweight financial modeling tool for founders that calculates runway, cash-flow projections, burn rate, and break-even scenarios.',
      tags: ['React', 'TypeScript', 'Financial Modeling'],
      link: 'https://vedatkokmen.github.io/runwaylite/'
    },
    {
      title: 'First10',
      description: 'A focused outreach tracker for indie hackers to consistently run daily outreach and acquire their first users.',
      tags: ['React', 'TypeScript', 'Product'],
      link: 'https://vedatkokmen.github.io/first10-users/'
    }
  ];

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Products &amp; Platforms</h2>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article key={index} className="portfolio-card">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="portfolio-image-wrapper">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="portfolio-image"
                    />
                  ) : (
                    <div className="portfolio-image-placeholder" aria-hidden="true" />
                  )}
                  <span className="portfolio-badge">Featured</span>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="about-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="about-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="portfolio-link">View Project</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

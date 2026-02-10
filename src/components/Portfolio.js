import Link from 'next/link';
import Image from 'next/image';

function Portfolio() {
  const projects = [
    {
      title: 'External User Manager',
      description: 'A comprehensive Microsoft Teams governance solution for managing external users. Built with modern web technologies and integrated with Microsoft 365 APIs.',
      image: '/eum-screenshot.png',
      tags: ['React', 'TypeScript', 'Microsoft Graph API', 'Azure'],
      link: 'https://appsource.microsoft.com/en-us/product/office/wa200003014'
    },
    {
      title: 'Runway Lite',
      description: 'A lightweight runway + cashflow calculator for bootstrapped founders (6‑month forecast + break-even MRR)',
      tags: ['React', 'TypeScript'],
      link: 'https://vedatkokmen.github.io/runwaylite/'
    },
    {
      title: 'First10',
      description: 'A one-page outreach tracker for indie hackers to consistently run daily outreach and land their first users.',
      tags: ['React', 'TypeScript'],
      link: 'https://vedatkokmen.github.io/first10-users/'
    },
    {
      title: 'LessonPulse',
      description: 'A one-page tool that turns a topic list + class length into a timed lesson plan with built-in engagement check-ins.',
      tags: ['React', 'TypeScript'],
      link: 'https://vedatkokmen.github.io/lessonpulse/'
    }
  ];

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Work</span>
          <h2 className="section-title">Featured Projects</h2>
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="portfolio-image"
                  />
                  <span className="portfolio-badge">Featured</span>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
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

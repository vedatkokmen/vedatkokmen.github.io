function Services() {
  const services = [
    {
      number: '01',
      title: 'AI-Native Product Development',
      description: 'Build production applications using AI agents throughout planning, implementation, testing, debugging, and iteration — not just code completion.'
    },
    {
      number: '02',
      title: 'Full-Stack Engineering',
      description: 'End-to-end React, TypeScript, and .NET development with scalable APIs, databases, integrations, and cloud infrastructure.'
    },
    {
      number: '03',
      title: 'Product Engineering',
      description: 'Take ideas from requirements to production: architecture, implementation, validation, deployment, and continuous iteration with a strong focus on outcomes.'
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Build. Automate. Ship.</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <span className="service-number">{service.number}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

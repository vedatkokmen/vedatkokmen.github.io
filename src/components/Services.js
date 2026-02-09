function Services() {
  const services = [
    {
      number: '01',
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern frameworks and architectures. From database design to responsive frontends, I build complete solutions that scale.'
    },
    {
      number: '02',
      title: 'API Design & Integration',
      description: 'RESTful and GraphQL API design with focus on performance, security, and developer experience. Seamless integration with third-party services and microservices.'
    },
    {
      number: '03',
      title: 'Code Architecture',
      description: 'Clean, maintainable code with modern best practices. Test-driven development, documentation, and scalable architecture patterns that stand the test of time.'
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Services</span>
          <h2 className="section-title">What I Do</h2>
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

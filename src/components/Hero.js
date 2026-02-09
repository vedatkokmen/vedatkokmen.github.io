import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg">
        <div className="hero-grid">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="hero-grid-line" />
          ))}
        </div>
        <div className="hero-accent-1" />
        <div className="hero-accent-2" />
        <div className="hero-noise" />
      </div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge animate-in">
              <span className="hero-badge-dot" />
              Available for work
            </div>
            <span className="hero-label animate-in animate-delay-1">Full-Stack Developer</span>
            <h1 className="hero-title animate-in animate-delay-2">
              <span className="line">Vedat</span>
              <span className="line">Kökmen<span className="highlight">.</span></span>
            </h1>
            <p className="hero-description animate-in animate-delay-3">
              I build scalable web applications with clean code, intuitive design,
              and performance at the forefront. Specialized in React, .NET, and modern architecture.
            </p>
            <div className="hero-actions animate-in animate-delay-4">
              <Link href="#portfolio" className="btn btn-primary">
                View Work <FiArrowRight />
              </Link>
              <Link href="#contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
            <div className="hero-meta animate-in animate-delay-4">
              <div className="hero-stat">
                <div className="hero-stat-number">5</div>
                <div className="hero-stat-label">Years</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">10+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">100%</div>
                <div className="hero-stat-label">Dedicated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator animate-in animate-delay-5">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </header>
  );
}

export default Hero;

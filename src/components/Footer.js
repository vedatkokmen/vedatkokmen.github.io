import Link from 'next/link';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/vedatkokmen', icon: FiGithub, label: 'GitHub' },
    { href: 'https://linkedin.com/in/vedatkokmen', icon: FiLinkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/vedatkokmen', icon: FiInstagram, label: 'Instagram' },
  ];

  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              Vedat<span>.</span>
            </Link>
            <p className="footer-description">
              Full-stack developer crafting efficient, scalable web applications
              with modern technologies and clean code.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
              <a
                href="mailto:vedatkoekmen@gmail.com"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Vedat Kökmen. All rights reserved.
          </p>
          <p className="footer-built">
            Built with <strong>Next.js</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

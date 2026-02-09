import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/vedatkokmen', icon: FiGithub, label: 'GitHub' },
    { href: 'https://linkedin.com/in/vedatkokmen', icon: FiLinkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/vedatkokmen', icon: FiInstagram, label: 'Instagram' },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Vedat<span>.</span>
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <button
              className="nav-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="nav-social">
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

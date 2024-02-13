import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Header() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <button
              className="nav-btn"
              id="nav-btn"
              onClick={() => {
                setShowSideBar(!showSideBar);
              }}
            >
              {!showSideBar && <GiHamburgerMenu className="close-btn" />}
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/" passHref>
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link href="#about" passHref>
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="#services" passHref>
                <a>services</a>
              </Link>
            </li>
            <li>
              <Link href="#portfolio" passHref>
                <a>portfolio</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <aside
        className={`sidebar ${showSideBar ? "show-sidebar" : ""}`}
        id="sidebar"
      >
        <div>
          <button className="close-btn" id="close-btn">
            <MdClose
              className="close-icon"
              onClick={() => setShowSideBar(!showSideBar)}
            />
          </button>
          <ul className="sidebar-links">
            <li onClick={() => setShowSideBar(!showSideBar)}>
              <Link href="/" passHref>
                <a>home</a>
              </Link>
            </li>
            <li onClick={() => setShowSideBar(!showSideBar)}>
              <Link href="#about" passHref>
                <a>about</a>
              </Link>
            </li>
            <li onClick={() => setShowSideBar(!showSideBar)}>
              <Link href="#services" passHref>
                <a>services</a>
              </Link>
            </li>
            <li onClick={() => setShowSideBar(!showSideBar)}>
              <Link href="#portfolio" passHref>
                <a>portfolio</a>
              </Link>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <Link href="https://www.twitter.com/imvedat" passHref>
                <a>
                  <FaTwitter className="social-icon" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/vedatkokmen" passHref>
                <a>
                  <FaLinkedin className="social-icon" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.github.com/vedatkokmen" passHref>
                <a>
                  <FaGithub className="social-icon" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/vedatkokmen" passHref>
                <a>
                  <FaInstagram className="social-icon" />
                </a>
              </Link>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* <nav className="nav" id="nav">
        <ul className="nav-links">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="#portfolio">
              <a>portfolio</a>
            </Link>
          </li>
        </ul>
        <div
          className="md:hidden"
          style={
            {
              // media queries
            }
          }
        >
          {isOpen ? (
            <MdClose
              style={{
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              style={{
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </nav> */}
    </>
  );
}

export default Header;

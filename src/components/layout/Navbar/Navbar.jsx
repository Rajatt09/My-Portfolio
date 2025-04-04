import { useState, useEffect } from "react";
// import NavLink from "./Navlink";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#top", label: "HOME" },
    { href: "#work", label: "WORK" },
    { href: "#timeline", label: "TIMELINE" },
    { href: "#contact", label: "CONTACT" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Rajatt09",
      label: "GITHUB",
      logo: <FaGithub style={{ color: "white", fontSize: "20px" }} />,
    },
    {
      href: "https://www.linkedin.com/in/rajatbhati/",
      label: "LINKEDIN",
      logo: <FaLinkedin style={{ color: "white", fontSize: "20px" }} />,
    },
  ];

  return (
    <nav
      className={`navbar ${isVisible ? "motion-nav" : ""} ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <p
          to="/"
          className="navbar-logo"
          style={{
            position: "relative",
            zIndex: "5",
            color: "#FFFFFF",
            cursor: "default",
          }}
        >
          RAJAT BHATI
        </p>

        {/* Hamburger Icon */}
        <button
          className={`hamburger ${isMobileMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line hamburger-line2"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-social-links">
          <a
            className="nav-link"
            href="/Rajat Bhati.pdf"
            download="Rajat Bhati.pdf"
          >
            <FaDownload /> &nbsp; RESUME
          </a>
          {socialLinks.map((link) => (
            <NavLink
              key={link.href}
              target="_blank"
              to={link.href}
              className="nav-link"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}
        style={{
          height: isMobileMenuOpen ? "100vh" : "0vh",
          overflow: !isMobileMenuOpen ? "hidden" : "visible",
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
      >
        <div className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-link"
            >
              {link.label}
            </a>
          ))}
          <a
            className="mobile-link"
            href="../../../assets/Resume.pdf"
            download="Resume.pdf"
          >
            <FaDownload /> &nbsp; RESUME
          </a>
        </div>
        <div className="mobile-social-links">
          {socialLinks.map((link, index) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              {link.logo} &nbsp;
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="mobile-social-link"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

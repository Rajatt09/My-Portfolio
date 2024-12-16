import React from "react";
import "./Contact.css";
import handpic from "../../../assets/handpic.png";
import arrow from "../../../assets/arrow.png";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="interested-section">
      {/* Header Text */}
      <h1 className="main-text">
        INTERESTED IN{" "}
        <img src={handpic} alt="interested" className="hand-pic" /> <br />{" "}
        WORKING <span>TOGETHER?</span>
      </h1>

      {/* Contact Email */}
      <p className="contact-text">
        Contact me: <br />
        <a href="mailto:rajatbhati9559@gmail.com" className="email-link">
          rajatbhati9559@gmail.com
        </a>
        <img src={arrow} alt="pointer" className="arrow" />
      </p>

      {/* Social Buttons */}
      <div className="social-icons-mobile">
        <a
          href="https://github.com/rajatt09"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-mobile"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/rajatbhati"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-mobile"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/rajat___.13"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-mobile"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p style={{ color: "#FFFFFF" }}>
          Developed <br />
          by <span className="footer-name">Rajat Bhati</span>
        </p>
        <div className="social-buttons">
          <a href="https://github.com/rajatt09" target="_blank">
            <button className="social-btn">GITHUB</button>
          </a>
          <a href="https://linkedin.com/in/rajatbhati" target="_blank">
            {" "}
            <button className="social-btn">LINKEDIN</button>
          </a>
          <a href="https://www.instagram.com/rajat___.13" target="_blank">
            <button className="social-btn">INSTAGRAM</button>
          </a>
        </div>
        {/* <div className="scroll-text">SCROLL</div> */}
        <div>
          <p className="copyright">© 2024 - All Rights Reserved</p>
          <a href="#top" className="back-to-top">
            Back to top &nbsp; <FaArrowUp />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

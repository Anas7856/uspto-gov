import React, { useState } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShareAlt,
  FaPrint,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoDesktop from "../../assets/desktop-logo.png";
import "./Footer.scss";

const MY_USPTO = "https://my.uspto.gov/";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      {/* Was this page helpful */}
      <div className="footer__feedback">
        <div className="footer__feedback-inner">
          <div className="helpful">
            <span>Was this page helpful?</span>
            <button type="button" className="icon-btn">
              <FaThumbsUp />
            </button>
            <button type="button" className="icon-btn">
              <FaThumbsDown />
            </button>
          </div>
          <div className="page-actions">
            <div className="actions-row">
              <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                <FaShareAlt /> Share this page
              </a>
              <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                <FaPrint /> Print this page
              </a>
            </div>
            <p>
              <a
                href={MY_USPTO}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Additional information
              </a>{" "}
              about this page
            </p>
          </div>
        </div>
      </div>

      {/* Links + subscribe */}
      <div className="footer__links">
        <div className="footer__links-inner">
          <div className="links-col">
            <div className="top-row">
              <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                About the USPTO
              </a>
              <span>·</span>
              <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                Search for patents
              </a>
              <span>·</span>
              <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                Search for trademarks
              </a>
            </div>
            <hr />
            <div className="links-grid">
              <ul>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    US Department of Commerce
                  </a>
                </li>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    Financial and Performance Data
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    Vulnerability Disclosure Policy
                  </a>
                </li>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    Freedom of Information Act
                  </a>
                </li>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    Inspector General
                  </a>
                </li>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    NoFEAR Act
                  </a>
                </li>
                <li>
                  <a href={MY_USPTO} target="_blank" rel="noopener noreferrer">
                    USA.gov
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="subscribe-col">
            <h3>Receive updates from the USPTO</h3>
            <p>Enter your email to subscribe or update your preferences</p>
            <div className="subscribe-box">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark footer */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <a href="/" className="footer-logo">
            <img src={logoDesktop} alt="USPTO" className="footer-logo__img" />
          </a>

          <div className="social">
            <span>Follow us</span>
            <a
              href="https://www.facebook.com/uspto.gov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/uspto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/uspto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/uspto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Fixed Back to top */}
      <button type="button" className="back-top" onClick={scrollTop}>
        Back to top <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;

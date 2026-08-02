import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import TikTok from "../../assets/icons/tiktok.svg?react";
import Location from "../../assets/icons/location.svg?react";
import Logo from "../../assets/icons/cpi_logo.svg?react";
import { Link } from "react-router-dom";

import { BOOKING_URL, FACEBOOK_URL, GOOGLE_MAPS_URL, INSTAGRAM_URL, TIKTOK_URL } from "../../config/links";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-body">
        <div className="footer-header">
          <div className="branding-wrapper">
            <div className="branding">
              <Logo className="logo" />
              <span className="brand-name">CONNER POHL INSTRUCTION</span>
            </div>
            <span className="mission">
              Conner Pohl Instruction is built on a deep competitive drive and a passion for bringing out the best in
              every player.
            </span>
            <div className="socials-location-wrapper">
              <div className="socials-wrapper">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conner Pohl Instruction on Facebook"
                >
                  <Facebook className="social-icon" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conner Pohl Instruction on Instagram"
                >
                  <Instagram className="social-icon" />
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conner Pohl Instruction on TikTok"
                >
                  <TikTok className="social-icon" />
                </a>
              </div>
              <div className="locations-wrapper">
                <Location className="location-icon" />
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                  2326 OH-718, Troy, OH 45373
                </a>
              </div>
            </div>
          </div>
          <nav className="sitemap" aria-label="Footer">
            <div className="links-wrapper">
              <span className="header">Quick Links</span>
              <Link to="/" className="rolling-link">
                <span data-hover="Home">Home</span>
              </Link>
              <Link to="/about" className="rolling-link">
                <span data-hover="About">About</span>
              </Link>
              <Link to="/testimonies" className="rolling-link">
                <span data-hover="Testimonies">Testimonies</span>
              </Link>
            </div>
            <div className="links-wrapper">
              <span className="header">Company</span>
              <a href={BOOKING_URL} className="rolling-link" target="_blank" rel="noopener noreferrer">
                <span data-hover="Book Session">Book Session</span>
              </a>
              <Link to="/contact" className="rolling-link">
                <span data-hover="Contact">Contact</span>
              </Link>
              <Link to="/faq" className="rolling-link">
                <span data-hover="FAQ">FAQ</span>
              </Link>
            </div>
            <div className="links-wrapper">
              <span className="header">Resources</span>
              {/* Was /review, which matched no route and rendered a blank page. */}
              <a href={GOOGLE_MAPS_URL} className="rolling-link" target="_blank" rel="noopener noreferrer">
                <span data-hover="Leave a Review">Leave a Review</span>
              </a>
              <Link to="/cancellationPolicy" className="rolling-link">
                <span data-hover="Cancellation Policy">Cancellation Policy</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="divider"></div>
        <div className="legal-wrapper">
          <div className="copyright-wrapper">
            © &nbsp;{new Date().getFullYear()} Conner Pohl Instruction. All rights reserved.
          </div>
          <div className="terms-wrapper">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="branding-accent">
        CONNER POHL INSTRUCTION
        <div className="overlay"></div>
      </div>
    </footer>
  );
};

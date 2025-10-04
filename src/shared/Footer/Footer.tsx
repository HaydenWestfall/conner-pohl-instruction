import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import TikTok from "../../assets/icons/tiktok.svg?react";
import Location from "../../assets/icons/location.svg?react";
import Logo from "../../assets/icons/cpi_logo.svg?react";
import "./Footer.scss";

const GOOGLE_MAPS_URL = import.meta.env.VITE_GOOGLE_MAPS_URL;

export const Footer = () => {
  return (
    <>
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
                  <a href="https://www.facebook.com/share/19PHSfQhfe/?mibextid=wwXIfr" target="_blank">
                    <Facebook className="social-icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/connerpohlinstruction?igsh=MXZnZTVhc3B2bTR6cg%3D%3D&utm_source=qr"
                    target="_blank"
                  >
                    <Instagram className="social-icon" />
                  </a>
                  <a href="http://www.tiktok.com/@cpohlinstruction" target="_blank">
                    <TikTok className="social-icon" />
                  </a>
                </div>
                <div className="locations-wrapper">
                  <Location className="location-icon" />
                  <a href={GOOGLE_MAPS_URL} target="_blank">
                    2326 OH-718, Troy, OH 45373
                  </a>
                </div>
              </div>
            </div>
            <div className="sitemap">
              <div className="links-wrapper">
                <span className="header">Quick Links</span>
                <a href="/" className="rolling-link">
                  <span data-hover="Home">Home</span>
                </a>
                <a href="/about" className="rolling-link">
                  <span data-hover="About">About</span>
                </a>
                <a href="/testimonies" className="rolling-link">
                  <span data-hover="Testimonies">Testimonies</span>
                </a>
              </div>
              <div className="links-wrapper">
                <span className="header">Company</span>
                <a href={import.meta.env.VITE_BOOKING_URL} className="rolling-link">
                  <span data-hover="Book Session">Book Session</span>
                </a>
                <a href="/contact" className="rolling-link">
                  <span data-hover="Contact">Contact</span>
                </a>
                <a href="/faq" className="rolling-link">
                  <span data-hover="FAQ">FAQ</span>
                </a>
              </div>
              <div className="links-wrapper">
                <span className="header">Resources</span>
                <a href="/review" className="rolling-link">
                  <span data-hover="Leave a Review">Leave a Review</span>
                </a>
                <a href="/cancellationPolicy" className="rolling-link">
                  <span data-hover="Cancellation Policy">Cancellation Policy</span>
                </a>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="legal-wrapper">
            <div className="copyright-wrapper">© &nbsp;2023 Conner Pohl Instruction. All rights reserved.</div>
            <div className="terms-wrapper">
              <a href="/terms">Terms of Service</a>
              <a href="/privacyPolicy">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="branding-accent">
          CONNER POHL INSTRUCTION
          <div className="overlay"></div>
        </div>
      </footer>
    </>
  );
};

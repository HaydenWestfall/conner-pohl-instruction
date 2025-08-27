import CpiButton from "../../components/cpiButton/CpiButton";
import CpiLink from "../../components/cpiLink/CpiLink";
import ArrowIcon from "../../assets/icons/arrow.svg?react";
import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import X from "../../assets/icons/x.svg?react";
import Youtube from "../../assets/icons/youtube.svg?react";
import Logo from "../../assets/icons/cpi_logo.svg?react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="cta-info">
          <div className="cta">
            <span className="header">
              Like what you see?
              <br />
              Start your journey today
            </span>
            <p>Book a session today and take the first step to playing the game you want.</p>
            <CpiButton label="Book a session" onClick={() => window.alert("Test")} className="cpi-button dark" />
          </div>
          <div className="info">
            <span>1234 Baseball Rd Troy, OH</span>
            <br />
            <span>Conner.Pohl@cpi.com</span>
            <br />
            <span>(937) 417 - 1114</span>
          </div>
        </div>

        <div className="links-wrapper">
          <div className="contact-links">
            Still not convinced?
            <CpiLink label="FAQ" route="/FAQ" />
            <CpiLink label="Contact" route="/Contact" />
          </div>
          <div className="route-links-desktop">
            <button>Home</button>
            <button>About</button>
            <button>Testimonials</button>
            <button className="top-button">
              <ArrowIcon id="arrow" />
            </button>
          </div>
          <div className="route-links-mobile">
            <CpiLink label="Home" route="/FAQ" />
            <CpiLink label="About" route="/FAQ" />
            <CpiLink label="Testimonials" route="/FAQ" />
          </div>
        </div>

        <div className="divider"></div>

        <div className="terms-socials-wrapper">
          <div className="term-wrapper">
            <Logo className="logo" />
            <div className="terms">
              <button>Privacy Policy</button>
              <span>|</span>
              <button>Terms & Conditions</button>
            </div>
          </div>
          <div className="socials-wrapper">
            <div className="social">
              <Facebook className="social-icon" />
            </div>
            <div className="social">
              <Instagram className="social-icon" />
            </div>
            <div className="social">
              <X className="social-icon" />
            </div>
            <div className="social">
              <Youtube className="social-icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

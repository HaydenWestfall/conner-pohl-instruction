import type { RefObject } from "react";
import Arrow from "../../../assets/icons/arrow.svg?react";
import CpiButton from "../../../components/cpiButton/CpiButton";
import "./MobileMenu.scss";

type MobileMenuProps = {
  menuWrapper: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLSpanElement | null>;
  socialsRef: RefObject<HTMLDivElement | null>;
  routesRef: RefObject<HTMLDivElement | null>;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ menuWrapper, heroRef, socialsRef, routesRef }) => (
  <div className="mobile-menu-wrapper" ref={menuWrapper}>
    <div className="mobile-content-wrapper">
      {/* <img className="logo-overlay" src={Logo} alt="CPI logo" /> */}

      <span className="hero" ref={heroRef}>
        YOUR JOURNEY BEGINS TODAY
      </span>

      <div className="body">
        <div className="socials-links" ref={socialsRef}>
          <div className="social">
            Facebook <Arrow className="arrow" />
          </div>
          <div className="social">
            Instagram <Arrow className="arrow" />
          </div>
          <div className="social">
            Twitter <Arrow className="arrow" />
          </div>
          <div className="social">
            YouTube <Arrow className="arrow" />
          </div>
        </div>
        <div className="route-links" ref={routesRef}>
          <a href="/" className={window.location.pathname === "/" ? "active" : ""}>
            Home
          </a>
          <a href="/about" className={window.location.pathname === "/about" ? "active" : ""}>
            About
          </a>
          <a href="/testimonies" className={window.location.pathname === "/testimonies" ? "active" : ""}>
            Testimonies
          </a>
          <a href="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>
            Contact
          </a>
          <a href="/faq" className={window.location.pathname === "/faq" ? "active" : ""}>
            FAQ
          </a>
          <CpiButton label="Book a session" onClick={() => window.alert("Test")} className="cpi-button light" />
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;

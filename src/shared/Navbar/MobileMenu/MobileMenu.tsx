import type { RefObject } from "react";
import Arrow from "../../../assets/icons/arrow.svg?react";
import "./MobileMenu.scss";
import CpiLink from "../../../components/cpiButton/CpiLink";

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
          <a href="https://www.facebook.com/share/19PHSfQhfe/?mibextid=wwXIfr" target="_blank" className="social">
            Facebook <Arrow className="arrow" />
          </a>
          <a
            href="https://www.instagram.com/connerpohlinstruction?igsh=MXZnZTVhc3B2bTR6cg%3D%3D&utm_source=qr"
            target="_blank"
            className="social"
          >
            Instagram <Arrow className="arrow" />
          </a>
          <a href="http://www.tiktok.com/@cpohlinstruction" target="_blank" className="social">
            TikTok <Arrow className="arrow" />
          </a>
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
          <CpiLink label="Book a session" href={import.meta.env.VITE_BOOKING_URL} className="cpi-button light" />
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;

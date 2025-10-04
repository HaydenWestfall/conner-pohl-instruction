import type { RefObject } from "react";
import Arrow from "../../../assets/icons/arrow.svg?react";
import "./MobileMenu.scss";
import CpiLink from "../../../components/cpiButton/CpiLink";

type MobileMenuProps = {
  menuWrapper: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLSpanElement | null>;
  socialsRef: RefObject<HTMLDivElement | null>;
  routesRef: RefObject<HTMLDivElement | null>;
};

const GOOGLE_MAPS_URL = import.meta.env.VITE_GOOGLE_MAPS_URL;
const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL;
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL;
const TIKTOK_URL = import.meta.env.VITE_TIKTOK_URL;

const MobileMenu: React.FC<MobileMenuProps> = ({ menuWrapper, titleRef, heroRef, socialsRef, routesRef }) => (
  <div className="mobile-menu-wrapper" ref={menuWrapper}>
    <div className="mobile-content-wrapper">
      <div className="logo-overlay" ref={titleRef}>
        Conner Pohl Instruction
      </div>

      <span className="hero" ref={heroRef}>
        YOUR JOURNEY BEGINS TODAY
      </span>

      <div className="body">
        <div className="socials-links" ref={socialsRef}>
          <a href={FACEBOOK_URL} target="_blank" className="social">
            Facebook <Arrow className="arrow" />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" className="social">
            Instagram <Arrow className="arrow" />
          </a>
          <a href={TIKTOK_URL} target="_blank" className="social">
            TikTok <Arrow className="arrow" />
          </a>
          <a href={GOOGLE_MAPS_URL} target="_blank" className="social">
            Directions <Arrow className="arrow" />
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

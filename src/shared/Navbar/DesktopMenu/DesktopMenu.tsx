import type { RefObject } from "react";
import Arrow from "../../../assets/icons/arrow.svg?react";
import CpiButton from "../../../components/cpiButton/CpiButton";
import "./DesktopMenu.scss";

type DesktopMenuProps = {
  menuWrapper: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
  socialsRef: RefObject<HTMLDivElement | null>;
  routesRef: RefObject<HTMLDivElement | null>;
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuWrapper, heroRef, socialsRef, routesRef }) => (
  <div className="desktop-menu-wrapper" ref={menuWrapper}>
    <div className="desktop-content-wrapper">
      <div className="title-and-cta">
        <div className="message-cta" ref={heroRef}>
          <span className="hero">YOUR JOURNEY BEGINS TODAY</span>
          <CpiButton label="Book a session" onClick={() => window.alert("Test")} className="cpi-button light" />
        </div>

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
      </div>

      <div className="route-links-wrapper" ref={routesRef}>
        <div className="route-links">
          <a href="/" className={"rolling-link " + (window.location.pathname === "/" ? "active" : "")}>
            <span data-hover="Home">Home</span>
          </a>
          <a href="/about" className={"rolling-link " + (window.location.pathname === "/about" ? "active" : "")}>
            <span data-hover="About">About</span>
          </a>
          <a
            href="/testimonies"
            className={"rolling-link " + (window.location.pathname === "/testimonies" ? "active" : "")}
          >
            <span data-hover="Testimonies">Testimonies</span>
          </a>
        </div>
        <div className="route-links">
          <a href="/faq" className={"rolling-link " + (window.location.pathname === "/faq" ? "active" : "")}>
            <span data-hover="FAQ">FAQ</span>
          </a>
          <a href="/contact" className={"rolling-link " + (window.location.pathname === "/contact" ? "active" : "")}>
            <span data-hover="Contact">Contact</span>
          </a>
          <a href="/contact" className={"rolling-link " + (window.location.pathname === "/contact" ? "active" : "")}>
            <span data-hover="Book a Session">Book a Session</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default DesktopMenu;

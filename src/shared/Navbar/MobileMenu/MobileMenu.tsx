import type { RefObject } from "react";
import { useLocation } from "react-router-dom";

import Arrow from "../../../assets/icons/arrow.svg?react";
import CpiLink from "../../../components/CpiButton/CpiLink";
import { BOOKING_URL, GOOGLE_MAPS_URL, SOCIAL_LINKS } from "../../../config/links";
import "./MobileMenu.scss";

type MobileMenuProps = {
  menuWrapper: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLSpanElement | null>;
  socialsRef: RefObject<HTMLDivElement | null>;
  routesRef: RefObject<HTMLDivElement | null>;
};

// Same socials as the desktop menu, plus a directions link that only appears here.
const MOBILE_LINKS = [...SOCIAL_LINKS, { label: "Directions", href: GOOGLE_MAPS_URL }];

const ROUTE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Testimonies", href: "/testimonies" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ menuWrapper, titleRef, heroRef, socialsRef, routesRef }) => {
  const { pathname } = useLocation();

  return (
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
            {MOBILE_LINKS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social">
                {label} <Arrow className="arrow" />
              </a>
            ))}
          </div>
          <nav className="route-links" ref={routesRef} aria-label="Primary" id="primary-navigation">
            {ROUTE_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={pathname === href ? "active" : ""}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </a>
            ))}
            <CpiLink label="Book a session" href={BOOKING_URL} className="cpi-button light" newTab />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

import type { RefObject } from "react";
import { useLocation } from "react-router-dom";

import Arrow from "../../../assets/icons/arrow.svg?react";
import CpiLink from "../../../components/CpiButton/CpiLink";
import { BOOKING_URL, SOCIAL_LINKS } from "../../../config/links";
import "./DesktopMenu.scss";

type DesktopMenuProps = {
  menuWrapper: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
  socialsRef: RefObject<HTMLDivElement | null>;
  routesRef: RefObject<HTMLDivElement | null>;
};

type RouteLink = { label: string; href: string; external?: boolean };

// Rendered as two columns, in this order.
const ROUTE_COLUMNS: RouteLink[][] = [
  [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Testimonies", href: "/testimonies" },
  ],
  [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Session", href: BOOKING_URL, external: true },
  ],
];

/** The external booking link highlights while the in-app /book route is active. */
const BOOKING_ROUTE = "/book";

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuWrapper, heroRef, socialsRef, routesRef }) => {
  const { pathname } = useLocation();

  const isActive = (link: RouteLink) => pathname === (link.external ? BOOKING_ROUTE : link.href);

  return (
    <div className="desktop-menu-wrapper" ref={menuWrapper}>
      <div className="desktop-content-wrapper">
        <div className="title-and-cta">
          <div className="message-cta" ref={heroRef}>
            <span className="hero">YOUR JOURNEY BEGINS TODAY</span>
            <CpiLink label="Book a session" href={BOOKING_URL} className="cpi-button light" newTab />
          </div>

          <div className="socials-links" ref={socialsRef}>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social">
                {label} <Arrow className="arrow" />
              </a>
            ))}
          </div>
        </div>

        <nav className="route-links-wrapper" ref={routesRef} aria-label="Primary" id="primary-navigation">
          {ROUTE_COLUMNS.map((column, columnIndex) => (
            <div className="route-links" key={columnIndex}>
              {column.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`rolling-link ${isActive(link) ? "active" : ""}`.trim()}
                  aria-current={isActive(link) ? "page" : undefined}
                >
                  <span data-hover={link.label}>{link.label}</span>
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenu;

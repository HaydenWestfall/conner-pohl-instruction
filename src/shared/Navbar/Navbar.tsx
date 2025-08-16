import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import Arrow from "../../assets/icons/arrow.svg?react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import CpiButton from "../../components/cpiButton/CpiButton";

export const Navbar = () => {
  const menuButton = useRef<HTMLButtonElement | null>(null);
  const menu = useRef<HTMLDivElement | null>(null);
  const menuWrapper = useRef<HTMLDivElement | null>(null);
  const cpiWrapper = useRef<HTMLDivElement | null>(null);
  const cpiText = useRef<HTMLSpanElement | null>(null);
  const heroRef = useRef<HTMLSpanElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const routesRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    const isOpening = menuButton.current!.getAttribute("data-state") !== "opened";
    if (isOpening) {
      menuButton.current!.setAttribute("data-state", "opened");
      menuButton.current!.setAttribute("aria-expanded", "true");
      menuWrapper.current!.style.display = "flex";

      // Disable page scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
      document.body.style.width = "100vw";

      // Find nav-icon distance from top and set menu top
      if (menuButton.current && menu.current) {
        const navIconRect = menuButton.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const navIconTop = navIconRect.top + scrollY;
        menu.current.style.top = `calc(${navIconTop}px - 1.5rem)`;
      }

      // Animate in
      gsap.to(menu.current, { height: "500vw", width: "500vw", duration: 0.75 });
      gsap.set([heroRef.current, socialsRef.current, routesRef.current], { opacity: 0 });
      gsap.set([socialsRef.current, routesRef.current], { y: 20 });
      gsap.to(heroRef.current, { opacity: 1, duration: 1, delay: 0.2 });
      gsap.to(socialsRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
      gsap.to(routesRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 });
      // gsap.set(cpiWrapper.current, { background: "black", duration: 1, delay: 0.2 });
    } else {
      menuButton.current!.setAttribute("data-state", "closed");
      menuButton.current!.setAttribute("aria-expanded", "false");

      // Re-enable page scrolling
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";

      // Animate out
      gsap.to(menu.current, { height: "0", width: "0", duration: 0.5 });
      gsap.to(heroRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(socialsRef.current, { opacity: 0, y: 20, duration: 0.2 });
      gsap.to(routesRef.current, { opacity: 0, y: 20, duration: 0.2 });
      // gsap.set(cpiWrapper.current, { background: "white", duration: 0.2 });
      // gsap.set(cpiText.current, { color: "black", duration: 0.2 });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // toggleMenu();
    }, 150);
  }, []);

  return (
    <>
      <div ref={cpiWrapper} className="cpi-wrapper">
        <div className="logo-wrapper">
          <img src={Logo} alt="CPI logo" />
        </div>
        <span ref={cpiText}>CONNER POHL INSTRUCTION</span>
      </div>

      <button
        id="nav-icon"
        className="more-btn"
        aria-controls="primary-navigation"
        aria-expanded="false"
        ref={menuButton}
        onClick={toggleMenu}
      >
        <svg fill="black" className="hamburger" viewBox="0 0 100 100" width="20px">
          <rect className="line top" width="80" height="6" x="10" y="37" rx="5" fill="black"></rect>
          <rect className="line bottom" width="80" height="6" x="10" y="63" rx="5" fill="black"></rect>
        </svg>
      </button>

      <div id="menu-background" ref={menu}></div>

      <div className="menu-wrapper" ref={menuWrapper}>
        <img className="logo-overlay" src={Logo} alt="CPI logo" />

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
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Testimonies</a>
            <a href="/">Contact</a>
            <a href="/">FAQ</a>
            <CpiButton label="Book a session" onClick={() => window.alert("Test")} className="cpi-button light" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

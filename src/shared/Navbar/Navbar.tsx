import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import Arrow from "../../assets/icons/arrow.svg?react";
import { useEffect, useRef } from "react";
import CpiButton from "../../components/cpiButton/CpiButton";

export const Navbar = () => {
  const menuButton = useRef<HTMLButtonElement | null>(null);
  const menu = useRef<HTMLDivElement | null>(null);
  const menuWrapper = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (menuButton.current!.getAttribute("data-state") !== "opened") {
      menuButton.current!.setAttribute("data-state", "opened");
      menuButton.current!.setAttribute("aria-expanded", "true");
      menuWrapper.current!.style.display = "flex";

      menu.current!.style.height = "500vw";
      menu.current!.style.width = "500vw";
    } else {
      menuButton.current!.setAttribute("data-state", "closed");
      menuButton.current!.setAttribute("aria-expanded", "false");
      menuWrapper.current!.style.display = "none";
      // closeMobileMenu();

      menu.current!.style.height = "0";
      menu.current!.style.width = "0";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // toggleMenu();
    }, 150);
  }, []);

  return (
    <>
      <div id="navbar-wrapper">
        <div className="cpi-wrapper">
          <div className="logo-wrapper">
            <img src={Logo} alt="CPI logo" />
          </div>
          <span>CONNER POHL INSTRUCTION</span>
        </div>

        <button
          id="nav-icon"
          className="more-btn"
          aria-controls="primary-navigation"
          aria-expanded="false"
          ref={menuButton}
          onClick={() => {
            toggleMenu();
          }}
        >
          <svg fill="black" className="hamburger" viewBox="0 0 100 100" width="20px">
            <rect className="line top" width="80" height="6" x="10" y="37" rx="5" fill="black"></rect>
            <rect className="line bottom" width="80" height="6" x="10" y="63" rx="5" fill="black"></rect>
          </svg>
        </button>
      </div>

      <div id="menu-background" ref={menu}></div>

      <div className="menu-wrapper" ref={menuWrapper}>
        <span className="hero">YOUR JOURNEY BEGINS TODAY</span>

        <div className="body">
          <div className="socials-links">
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
          <div className="route-links">
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

import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import Menu from "../../assets/icons/menu.svg?react";
import { useRef } from "react";

export const Navbar = () => {
  const menuButton = useRef<HTMLButtonElement | null>(null);
  const menu = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (menuButton.current!.getAttribute("data-state") !== "opened") {
      menuButton.current!.setAttribute("data-state", "opened");
      menuButton.current!.setAttribute("aria-expanded", "true");

      menu.current!.style.height = "500vw";
      menu.current!.style.width = "500vw";
    } else {
      menuButton.current!.setAttribute("data-state", "closed");
      menuButton.current!.setAttribute("aria-expanded", "false");
      // closeMobileMenu();

      menu.current!.style.height = "0";
      menu.current!.style.width = "0";
    }
  };

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
    </>
  );
};

export default Navbar;

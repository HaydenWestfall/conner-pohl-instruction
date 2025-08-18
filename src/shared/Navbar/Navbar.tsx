import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import gsap from "gsap";
import { IconButton } from "../../components/IconButton/IconButton";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const menuButton = useRef<HTMLDivElement | null>(null);
  const menu = useRef<HTMLDivElement | null>(null);
  const menuBgWrapper = useRef<HTMLDivElement | null>(null);
  const menuWrapper = useRef<HTMLDivElement | null>(null);
  const cpiWrapper = useRef<HTMLDivElement | null>(null);
  const cpiText = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const routesRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    const isOpening = menuButton.current!.getAttribute("data-state") !== "opened";
    if (isOpening) {
      menuButton.current!.setAttribute("data-state", "opened");
      menuButton.current!.setAttribute("aria-expanded", "true");
      menuWrapper.current!.style.display = "flex";
      menuBgWrapper.current!.style.display = "block";

      // Find nav-icon distance from top and set menu top
      if (menuButton.current && menuBgWrapper.current) {
        const navIconRect = menuButton.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const navIconTop = navIconRect.top + scrollY;
        menuBgWrapper.current.style.top = `calc(${navIconTop}px - 5rem)`;
      }

      // Animate in
      gsap.to(menu.current, { height: "500vw", width: "500vw", duration: 0.75 });
      gsap.set([heroRef.current, socialsRef.current, routesRef.current], { opacity: 0 });
      gsap.set([socialsRef.current, routesRef.current], { y: 20 });
      gsap.to(heroRef.current, { opacity: 1, duration: 1, delay: 0 });
      gsap.to(socialsRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
      gsap.to(routesRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 });
    } else {
      menuButton.current!.setAttribute("data-state", "closed");
      menuButton.current!.setAttribute("aria-expanded", "false");

      // Animate out
      gsap.to(menu.current, { height: "0", width: "0", duration: 0.5 });
      gsap.to(heroRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(socialsRef.current, { opacity: 0, y: 20, duration: 0.2 });
      gsap.to(routesRef.current, { opacity: 0, y: 20, duration: 0.2 });
      gsap.set(menuWrapper.current, { display: "none", delay: 0.2 });
      gsap.set(menuBgWrapper.current, { display: "none", delay: 0.5 });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("tracking");
      setIsMobile(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div ref={cpiWrapper} className="cpi-wrapper">
        <div className="logo-wrapper">
          <img src={Logo} alt="CPI logo" />
        </div>
        <div className="cpi-text" ref={cpiText}>
          CONNER POHL INSTRUCTION
        </div>
      </div>

      <div className="menu-button-wrapper">
        <IconButton bgColor="" overlayColor="var(--primary-color)" onClick={toggleMenu}>
          <div ref={menuButton} className="more-btn" aria-controls="primary-navigation" aria-expanded="false">
            <svg fill="black" className="hamburger" viewBox="0 0 100 100" width="30px" height="30px">
              <rect className="line top" width="100" x="0" y="35" rx="5" fill="black"></rect>
              <rect className="line bottom" width="100" x="0" y="60" rx="5" fill="black"></rect>
            </svg>
          </div>
        </IconButton>
      </div>

      <div id="menu-background-wrapper" ref={menuBgWrapper}>
        <div id="menu-background" ref={menu}></div>
      </div>

      {isMobile ? (
        <MobileMenu menuWrapper={menuWrapper} heroRef={heroRef} socialsRef={socialsRef} routesRef={routesRef} />
      ) : (
        <DesktopMenu menuWrapper={menuWrapper} heroRef={heroRef} socialsRef={socialsRef} routesRef={routesRef} />
      )}
    </>
  );
};

export default Navbar;

import AboutHeroImage from "../../../../assets/images/about_header.webp";
import AboutHeroImageMobile from "../../../../assets/images/about_haeder_mobile.webp";
import ScrollIcon from "../../../../assets/icons/mouse.svg?react";
import "./AboutHeader.scss";

export const AboutHeader = () => {
  return (
    <div id="about-header" className="hero-wrapper">
      <picture>
        <source media="(max-width: 768px)" srcSet={AboutHeroImageMobile} />
        <source media="(min-width: 769px)" srcSet={AboutHeroImage} />
        <img
          className="route-header-img"
          src={AboutHeroImage}
          alt="Conner Pohl coaching a hitter during a private lesson"
          fetchPriority="high"
        />
      </picture>

      <div className="hero-header">
        <h1>
          BUILT ON PASSION
          <br />
          DRIVEN BY MECHANICS
        </h1>
      </div>
      <div className="scroll-accent">
        Scroll down
        <ScrollIcon id="arrow-icon" />
      </div>
    </div>
  );
};

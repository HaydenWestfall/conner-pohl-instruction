import AboutHeroImage from "../../../../assets/images/about_header.png";
import ScrollIcon from "../../../../assets/icons/mouse.svg?react";
import "./AboutHeader.scss";

export const AboutHeader = () => {
  return (
    <>
      <div id="about-header" className="hero-wrapper">
        <img className="route-header-img" src={AboutHeroImage}></img>
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
    </>
  );
};

import TestimonialsHeroImage from "../../../../assets/images/testimonials_header.png";
import ScrollIcon from "../../../../assets/icons/mouse.svg?react";
import "./TestimonialsHeader.scss";

export const TestimonialsHeader = () => {
  return (
    <>
      <div id="testimonials-header" className="hero-wrapper">
        <img className="route-header-img" src={TestimonialsHeroImage}></img>
        <div className="hero-header">
          <h1>
            TALK IS CHEAP . . .
            <br />
            UNLESS ITS THIS GOOD
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

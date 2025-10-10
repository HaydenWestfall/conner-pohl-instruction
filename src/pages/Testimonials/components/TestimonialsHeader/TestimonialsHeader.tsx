import TestimonialsHeroImage from "../../../../assets/images/testimonials_header.webp";
import TestimonialsHeroImageMobile from "../../../../assets/images/testimonials_header_mobile.webp";
import ScrollIcon from "../../../../assets/icons/mouse.svg?react";
import "./TestimonialsHeader.scss";

export const TestimonialsHeader = () => {
  return (
    <>
      <div id="testimonials-header" className="hero-wrapper">
        <img className="route-header-img" src={TestimonialsHeroImage}></img>

        <picture>
          <source media="(max-width: 768px)" srcSet={TestimonialsHeroImageMobile} />
          <source media="(min-width: 769px)" srcSet={TestimonialsHeroImage} />
          <img className="route-header-img" src={TestimonialsHeroImage} alt="CPI Baseball Training About" />
        </picture>

        <div className="hero-header">
          <h1>
            Game-changing talk <br />
            from game-changing players
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

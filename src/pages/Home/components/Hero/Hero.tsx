import HeroImage2 from "../../../../assets/images/hero-test.png";
import Testimony1 from "../../../../assets/images/testimony_1.png";
import Testimony2 from "../../../../assets/images/testimony_2.png";
import Testimony3 from "../../../../assets/images/testimony_3.png";
import "./Hero.scss";
import ScrollIcon from "../../../../assets/icons/mouse.svg?react";
import CpiLink from "../../../../components/cpiButton/CpiLink";

export const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <img className="route-header-img" src={HeroImage2}></img>
        <div className="hero-content">
          <div className="review-wrapper">
            <div className="review-images">
              <img src={Testimony1} alt="John Appleseed" className="image" />
              <img src={Testimony2} alt="John Appleseed" className="image" />
              <img src={Testimony3} alt="John Appleseed" className="image" />
            </div>
            <div className="review">
              <span className="testimony">
                “We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting
                with kids and breaking things...”
              </span>
              <span className="customer">- Hayden Westfall</span>
            </div>
          </div>
          <div className="hero-header">
            <h1>
              COMPETITIVE PERFORMANCE
              <br />
              INSTRUCTION
            </h1>
            <div className="call-to-action">
              <div id="book-now">
                <CpiLink label="Book now" href="/book" className="cpi-button dark" />
              </div>
              <div id="contact">
                <CpiLink label="Contact" href="/contact" className="cpi-button light" />
              </div>
              <div id="schedule-session">
                <CpiLink label="Schedule a Session" href="/book" className="cpi-button light" />
              </div>
            </div>
          </div>
          <div className="scroll-accent">
            Scroll down
            <ScrollIcon id="arrow-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

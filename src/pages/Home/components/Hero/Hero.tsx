import HeroImage from "../../../../assets/images/hero_header.png";
import Testimony1 from "../../../../assets/images/testimony_1.png";
import Testimony2 from "../../../../assets/images/testimony_2.png";
import Testimony3 from "../../../../assets/images/testimony_3.png";
import "./Hero.scss";
import ScrollIcon from "../../../../assets/icons/mouse.svg?react";
import CpiButton from "../../../../cpiButton/CpiButton";

export const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <img className="route-header-img" src={HeroImage}></img>
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
              <CpiButton label="Book now" onClick={() => window.alert("Test")} className="cpi-button dark" />
              <CpiButton label="Contact" onClick={() => window.alert("Test")} className="cpi-button light" />
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

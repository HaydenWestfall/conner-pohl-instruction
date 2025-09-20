import HeroImage2 from "../../../../assets/images/hero_header.webp";
import Testimony1 from "../../../../assets/images/customer_1.webp";
import Testimony2 from "../../../../assets/images/customer_2.webp";
import Testimony3 from "../../../../assets/images/customer_3.webp";
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
                <CpiLink
                  label="Book now"
                  href="https://connerpohlinstruction-booking.as.me/"
                  className="cpi-button light"
                  newTab={true}
                />
              </div>
              <div id="contact">
                <CpiLink label="Contact" href="/contact" className="cpi-button light" />
              </div>
              <div id="schedule-session">
                <CpiLink
                  label="Schedule a Session"
                  href="https://connerpohlinstruction-booking.as.me/"
                  className="cpi-button light"
                  newTab={true}
                />
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

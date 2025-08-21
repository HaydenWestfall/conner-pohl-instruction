import HittingImage from "../../assets/images/contact_hitting.png";
import CpiButton from "../../components/cpiButton/CpiButton";
import "./ContactSection.scss";
import Testimony1 from "../../assets/images/testimony_1.png";
import Testimony2 from "../../assets/images/testimony_2.png";
import Testimony3 from "../../assets/images/testimony_3.png";

export const ContactSection = () => {
  return (
    <>
      <div className="contact-section-wrapper">
        <div className="image-wrapper">
          <img src={HittingImage} alt="Player hitting ball" />
          <div className="review-tag">
            <div className="review-images">
              <img src={Testimony1} alt="" />
              <img src={Testimony2} alt="" />
              <img src={Testimony3} alt="" />
            </div>
            <span className="review-count">85+</span>
            <span className="review-text">Reviews</span>
          </div>
        </div>
        <div className="schedule-wrapper">
          <div className="tag">Reserve your spot</div>
          <div className="schedule-info-wrapper">
            <h3>
              Ready to improve your game?
              <br />
              Book your first session today
            </h3>
            <p>
              Whether you're just starting out or chasing serious goals, every great swing starts with the right
              foundation. At Swing Co., we’ll break it down, build it up, and make sure you’re having fun along the way.
              Let’s get after it.
            </p>
            <CpiButton label="Schedule a session" onClick={() => window.alert("Test")} className="cpi-button light" />
          </div>
        </div>
      </div>
    </>
  );
};

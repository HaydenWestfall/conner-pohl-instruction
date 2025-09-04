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
          <img className="hitting-image" src={HittingImage} alt="Player hitting ball" />
          <div className="review-tag">
            <div className="review-images">
              <img src={Testimony1} alt="" />
              <img src={Testimony2} alt="" />
              <img src={Testimony3} alt="" />
            </div>
            <span className="review-count-wrapper">
              <span className="review-count">85+</span>
              <span className="review-text">Reviews</span>
            </span>
          </div>
        </div>
        <div className="schedule-wrapper">
          <div className="tag">Reserve your spot</div>
          <div className="schedule-info-wrapper">
            <h3>
              Ready to improve?
              <br />
              Book a session today!
            </h3>
            <div className="action-wrapper">
              <div className="action">
                <span id="start-journey-text">Start Your Journey</span>
                <CpiButton label="Book a Session" onClick={() => window.alert("Test")} className="cpi-button light" />
              </div>
              <div className="action small">
                <div className="divider"></div>
                <p>Pick a date, choose a time, and become the player you want to be.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

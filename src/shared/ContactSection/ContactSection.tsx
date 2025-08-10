import HittingImage from "../../assets/images/hitting.png";
import CpiButton from "../../components/cpiButton/CpiButton";
import "./ContactSection.scss";

export const ContactSection = () => {
  return (
    <>
      <div className="contact-section-wrapper">
        <img src={HittingImage} alt="Player hitting ball" />
        <div className="schedule-wrapper">
          <div className="tag">Reserve your spot</div>
          <div className="schedule-info-wrapper">
            <h3>
              Ready to improve your swing?
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

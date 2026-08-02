import Testimony1 from "../../assets/images/customer_1.webp";
import Testimony2 from "../../assets/images/customer_2.webp";
import Testimony3 from "../../assets/images/customer_3.webp";
import HittingImage from "../../assets/images/contact_hitting.webp";
import CpiLink from "../../components/CpiButton/CpiLink";
import { BOOKING_URL } from "../../config/links";
import "./ContactSection.scss";

/** Booking call-to-action shared by the home, about, and testimonials pages. */
export const ContactSection = () => (
  <div className="contact-section-wrapper">
    <div className="image-wrapper">
      <img
        className="hitting-image"
        src={HittingImage}
        alt="A player taking swings during a private baseball lesson"
        loading="lazy"
      />
      <div className="review-tag">
        {/* Decorative avatar stack — empty alt keeps screen readers from
            announcing three images that carry no information. */}
        <div className="review-images">
          <img src={Testimony1} alt="" loading="lazy" />
          <img src={Testimony2} alt="" loading="lazy" />
          <img src={Testimony3} alt="" loading="lazy" />
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
            <CpiLink label="Book a Session" href={BOOKING_URL} className="cpi-button light" />
          </div>
          <div id="pick-date-action" className="action small">
            <div className="divider"></div>
            <p>Pick a date, choose a time, and become the player you want to be.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

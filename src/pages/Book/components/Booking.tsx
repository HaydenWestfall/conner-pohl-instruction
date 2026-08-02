import BookingBackdrop from "../../../assets/images/hero_header.webp";
import "./Booking.scss";

const ACUITY_SCHEDULE_URL = "https://app.acuityscheduling.com/schedule.php?owner=36839203";

export const Booking = () => (
  <div className="booking-wrapper">
    {/* Decorative full-bleed backdrop. It is the largest paint on this route,
        so it loads eagerly rather than lazily. */}
    <img src={BookingBackdrop} alt="" fetchPriority="high" />
    <div className="overlay"></div>
    <div className="iframe-wrapper">
      {/* Sits behind the iframe and is covered once the scheduler paints. */}
      <div className="booking-spinner">
        <div className="spinner-inner" />
      </div>
      <iframe src={ACUITY_SCHEDULE_URL} title="Book a lesson with Conner Pohl Instruction" loading="lazy" />
    </div>
  </div>
);

import "./Booking.scss";
import HeroImage2 from "../../../assets/images/hero_header.webp";

export const Booking = () => {
  return (
    <div className="booking-wrapper">
      <img src={HeroImage2} alt="" />
      <div className="overlay"></div>
      <div className="iframe-wrapper" style={{ position: "relative", minHeight: 200 }}>
        <div className="booking-spinner">
          <div className="spinner-inner" />
        </div>
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=36839203"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

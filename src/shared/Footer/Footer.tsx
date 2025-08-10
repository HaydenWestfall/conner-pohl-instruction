import CpiButton from "../../components/cpiButton/CpiButton";
import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="cta-info"></div>

        <span className="header">
          Like what you see?
          <br />
          Start your journey today
        </span>
        <div className="description">Book a session today and take the first step to playing the game you want.</div>
        <CpiButton label="Book a session" onClick={() => window.alert("Test")} className="cpi-button dark" />
      </footer>
    </>
  );
};

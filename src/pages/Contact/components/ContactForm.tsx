import HittingImage from "../../../assets/images/hitting.png";
import CpiButton from "../../../components/cpiButton/CpiButton";
import "./ContactForm.scss";

export const ContactForm = () => {
  return (
    <div className="contact-form-section-wrapper">
      <div className="contact-accent-wrapper">
        <img src={HittingImage} alt="Player hitting ball" />
      </div>
      <div className="contact-form-wrapper">
        <h2>Start the Conversation</h2>
        <p>
          We’re here to help you understand the process, the programs, and what’s best for your player. You should
          expect a response within 24 hours.
        </p>
        <div className="divider"></div>
        <form className="contact-form" action="">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" autoComplete="name" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" autoComplete="email" placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="(XXX) XXX-XXXX" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="How can we help?" />
          </div>
          <CpiButton label="Send Message" onClick={() => window.alert("Test")} className="cpi-button dark" />
        </form>
      </div>
    </div>
  );
};

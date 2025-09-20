import { useState } from "react";
import HittingImage from "../../../assets/images/hitting1.webp";
import CpiButton from "../../../components/cpiButton/CpiButton";
import { toast } from "react-toastify";
import "./ContactForm.scss";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // Validation helpers
  const validateEmail = (email: string) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Accepts (XXX) XXX-XXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX, XXXXXXXXXX
    return /^(\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/.test(phone);
  };

  // Field-level validation
  const isInvalid = {
    name: touched.name && !form.name,
    email: touched.email && (!form.email || !validateEmail(form.email)),
    phone: touched.phone && (!form.phone || !validatePhone(form.phone)),
    message: touched.message && !form.message,
  };

  // Error messages for each field
  const errorMsg = {
    name: touched.name && !form.name ? "Required" : "",
    email:
      touched.email && !form.email
        ? "Required"
        : touched.email && form.email && !validateEmail(form.email)
        ? "Please enter a valid email address."
        : "",
    phone:
      touched.phone && !form.phone
        ? "Required"
        : touched.phone && form.phone && !validatePhone(form.phone)
        ? "Please enter a valid phone number."
        : "",
    message: touched.message && !form.message ? "Required" : "",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check required fields
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!validatePhone(form.phone)) {
      setStatus({ type: "error", message: "Please enter a valid phone number." });
      return;
    }

    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch("https://conner-pohl-instruction-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", phone: "", message: "" }); // reset form
        setTouched({ name: false, email: false, phone: false, message: false }); // reset touched
        toast.success("Message sent successfully!");
      } else {
        setStatus({ type: "error", message: data.message || "Failed to send." });
        toast.error(data.message || "Failed to send.");
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error." });
    }
  };

  // Button should be disabled if any field is empty, any field is invalid, or form is already submitted (success)
  const isFormEmpty = !form.name || !form.email || !form.phone || !form.message;
  const isFormInvalid = !validateEmail(form.email) || !validatePhone(form.phone) || isFormEmpty;
  const disableSubmit = isFormInvalid || status.type === "success";

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.name}
              className={isInvalid.name ? "invalid" : ""}
            />
            {errorMsg.name && <span className="input-error">{errorMsg.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.email}
              className={isInvalid.email ? "invalid" : ""}
            />
            {errorMsg.email && <span className="input-error">{errorMsg.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="(XXX) XXX-XXXX"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.phone}
              className={isInvalid.phone ? "invalid" : ""}
            />
            {errorMsg.phone && <span className="input-error">{errorMsg.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="How can we help?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.message}
              className={isInvalid.message ? "invalid" : ""}
            />
            {errorMsg.message && <span className="input-error">{errorMsg.message}</span>}
          </div>
          <CpiButton
            type="submit"
            label={status.type === "loading" ? "Sending..." : "Send Message"}
            className="cpi-button dark"
            disableButton={disableSubmit}
          />
        </form>
      </div>
    </div>
  );
};

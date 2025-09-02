import CrossIcon from "../../../assets/icons/cross.svg?react";
import ArrowIcon from "../../../assets/icons/arrow.svg?react";
import { useState } from "react";
import "./FAQSection.scss";
import CpiButton from "../../../components/cpiButton/CpiButton";

const faqs = [
  {
    question: "What is CPI?",
    answer: "Placeholder answer for what CPI is.",
  },
  {
    question: "Who are the trainers?",
    answer: "Placeholder answer for who the trainers are.",
  },
  {
    question: "How do I book a session?",
    answer: "Placeholder answer for booking a session.",
  },
  {
    question: "Where are sessions held?",
    answer: "Placeholder answer for session locations.",
  },
  {
    question: "What should I bring to my first session?",
    answer: "Placeholder answer for what to bring to a session.",
  },
  {
    question: "Are there age requirements for training?",
    answer: "Placeholder answer for age requirements.",
  },
  {
    question: "How do I contact CPI for more information?",
    answer: "Placeholder answer for contacting CPI.",
  },
  {
    question: "Can I reschedule or cancel a session?",
    answer: "Placeholder answer for rescheduling or cancelling sessions.",
  },
];

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="faq-section-wrapper">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-wrapper">
        {faqs.map((faq, idx) => (
          <div className="faq-item" key={idx}>
            <div className="faq-question-row">
              <h3>{faq.question}</h3>
              <button
                className={`faq-toggle-btn${openIdx === idx ? " open" : ""}`}
                onClick={() => handleToggle(idx)}
                aria-label={openIdx === idx ? "Close answer" : "Reveal answer"}
              >
                <span className="faq-icon-circle">
                  {openIdx === idx ? <CrossIcon className="icon cross" /> : <ArrowIcon className="icon arrow" />}
                </span>
              </button>
            </div>
            {openIdx === idx && <div className="faq-answer">{faq.answer}</div>}
            {idx < faqs.length - 1 && <div className="faq-divider" />}
          </div>
        ))}
      </div>
      <div className="contact-wrapper">
        <h2>Still have questions?</h2>
        <CpiButton label="Get in touch" onClick={() => window.alert("Test")} className="cpi-button light" />
      </div>
    </div>
  );
};

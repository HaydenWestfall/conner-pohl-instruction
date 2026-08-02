import { useState } from "react";

import ArrowIcon from "../../../assets/icons/arrow.svg?react";
import CrossIcon from "../../../assets/icons/cross.svg?react";
import CpiLocation from "../../../assets/images/cpi_location.png";
import CpiLink from "../../../components/CpiButton/CpiLink";
import { GOOGLE_MAPS_URL } from "../../../config/links";
import { FAQS } from "../../../data/faqs";
import "./FAQSection.scss";

/** Linkified inline wherever it appears in an answer. */
const STUDIO_ADDRESS = "2326 OH-718, Troy, OH 45373";

/** Turns the studio address inside an answer into a Google Maps link. */
const linkifyAddress = (paragraph: string) => {
  if (!paragraph.includes(STUDIO_ADDRESS)) return paragraph;

  const [before, after] = paragraph.split(STUDIO_ADDRESS);
  return (
    <>
      {before}
      <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="map-link">
        {STUDIO_ADDRESS}
      </a>
      {after}
    </>
  );
};

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="faq-section-wrapper">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-wrapper">
        {FAQS.map((faq, idx) => (
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
            {openIdx === idx && (
              <div className="faq-answer">
                {faq.answer.map((paragraph, i) => (
                  <div key={i} className={faq.hasMap ? "answer-wrapper has-map" : "answer-wrapper"}>
                    {faq.hasMap && (
                      <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                        <img src={CpiLocation} alt="Find us on Google Maps" loading="lazy" />
                      </a>
                    )}
                    <p>{linkifyAddress(paragraph)}</p>
                  </div>
                ))}
              </div>
            )}
            {idx < FAQS.length - 1 && <div className="faq-divider" />}
          </div>
        ))}
      </div>
      <div className="contact-wrapper">
        <h2>Still have questions?</h2>
        {/* This CTA previously fired window.alert("Test") and went nowhere. */}
        <CpiLink label="Get in touch" href="/contact" className="cpi-button light" />
      </div>
    </div>
  );
};

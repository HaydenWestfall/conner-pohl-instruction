import "./LegalSection.scss";
import Logo from "../../../assets/icons/cpi_logo.svg?react";

export const LegalSection = () => {
  return (
    <div className="legal-section-wrapper" role="region" aria-label="Cancellation and Refund Policy">
      <div className="policy-header">
        <Logo id="cpi-logo" />
        <h2>Cancellation Policy</h2>
      </div>

      <div className="policy-content">
        <article className="policy-section" aria-labelledby="client-cancel">
          <h3 id="client-cancel">1. Client Cancellations</h3>
          <ul className="policy-list">
            <li>
              Lessons canceled <strong>at least 24 hours</strong> before the scheduled start time will receive a full
              refund.
            </li>
            <li>
              Cancellations made with <strong>less than 24 hours’ notice</strong> are not eligible for a refund or
              credit, except for documented emergencies and at the sole discretion of Conner Pohl Instruction.
            </li>
          </ul>
        </article>

        <article className="policy-section" aria-labelledby="instructor-cancel">
          <h3 id="instructor-cancel">2. Instructor Cancellations</h3>
          <p className="policy-list" style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            If your booked instructor is unable to attend, you will be offered:
            <ul className="policy-list" style={{ marginTop: "8px" }}>
              <li>
                A <strong>full refund</strong>, or
              </li>
              <li>
                A <strong>credit toward a future lesson</strong>.
              </li>
            </ul>
          </p>
        </article>

        <article className="policy-section" aria-labelledby="reschedule">
          <h3 id="reschedule">3. Rescheduling</h3>
          <ul className="policy-list">
            <li>
              Lessons canceled within the 24-hour window may be rescheduled subject to instructor and facility
              availability.
            </li>
            <li>Rescheduling is handled on a case-by-case basis and is not guaranteed.</li>
          </ul>
        </article>

        <div className="policy-note" role="note" aria-live="polite">
          <strong>Note:</strong> Booking a lesson online constitutes acceptance of this policy. If you have special
          circumstances, contact us as soon as possible so we can try to assist you.
        </div>

        <p className="policy-sign">
          By booking with Conner Pohl Instruction, you acknowledge that you understand and agree to these terms.
        </p>
      </div>
    </div>
  );
};

import QuoteIcon from "../../../assets/icons/quote.svg?react";
import type { Testimony } from "../../../data/testimonials";

/**
 * A single review card. The desktop and mobile sections lay these out very
 * differently but render identical markup, so the card itself lives here and
 * each section's stylesheet targets `.review-wrapper` under its own root.
 */
export const TestimonyCard: React.FC<{ testimony: Testimony }> = ({ testimony }) => (
  <div className="review-wrapper">
    <div className="review-header">
      <div className="reviewer">{testimony.name}</div>
      <div className="initials-circle">{testimony.initials}</div>
    </div>
    <div className="review-footer">
      <div className="review">
        <QuoteIcon aria-hidden="true" focusable="false" />
        <p>{testimony.review}</p>
      </div>
      <span>{testimony.context}</span>
    </div>
  </div>
);

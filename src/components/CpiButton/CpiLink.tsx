import ArrowIcon from "../../assets/icons/arrow.svg?react";
import "./CpiButton.scss";

interface CpiLinkProps {
  label: string;
  href?: string;
  className?: string;
  newTab?: boolean;
}

/** Anchor styled as a {@link CpiButton}. Use for navigation; use CpiButton for actions. */
const CpiLink: React.FC<CpiLinkProps> = ({ label, href, className = "", newTab = false }) => (
  <a
    href={href}
    className={className}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
  >
    <span className="button-label">{label}</span>
    <span className="arrow-icon-wrapper">
      <ArrowIcon className="arrow-icon" aria-hidden="true" focusable="false" />
    </span>
  </a>
);

export default CpiLink;

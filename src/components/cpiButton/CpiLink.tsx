import ArrowIcon from "../../assets/icons/arrow.svg?react";
import "./CpiButton.scss";

interface CpiLinkProps {
  label: string;
  href?: string;
  className?: string;
  newTab?: boolean;
}

const CpiLink: React.FC<CpiLinkProps> = ({ label, href, className = "", newTab = false }) => {
  return (
    <>
      <a
        href={href}
        className={className}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <span id="button-label">{label}</span>
        <div id="arrow-icon-wrapper">
          <ArrowIcon id="arrow-icon" fill="white" />
        </div>
      </a>
    </>
  );
};

export default CpiLink;

import ArrowIcon from "../../assets/icons/arrow.svg?react";
import "./CpiButton.scss";

interface CpiLinkProps {
  label: string;
  href?: string;
  className?: string;
}

const CpiLink: React.FC<CpiLinkProps> = ({ label, href, className = "" }) => {
  return (
    <>
      <a href={href} className={className}>
        <span id="button-label">{label}</span>
        <div id="arrow-icon-wrapper">
          <ArrowIcon id="arrow-icon" fill="white" />
        </div>
      </a>
    </>
  );
};

export default CpiLink;

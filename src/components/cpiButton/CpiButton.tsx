import ArrowIcon from "../../assets/icons/arrow.svg?react";
import "./CpiButton.scss";

interface CpiButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const CpiButton: React.FC<CpiButtonProps> = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <>
      <button className={className} onClick={onClick} type={type}>
        <span id="button-label">{label}</span>
        <div id="arrow-icon-wrapper">
          <ArrowIcon id="arrow-icon" fill="white" />
        </div>
      </button>
    </>
  );
};

export default CpiButton;

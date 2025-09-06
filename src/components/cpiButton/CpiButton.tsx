import ArrowIcon from "../../assets/icons/arrow.svg?react";
import "./CpiButton.scss";

interface CpiButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disableButton?: boolean;
}

const CpiButton: React.FC<CpiButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disableButton = false,
}) => {
  return (
    <>
      <button className={className} onClick={onClick} type={type} disabled={disableButton}>
        <span id="button-label">{label}</span>
        <div id="arrow-icon-wrapper">
          <ArrowIcon id="arrow-icon" fill="white" />
        </div>
      </button>
    </>
  );
};

export default CpiButton;

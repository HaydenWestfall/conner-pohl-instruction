import ArrowIcon from "../../assets/icons/arrow.svg?react";
import "./CpiButton.scss";

interface CpiButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disableButton?: boolean;
}

/** Pill button with the trailing arrow badge. Pair `className` with `cpi-button dark|light`. */
const CpiButton: React.FC<CpiButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disableButton = false,
}) => (
  <button className={className} onClick={onClick} type={type} disabled={disableButton}>
    <span className="button-label">{label}</span>
    <span className="arrow-icon-wrapper">
      <ArrowIcon className="arrow-icon" aria-hidden="true" focusable="false" />
    </span>
  </button>
);

export default CpiButton;

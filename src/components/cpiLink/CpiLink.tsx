import ArrowIcon from "../../assets/icons/arrow.svg?react";
import "./CpiLink.scss";

interface CpiButtonProps {
  label: string;
  route: string;
}

const CpiLink: React.FC<CpiButtonProps> = ({ label, route }) => {
  return (
    <>
      <a className="cpi-link" href={route}>
        {label}
        <ArrowIcon id="arrow" />
      </a>
    </>
  );
};

export default CpiLink;

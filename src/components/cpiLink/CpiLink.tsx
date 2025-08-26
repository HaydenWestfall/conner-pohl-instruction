import ArrowIcon from "../../assets/icons/arrow.svg?react";
import "./CpiLink.scss";

interface CpiButtonProps {
  label: string;
  route: string;
  className?: string;
}

const CpiLink: React.FC<CpiButtonProps> = ({ label, route, className = "" }) => {
  return (
    <>
      <a className={"cpi-link " + className} href={route}>
        {label}
        <ArrowIcon id="arrow" />
      </a>
    </>
  );
};

export default CpiLink;

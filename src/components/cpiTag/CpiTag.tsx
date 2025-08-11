import "./CpiTag.scss";

interface CpiTagProps {
  index: string;
  label: string;
  className?: string;
}

export const CpiTag: React.FC<CpiTagProps> = ({ index, label, className = "" }) => {
  return (
    <>
      <div className={"cpiTag " + className}>
        <div className="section">{index}</div>
        <span className="label">{label}</span>
      </div>
    </>
  );
};

import "./CpiTag.scss";

interface CpiTagProps {
  index: string;
  label: string;
}

export const CpiTag: React.FC<CpiTagProps> = ({ index, label }) => {
  return (
    <>
      <div className="cpiTag">
        <div className="section">{index}</div>
        <span className="label">{label}</span>
      </div>
    </>
  );
};

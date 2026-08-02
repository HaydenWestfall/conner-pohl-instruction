import "./CpiTag.scss";

interface CpiTagProps {
  index: string;
  label: string;
  className?: string;
}

/** Numbered section marker, e.g. "01 ABOUT". */
export const CpiTag: React.FC<CpiTagProps> = ({ index, label, className = "" }) => (
  <div className={`cpiTag ${className}`.trim()}>
    <div className="section">{index}</div>
    <span className="label">{label}</span>
  </div>
);

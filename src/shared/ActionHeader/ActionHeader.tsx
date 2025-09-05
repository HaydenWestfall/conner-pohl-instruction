import ActionHeroImage from "../../assets/images/contact_header.png";
import "./ActionHeader.scss";

type MagneticProps = {
  children: React.ReactNode;
};

const ActionHeader: React.FC<MagneticProps> = ({ children }) => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <>
      <div id="action-header" className="hero-wrapper short">
        <img className="route-header-img" src={ActionHeroImage}></img>
        <div className="hero-header">{children}</div>
      </div>
    </>
  );
};

export { ActionHeader };

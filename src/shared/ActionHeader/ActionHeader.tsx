import ActionHeroImage from "../../assets/images/contact_header.png";
import "./ActionHeader.scss";

export const ActionHeader = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <>
      <div id="action-header" className="hero-wrapper short">
        <img className="route-header-img" src={ActionHeroImage}></img>
        <div className="hero-header">
          <h1>YOUR JOURNEY BEGINS TODAY</h1>
        </div>
      </div>
    </>
  );
};

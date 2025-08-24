import AboutHeroImage from "../../../../assets/images/about_header.png";
import Selected from "../../../../assets/icons/selected-indicator.svg?react";
import UnSelected from "../../../../assets/icons/unselected-indicator.svg?react";
import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import "./Trainers.scss";

export const Trainers = () => {
  return (
    <>
      <div className="trainers-wrapper">
        <div className="trainer-info-wrapper">
          <div className="trainer-name">
            <span>Our Trainers</span>
            <h2>Conner Pohl</h2>
          </div>

          <div className="trainer-description">
            <p>
              From swing mechanics to approach at the plate, our hitting sessions focus on building strong, repeatable
              movements that translate to game day. Whether it’s driving the ball with power or finding consistency in
              contact, we tailor every rep to help you hit with confidence and purpose.
            </p>
            <div className="trainer-index-wrapper">
              <UnSelected />
              <Selected />
              <UnSelected />
              <UnSelected />
            </div>
          </div>
        </div>
        <img src={AboutHeroImage} alt="" className="trainer-primary" />
        <div className="trainer-actions">
          <div className="actions">
            <button>
              <ArrowIcon id="prev-trainer" />
            </button>
            <button>
              <ArrowIcon id="next-trainer" />
            </button>
          </div>
          <img src={AboutHeroImage} alt="" className="trainer-secondary" />
        </div>
      </div>
    </>
  );
};

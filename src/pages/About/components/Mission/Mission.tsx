import BatIcon from "../../../../assets/icons/bat.svg?react";
import FieldIcon from "../../../../assets/icons/field.svg?react";
import GloveIcon from "../../../../assets/icons/glove.svg?react";
import HittingImage from "../../../../assets/images/contact_hitting.png";
import HittingImage2 from "../../../../assets/images/kid_1.png";
import "./Mission.scss";

export const Mission = () => {
  return (
    <>
      <div id="about-header" className="mission-wrapper">
        <div className="mission-info-wrapper">
          <div className="mission-statement">
            <div className="statement">
              <h2>OUR MISSION</h2>
              <p>
                Conner Pohl Instruction, led by experienced collegiate baseball player Conner Pohl, is built on a deep
                competitive drive and a passion for bringing out the best in every player. Conner and his team combine
                high-level playing experience with a personalized coaching approach to help athletes sharpen their
                skills and build lasting confidence. Each lesson is designed to challenge, encourage, and inspire growth
                both on and off the field.
              </p>
            </div>
            <div className="misson-accent-wrapper">
              <div className="icons">
                <div className="icon-wrapper">
                  <BatIcon className="accent-icons" />
                </div>
                <div className="icon-wrapper">
                  <FieldIcon className="accent-icons" />
                </div>
                <div className="icon-wrapper">
                  <GloveIcon className="accent-icons" />
                </div>
              </div>
              <span className="text">We do it all . . .</span>
            </div>
          </div>
          <div className="stats-wrapper">
            <div className="stat-wrapper">
              <span className="stat">200+</span>
              <span className="label">Players Trained</span>
            </div>
            <div className="divider"></div>
            <div className="stat-wrapper ">
              <span className="stat">5+</span>
              <span className="label">Years Training</span>
            </div>
          </div>
        </div>
        <div className="photo-wrapper">
          <img src={HittingImage2} alt="" className="long-photo" />
          <img src={HittingImage} alt="" className="short-photo" />
        </div>
      </div>
    </>
  );
};

import "./About.scss";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import BaseballAccent from "../../../../assets/icons/baseball_accent.svg?react";
import CpiLink from "../../../../components/cpiButton/CpiLink";

export const About = () => {
  return (
    <>
      <div className="about-section">
        <CpiTag index="01" label="ABOUT" />
        <div className="about-wrapper">
          <div className="about-header">
            <h2>
              Turning Potential Into Performance —
              <br />
              One Player at a Time
            </h2>
            <CpiLink label="Learn More" href="/about" className="cpi-button dark" />
          </div>

          <div className="footer">
            <div className="stat-section">
              <div className="stat-wrapper">
                <span className="stat">200+</span>
                <span className="label">Players Trained</span>
              </div>
              <div className="stat-wrapper">
                <span className="stat">5+</span>
                <span className="label">Years Training</span>
              </div>
            </div>

            <p>
              Conner Pohl Instruction, led by experienced collegiate baseball player Conner Pohl, is built on a deep
              competitive drive and a passion for bringing out the best in every player. Conner and his team combine
              high-level playing experience with a personalized coaching approach to help athletes sharpen their skills
              and build lasting confidence. Each lesson is designed to challenge, encourage, and inspire growth both on
              and off the field.
            </p>
          </div>
        </div>

        <BaseballAccent className="baseball-accent" />
      </div>
    </>
  );
};

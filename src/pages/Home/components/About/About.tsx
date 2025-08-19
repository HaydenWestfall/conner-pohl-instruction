import "./About.scss";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import CpiButton from "../../../../components/cpiButton/CpiButton";
import BaseballAccent from "../../../../assets/icons/baseball_accent.svg?react";

export const About = () => {
  return (
    <>
      <div className="about-section">
        <CpiTag index="01" label="ABOUT" />
        <div className="about-wrapper">
          <div className="about-header">
            <h2>
              Let our experienced team elevate
              <br /> your game to the next level
            </h2>
            <CpiButton label="Learn More" onClick={() => window.alert("Test")} className="cpi-button dark" />
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
              At Conner Pohl Instruction, it’s about more than just reps. With years of experience as a D1 athlete and
              varsity coach, Conner brings a passion for teaching and a sharp focus on mechanics to every session. From
              young players to serious competitors, CPI helps athletes grow their game the right way.
            </p>
          </div>
        </div>

        <BaseballAccent className="baseball-accent" />
      </div>
    </>
  );
};

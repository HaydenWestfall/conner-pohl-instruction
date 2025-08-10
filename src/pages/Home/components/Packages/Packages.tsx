import { CpiTag } from "../../../../cpiTag/CpiTag";
import "./Packages.scss";
import HittingImage from "../../../../assets/images/hitting.png";
import PitchingImage from "../../../../assets/images/pitching.png";
import FiledingImage from "../../../../assets/images/stealing.png";

export const Packages = () => {
  return (
    <>
      <div className="packages-wrapper">
        <CpiTag index="02" label="WHAT WE OFFER" />

        <div className="lesson-wrapper">
          <img src={HittingImage} alt="Player at bat" />
          <div>
            <h2>HITTING LESSONS</h2>
            <p>
              At Conner Pohl Instruction, it’s about more than just reps. With years of experience as a D1 athlete and
              varsity coach, Conner brings a passion for teaching and a sharp focus on mechanics to every session. From
              young players to serious competitors, CPI helps athletes grow their game the right way.
            </p>
          </div>
        </div>

        <div className="lesson-wrapper">
          <img src={PitchingImage} alt="Player at bat" />
          <div>
            <h2>PITCHING LESSONS</h2>
            <p>
              At Conner Pohl Instruction, it’s about more than just reps. With years of experience as a D1 athlete and
              varsity coach, Conner brings a passion for teaching and a sharp focus on mechanics to every session. From
              young players to serious competitors, CPI helps athletes grow their game the right way.
            </p>
          </div>
        </div>

        <div className="lesson-wrapper">
          <img src={FiledingImage} alt="Player at bat" />
          <div>
            <h2>FIELDING LESSONS</h2>
            <p>
              At Conner Pohl Instruction, it’s about more than just reps. With years of experience as a D1 athlete and
              varsity coach, Conner brings a passion for teaching and a sharp focus on mechanics to every session. From
              young players to serious competitors, CPI helps athletes grow their game the right way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

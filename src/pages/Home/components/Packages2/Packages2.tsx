import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import "./Packages2.scss";
import HittingImage from "../../../../assets/images/hitting.png";
import PitchingImage from "../../../../assets/images/pitching.png";
import FiledingImage from "../../../../assets/images/stealing.png";
import CpiButton from "../../../../components/cpiButton/CpiButton";

export const Packages2 = () => {
  const packageImages = [HittingImage, PitchingImage, FiledingImage];
  const packageDescriptions = [
    "Hitting is one of the most challenging skills in baseball and across many sports. At Pohl Performance Baseball, we approach it with focus, adaptability, and attention to each athlete’s unique needs. Every player who walks through our doors receives personalized instruction aimed at making the game feel simpler, more understandable, and more achievable. Our goal is to create an environment that’s both informative and encouraging, helping athletes gain the knowledge, tools, and confidence they need to succeed at the plate.",
    "Pitching mechanics are the foundation of both performance and longevity on the mound. Good mechanics not only improve velocity and command but also reduce the risk of injury, allowing pitchers to compete consistently and confidently. At Pohl Performance Baseball, we focus on breaking down each movement — from the first step to the follow-through — ensuring that every pitcher develops an efficient, repeatable delivery that maximizes their potential.",
    "Great defense wins games. Our fielding lessons build quick feet, sharp instincts, and reliable hands so you’re ready for every play. We focus on the fundamentals and the finer details that turn good fielders into game-changers.",
  ];

  return (
    <>
      <div className="packages-wrapper">
        <CpiTag index="02" label="WHAT WE OFFER" className="dark" />

        <div className="lesson-wrapper">
          <div className="lesson-description">
            <div className="header">
              <h2>HITTING LESSONS</h2>
              <p>
                At Conner Pohl Instruction, it’s about more than just reps. With years of experience as a D1 athlete and
                varsity coach, Conner brings a passion for teaching and a sharp focus on mechanics to every session.
                From young players to serious competitors, CPI helps athletes grow their game the right way.
              </p>
              <div className="chips">
                <div className="chip">Mechanics</div>
                <div className="chip">Plate Approach</div>
                <div className="chip">Execution</div>
              </div>
            </div>
            <CpiButton label="Schedule a Session" onClick={() => window.alert("Test")} className="cpi-button dark" />
          </div>

          <div className="images">
            {packageImages.map((image, index) => (
              <img key={index} src={image} alt={`Player at bat ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

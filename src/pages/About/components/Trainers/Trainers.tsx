import Selected from "../../../../assets/icons/selected-indicator.svg?react";
import UnSelected from "../../../../assets/icons/unselected-indicator.svg?react";
import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import Trainer1Primary from "../../../../assets/images/trainer1.png";
import Trainer1Secondary from "../../../../assets/images/trainer2.png";
import Trainer2Primary from "../../../../assets/images/trainer1.png";
import Trainer2Secondary from "../../../../assets/images/trainer2.png";
import Trainer3Primary from "../../../../assets/images/trainer1.png";
import Trainer3Secondary from "../../../../assets/images/trainer2.png";
import Trainer4Primary from "../../../../assets/images/trainer1.png";
import Trainer4Secondary from "../../../../assets/images/trainer2.png";
import "./Trainers.scss";

interface Trainer {
  name: string;
  description: string;
  primaryImage: string;
  secondaryImage: string;
}

export const Trainers = () => {
  const trainers: Trainer[] = [
    {
      name: "Conner Pohl",
      description:
        "From swing mechanics to approach at the plate, our hitting sessions focus on building strong, repeatable movements that translate to game day. Whether it’s driving the ball with power or finding consistency in contact, we tailor every rep to help you hit with confidence and purpose.",
      primaryImage: Trainer1Primary,
      secondaryImage: Trainer1Secondary,
    },
    {
      name: "Ryan Moellete",
      description:
        "From swing mechanics to approach at the plate, our hitting sessions focus on building strong, repeatable movements that translate to game day. Whether it’s driving the ball with power or finding consistency in contact, we tailor every rep to help you hit with confidence and purpose.",
      primaryImage: Trainer2Primary,
      secondaryImage: Trainer2Secondary,
    },
    {
      name: "Ryan Townsend",
      description:
        "From swing mechanics to approach at the plate, our hitting sessions focus on building strong, repeatable movements that translate to game day. Whether it’s driving the ball with power or finding consistency in contact, we tailor every rep to help you hit with confidence and purpose.",
      primaryImage: Trainer3Primary,
      secondaryImage: Trainer3Secondary,
    },
    {
      name: "Some Guy",
      description:
        "From swing mechanics to approach at the plate, our hitting sessions focus on building strong, repeatable movements that translate to game day. Whether it’s driving the ball with power or finding consistency in contact, we tailor every rep to help you hit with confidence and purpose.",
      primaryImage: Trainer4Primary,
      secondaryImage: Trainer4Secondary,
    },
  ];

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
        <img src={Trainer1Primary} alt="" className="trainer-primary" />
        <div className="trainer-actions">
          <div className="actions">
            <button>
              <ArrowIcon id="prev-trainer" />
            </button>
            <button>
              <ArrowIcon id="next-trainer" />
            </button>
          </div>
          <img src={Trainer1Secondary} alt="" className="trainer-secondary" />
        </div>
      </div>
    </>
  );
};

import Selected from "../../../../assets/icons/selected-indicator.svg?react";
import UnSelected from "../../../../assets/icons/unselected-indicator.svg?react";
import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import Trainer1Primary from "../../../../assets/images/trainer1_primary.png";
import Trainer1Secondary from "../../../../assets/images/trainer1_secondary.png";
import Trainer2Primary from "../../../../assets/images/trainer2_primary.png";
import Trainer2Secondary from "../../../../assets/images/trainer2_secondary.png";
import Trainer3Primary from "../../../../assets/images/trainer1_primary.png";
import Trainer3Secondary from "../../../../assets/images/trainer1_secondary.png";
import Trainer4Primary from "../../../../assets/images/trainer2_primary.png";
import Trainer4Secondary from "../../../../assets/images/trainer2_secondary.png";
import "./Trainers.scss";
import { useState } from "react";

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

  const [currentTrainer, setCurrentTrainer] = useState(0);

  const handlePrev = () => {
    setCurrentTrainer((prev) => (prev === 0 ? trainers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTrainer((prev) => (prev === trainers.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="trainers-wrapper">
      <div className="trainer-info-wrapper">
        <div className="trainer-name">
          <span>Our Trainers</span>
          <h2>{trainers[currentTrainer].name}</h2>
        </div>
        <div className="trainer-description">
          <p>{trainers[currentTrainer].description}</p>
          <div className="trainer-index-wrapper">
            {trainers.map((_, idx) => (idx === currentTrainer ? <Selected key={idx} /> : <UnSelected key={idx} />))}
          </div>
        </div>
      </div>
      <img src={trainers[currentTrainer].primaryImage} alt="" className="trainer-primary" />
      <div className="trainer-actions">
        <div className="actions">
          <button onClick={handlePrev} aria-label="Previous Trainer">
            <ArrowIcon id="prev-trainer" />
          </button>
          <button onClick={handleNext} aria-label="Next Trainer">
            <ArrowIcon id="next-trainer" />
          </button>
        </div>
        <img src={trainers[currentTrainer].secondaryImage} alt="" className="trainer-secondary" />
      </div>
    </div>
  );
};

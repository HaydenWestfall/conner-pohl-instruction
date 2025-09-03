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
  description: string[];
  primaryImage: string;
  secondaryImage: string;
}

export const Trainers = () => {
  const trainers: Trainer[] = [
    {
      name: "Conner Pohl",
      description: [
        "Conner Pohl is the founder and owner of CPI Baseball, bringing years of playing and coaching experience to help athletes of all ages reach their full potential. A native of Arcanum, Ohio, Conner played collegiate baseball at Ohio State University, where he gained invaluable experience and a deep understanding of the game.",
        "Even while in college, Conner began giving private lessons and has continued coaching at the high school and youth levels, including his time at Arcanum High School. He specializes in hitting instruction but provides guidance across all aspects of player development.",
        "Conner is passionate about helping athletes improve their skills, maximize performance, and develop a lifelong love for baseball. At CPI Baseball, he creates a supportive and informative training environment for every player.",
      ],
      primaryImage: Trainer1Primary,
      secondaryImage: Trainer1Secondary,
    },
    {
      name: "Ryan Moellete",
      description: [
        "Ryan Molette was a standout athlete in high school, known for his speed, quick hands at the plate, and exceptional ability to track down balls in the outfield. He excelled in multiple sports but truly dominated on the baseball field.",
        "Ryan was recruited by Purdue Fort Wayne and went on to continue his baseball career at Lincoln Trail College. Now a dedicated instructor at CPI Baseball, Ryan brings his athleticism and experience to help players of all ages improve their hitting, fielding, and overall baseball skills. His focus is on developing fundamentals, enhancing performance, and helping each athlete reach their full potential.",
      ],
      primaryImage: Trainer2Primary,
      secondaryImage: Trainer2Secondary,
    },
    {
      name: "Ryan Townsend",
      description: [
        "Ryan Townsend is a right-handed pitcher and 2017 graduate of Vandalia-Butler High School. He went on to continue his playing career at Urbana University from 2017 to 2020 and later at Wilmington College in 2021.",
        "From 2019 to 2022, Ryan coached in the Miami Valley Prospects organization, working with teams from 14U through 18U, and served as the Director of Player Development from 2021 to 2022.",
        "He also spent one season as the junior varsity coach at Vandalia-Butler before becoming the head varsity baseball coach at Sidney High School, where he is now entering his third season.",
      ],
      primaryImage: Trainer3Primary,
      secondaryImage: Trainer3Secondary,
    },
    {
      name: "Jordan Long",
      description: [
        "Jordan Long is an infielder who graduated from Wayne High School in 2019. He continued his collegiate baseball career at Edison Community College and later at Notre Dame College, where he gained valuable experience and first connected with Conner Pohl.",
        "Jordan brings a strong dedication to coaching and has spent years helping young athletes develop their skills, improve their performance, and reach their goals. He now provides personalized instruction at CPI Baseball, focusing on hitting, fielding, and infield fundamentals.",
      ],
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
          {trainers[currentTrainer].description.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
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

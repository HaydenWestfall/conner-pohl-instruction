import { useState } from "react";

import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import Selected from "../../../../assets/icons/selected-indicator.svg?react";
import UnSelected from "../../../../assets/icons/unselected-indicator.svg?react";
import Trainer1Primary from "../../../../assets/images/conner_pohl.webp";
import Trainer2Primary from "../../../../assets/images/ryan_moellete.webp";
import Trainer3Primary from "../../../../assets/images/ryan_townsend.webp";
import Trainer4Primary from "../../../../assets/images/jordan_long.webp";
import TrainerSecondary from "../../../../assets/images/trainer2_secondary.webp";
import "./Trainers.scss";

interface Trainer {
  name: string;
  description: string[];
  primaryImage: string;
  secondaryImage: string;
}

// Static content: defined at module scope so it is not rebuilt on every render.
const TRAINERS: Trainer[] = [
  {
    name: "Conner Pohl",
    description: [
      "Conner Pohl is the founder of CPI Baseball, combining years of playing and coaching experience to help athletes reach their full potential. A native of Arcanum, Ohio, Conner played collegiate baseball at Ohio State University, where he built a deep understanding of the game.",
      "He began giving private lessons in college and has since coached at both the youth and high school levels, including Arcanum High School. Specializing in hitting instruction, Conner focuses on developing complete players through a supportive, high-energy training environment.",
    ],
    primaryImage: Trainer1Primary,
    secondaryImage: TrainerSecondary,
  },
  {
    name: "Ryan Moellete",
    description: [
      "Ryan Molette was a standout athlete in high school, known for his speed, quick hands at the plate, and exceptional ability to track down balls in the outfield. He excelled in multiple sports but truly dominated on the baseball field.",
      "Ryan was recruited by Purdue Fort Wayne and went on to continue his baseball career at Lincoln Trail College. Now a dedicated instructor at CPI Baseball, Ryan brings his athleticism and experience to help players of all ages improve their hitting, fielding, and overall baseball skills. His focus is on developing fundamentals, enhancing performance, and helping each athlete reach their full potential.",
    ],
    primaryImage: Trainer2Primary,
    secondaryImage: TrainerSecondary,
  },
  {
    name: "Ryan Townsend",
    description: [
      "Ryan Townsend is a right-handed pitcher and Vandalia-Butler High School (2017) graduate who continued his playing career at Urbana University and Wilmington College. From 2019–2022, he coached with the Miami Valley Prospects, serving as Director of Player Development, and also coached at Vandalia-Butler. Ryan is now entering his third season as head varsity coach at Sidney High School.",
    ],
    primaryImage: Trainer3Primary,
    secondaryImage: TrainerSecondary,
  },
  {
    name: "Jordan Long",
    description: [
      "Jordan Long is an infielder who graduated from Wayne High School in 2019. He continued his collegiate baseball career at Edison Community College and later at Notre Dame College, where he gained valuable experience and first connected with Conner Pohl.",
      "Jordan brings a strong dedication to coaching and has spent years helping young athletes develop their skills, improve their performance, and reach their goals. He now provides personalized instruction at CPI Baseball, focusing on hitting, fielding, and infield fundamentals.",
    ],
    primaryImage: Trainer4Primary,
    secondaryImage: TrainerSecondary,
  },
];

export const Trainers = () => {
  const [currentTrainer, setCurrentTrainer] = useState(0);
  const trainer = TRAINERS[currentTrainer];

  const handlePrev = () => {
    setCurrentTrainer((prev) => (prev === 0 ? TRAINERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTrainer((prev) => (prev === TRAINERS.length - 1 ? 0 : prev + 1));
  };

  // The same prev/next pair appears twice: overlaid on the portrait at wide
  // widths, and below it on narrow ones. CSS decides which is visible.
  const carouselControls = (
    <>
      <button onClick={handlePrev} aria-label="Previous Trainer">
        <ArrowIcon id="prev-trainer" />
      </button>
      <button onClick={handleNext} aria-label="Next Trainer">
        <ArrowIcon id="next-trainer" />
      </button>
    </>
  );

  return (
    <div className="trainers-wrapper">
      <div className="trainer-info-wrapper">
        <div className="trainer-name">
          <span>Our Trainers</span>
          <h2>{trainer.name}</h2>
        </div>
        <div className="trainer-description">
          {trainer.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="trainer-index-wrapper">
            {TRAINERS.map((entry, idx) =>
              idx === currentTrainer ? <Selected key={entry.name} /> : <UnSelected key={entry.name} />
            )}
          </div>
        </div>
      </div>
      <div className="trainer-image-wrapper">
        <img
          src={trainer.primaryImage}
          alt={`${trainer.name}, baseball instructor at Conner Pohl Instruction`}
          className="trainer-primary"
          loading="lazy"
        />
        <div className="actions overlay">{carouselControls}</div>
      </div>
      <div className="trainer-actions">
        <div className="actions">{carouselControls}</div>
        <img src={trainer.secondaryImage} alt="" className="trainer-secondary" loading="lazy" />
      </div>
    </div>
  );
};

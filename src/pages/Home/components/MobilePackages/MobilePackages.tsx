import { useEffect, useRef, useState } from "react";

import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import FieldingImage from "../../../../assets/images/fielding.webp";
import HittingImage1 from "../../../../assets/images/hitting1.webp";
import HittingImage3 from "../../../../assets/images/hitting3.webp";
import PitchingImage2 from "../../../../assets/images/pitching2.webp";
import PitchingImage3 from "../../../../assets/images/pitching3.webp";
import CpiLink from "../../../../components/CpiButton/CpiLink";
import { BOOKING_URL } from "../../../../config/links";
import "./MobilePackages.scss";

interface Package {
  header: string;
  image: string;
  /** Shown collapsed; tapping the card swaps in the full `description`. */
  descriptionSnippet: string;
  description: string;
}

// Static content: module scope so it is not rebuilt on every render.
const PACKAGES: Package[] = [
  {
    header: "1 ON 1 HITTING LESSON",
    image: HittingImage1,
    descriptionSnippet: "Work one-on-one with an experienced instructor to refine. . .",
    description:
      "Work one-on-one with an experienced instructor to refine your swing from the ground up. These sessions focus on proper stance, mechanics, timing, and approach at the plate, using tailored drills and immediate feedback to improve contact, power, and confidence.",
  },
  {
    header: "DUO HITTING LESSON",
    image: HittingImage3,
    descriptionSnippet: "Train alongside a teammate or friend in a small-group setting while . . .",
    description:
      "Train alongside a teammate or friend in a small-group setting while receiving professional hitting instruction. These sessions cover the same mechanics and drills as the 1-on-1 option but incorporate competitive exercises, shared feedback, and live reps to keep players engaged and learning from one another.",
  },
  {
    header: "1 ON 1 PITCHING LESSON",
    image: PitchingImage2,
    descriptionSnippet: "Get individualized attention to develop and fine-tune your . . .",
    description:
      "Get individualized attention to develop and fine-tune your pitching skills. Players work on mechanics, accuracy, velocity, and mental approach while learning drills and strategies to become more effective and confident on the mound.",
  },
  {
    header: "DUO PITCHING LESSONS",
    image: PitchingImage3,
    descriptionSnippet: "Pair up with another player for an energetic, collaborative pitching . . .",
    description:
      "Pair up with another player for an energetic, collaborative pitching session. Athletes receive expert coaching on mechanics, pitch selection, and game strategy, while practicing side by side for added motivation, feedback, and live scenario work.",
  },
  {
    header: "FIELDING LESSONS",
    image: FieldingImage,
    descriptionSnippet: "Build a solid defensive foundation with focused instruction on glove . . .",
    description:
      "Build a solid defensive foundation with focused instruction on glove work, footwork, throwing accuracy, and positioning. Players will run through game-like drills and situational practice designed to improve reaction time, confidence, and overall defensive performance on the field.",
  },
];

const INTRO_TEXT =
  "Explore our range of training packages, designed to elevate skills through expert coaching and personalized programs.";

export const MobilePackages = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [scrollPadding, setScrollPadding] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Bring the selected card to the left edge, less the list's own padding.
  useEffect(() => {
    const scrollList = scrollRef.current;
    const card = scrollList?.children[currentIdx] as HTMLElement | undefined;
    if (!scrollList || !card) return;

    scrollList.scrollTo({
      left: card.offsetLeft - (window.innerWidth < 768 ? 16 : 48),
      behavior: "smooth",
    });
  }, [currentIdx]);

  // Pad the list so the last card can still scroll to the left edge.
  useEffect(() => {
    const updatePadding = () => {
      const lastCard = scrollRef.current?.querySelector<HTMLElement>(".package-card:last-of-type");
      if (!lastCard) return;

      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const padding = window.innerWidth - lastCard.offsetWidth - rem;
      setScrollPadding(Math.max(padding, rem));
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  const handlePrev = () => setCurrentIdx((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIdx((prev) => Math.min(prev + 1, PACKAGES.length - 1));

  return (
    <div className="packages-mobile-wrapper">
      <div className="header">
        <h2>WHAT WE OFFER</h2>
        <p className="description-text">{INTRO_TEXT}</p>
      </div>

      <div className="horizontal-scroll-list" ref={scrollRef} style={{ paddingRight: `${scrollPadding}px` }}>
        {PACKAGES.map((pkg, idx) => (
          <div
            className="package-card"
            key={pkg.header}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
          >
            <img src={pkg.image} alt={pkg.header.toLowerCase()} />
            <div className="image-overlay">
              <h2>{pkg.header}</h2>
              <p>{expandedIdx === idx ? pkg.description : pkg.descriptionSnippet}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="package-actions-wrapper">
        <div className="package-actions">
          <button onClick={handlePrev} aria-label="Previous Package" className={currentIdx === 0 ? "inactive" : ""}>
            <ArrowIcon id="prev-package" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Package"
            className={currentIdx === PACKAGES.length - 1 ? "inactive" : ""}
          >
            <ArrowIcon id="next-package" />
          </button>
        </div>
        <CpiLink label="Book Now" href={BOOKING_URL} className="cpi-button dark" />
      </div>
    </div>
  );
};

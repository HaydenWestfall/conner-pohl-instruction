import { useState, useRef, useEffect } from "react";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import "./MobilePackages.scss";
import CpiLink from "../../../../components/cpiButton/CpiLink";
import HittingImage1 from "../../../../assets/images/hitting1.webp";
import HittingImage3 from "../../../../assets/images/hitting3.webp";
import PitchingImage2 from "../../../../assets/images/pitching2.webp";
import PitchingImage3 from "../../../../assets/images/pitching3.webp";
import FieldingImage from "../../../../assets/images/fielding.webp";

export const MobilePackages = () => {
  const packages = [
    {
      header: "1 ON 1 HITTING LESSON",
      image: HittingImage1,
      expanded: false,
      descriptionSnippet: "Work one-on-one with an experienced instructor to refine. . .",
      description:
        "Work one-on-one with an experienced instructor to refine your swing from the ground up. These sessions focus on proper stance, mechanics, timing, and approach at the plate, using tailored drills and immediate feedback to improve contact, power, and confidence.",
    },
    {
      header: "DUO HITTING LESSON",
      image: HittingImage3,
      expanded: false,
      descriptionSnippet: "Train alongside a teammate or friend in a small-group setting while . . .",
      description:
        "Train alongside a teammate or friend in a small-group setting while receiving professional hitting instruction. These sessions cover the same mechanics and drills as the 1-on-1 option but incorporate competitive exercises, shared feedback, and live reps to keep players engaged and learning from one another.",
    },
    {
      header: "1 ON 1 PITCHING LESSON",
      image: PitchingImage2,
      expanded: false,
      descriptionSnippet: "Get individualized attention to develop and fine-tune your . . .",
      description:
        "Get individualized attention to develop and fine-tune your pitching skills. Players work on mechanics, accuracy, velocity, and mental approach while learning drills and strategies to become more effective and confident on the mound.",
    },
    {
      header: "DUO PITCHING LESSONS",
      image: PitchingImage3,
      expanded: false,
      descriptionSnippet: "Pair up with another player for an energetic, collaborative pitching . . .",
      description:
        "Pair up with another player for an energetic, collaborative pitching session. Athletes receive expert coaching on mechanics, pitch selection, and game strategy, while practicing side by side for added motivation, feedback, and live scenario work.",
    },
    {
      header: "FIELDING LESSONS",
      image: FieldingImage,
      expanded: false,
      descriptionSnippet: "Build a solid defensive foundation with focused instruction on glove . . .",
      description:
        "Build a solid defensive foundation with focused instruction on glove work, footwork, throwing accuracy, and positioning. Players will run through game-like drills and situational practice designed to improve reaction time, confidence, and overall defensive performance on the field.",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollPadding, setScrollPadding] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children[currentIdx]) {
        const child = children[currentIdx] as HTMLElement;
        const scrollList = scrollRef.current;
        const childLeft = child.offsetLeft;
        scrollList.scrollTo({
          left: childLeft - 16,
          behavior: "smooth",
        });
      }
    }
  }, [currentIdx]);

  // Dynamically set padding-right so last card can scroll to 1rem from left
  useEffect(() => {
    function updatePadding() {
      if (!scrollRef.current) return;
      const cards = scrollRef.current.querySelectorAll(".package-card");
      if (cards.length === 0) return;
      const lastCard = cards[cards.length - 1] as HTMLElement;
      const viewportWidth = window.innerWidth;
      const cardWidth = lastCard.offsetWidth;
      // 1rem in px
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const padding = viewportWidth - cardWidth - rem;
      setScrollPadding(padding > 0 ? padding : rem);
    }
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  const handlePrev = () => {
    if (currentIdx === 0) return;
    setCurrentIdx((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (currentIdx === packages.length - 1) return;
    setCurrentIdx((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <div className="packages-mobile-wrapper">
      <CpiTag index="02" label="PACKAGES" className="dark tag" />

      <div className="header">
        <h2>WHAT WE OFFER</h2>
        <p className="description-text">
          Explore our range of training packages, designed to elevate skills through expert coaching and personalized
          programs.
        </p>
      </div>

      <div className="horizontal-scroll-list" ref={scrollRef} style={{ paddingRight: `${scrollPadding}px` }}>
        {packages.map((pkg, idx) => (
          <div className="package-card" key={idx} onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}>
            <img src={pkg.image} alt={pkg.header} />
            <div className="image-overlay">
              <h2>{pkg.header}</h2>
              <p>{expandedIdx === idx ? <>{pkg.description}</> : <>{pkg.descriptionSnippet}</>}</p>
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
            className={currentIdx === packages.length - 1 ? "inactive" : ""}
          >
            <ArrowIcon id="next-package" />
          </button>
        </div>
        <CpiLink label="Book Now" href="/book" className="cpi-button dark" />
      </div>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";

import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import CpiButton from "../../../../components/CpiButton/CpiButton";
import { TESTIMONIALS } from "../../../../data/testimonials";
import { TestimonyCard } from "../TestimonyCard";
import "./TestimoniesSectionMobile.scss";

const INTRO_TEXT =
  "We're proud to be a part of a passionate and supportive baseball community. Hear directly from players, parents, and coaches who’ve seen the impact of our training firsthand—their stories speak louder than stats.";

export const TestimoniesSectionMobile = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
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

  const handlePrev = () => setCurrentIdx((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIdx((prev) => Math.min(prev + 1, TESTIMONIALS.length - 1));

  return (
    <div className="testimonies-section-mobile-wrapper">
      <div className="statement">
        <h2>TESTIMONIALS</h2>
        <p>{INTRO_TEXT}</p>
      </div>

      <div className="horizontal-scroll-list" ref={scrollRef}>
        {TESTIMONIALS.map((testimony) => (
          <TestimonyCard key={testimony.id} testimony={testimony} />
        ))}
      </div>

      <div className="testimony-actions">
        <div className="actions">
          <button onClick={handlePrev} aria-label="Previous Testimony" className={currentIdx === 0 ? "inactive" : ""}>
            <ArrowIcon id="prev-testimony" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimony"
            className={currentIdx === TESTIMONIALS.length - 1 ? "inactive" : ""}
          >
            <ArrowIcon id="next-testimony" />
          </button>
        </div>
        {/* TODO: still a placeholder — wire this to the Google review link the
            footer already uses. */}
        <CpiButton label="Leave a Review" onClick={() => window.alert("Test")} className="cpi-button dark" />
      </div>
    </div>
  );
};

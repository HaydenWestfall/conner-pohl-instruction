import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import StarIcon from "../../../../assets/icons/star.svg?react";
import { CpiTag } from "../../../../components/CpiTag/CpiTag";
import { TESTIMONIALS, type Testimony } from "../../../../data/testimonials";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import "./Testimonials.scss";

const MOBILE_BREAKPOINT = 768;
const VISIBLE_COUNT = 4;
const MAX_REVIEW_LENGTH = 280;
const ROTATE_INTERVAL_MS = 10_000;

const truncate = (text: string) =>
  text.length > MAX_REVIEW_LENGTH ? `${text.slice(0, MAX_REVIEW_LENGTH).trimEnd()}...` : text;

// `{ ...review }` already produces a fresh object per entry, so the previous
// JSON.parse(JSON.stringify(...)) round trip was redundant work at module load.
const reviews: Testimony[] = TESTIMONIALS.slice(0, VISIBLE_COUNT).map((review) => ({
  ...review,
  review: truncate(review.review),
}));

// The mobile tagline strip scrolls continuously, so the list is doubled and
// snapped back to the start once the second copy is reached.
const reviewsExtended: Testimony[] = [
  ...reviews.map((review, index) => ({ ...review, id: index })),
  ...reviews.map((review, index) => ({ ...review, id: index + reviews.length })),
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile(MOBILE_BREAKPOINT);
  const taglinesRef = useRef<HTMLDivElement>(null);

  const activeReviews = isMobile ? reviewsExtended : reviews;
  const activeReview = activeReviews[activeIndex % reviews.length];

  // Advance the carousel, restarting the clock whenever the slide changes.
  useEffect(() => {
    const timer = setTimeout(
      () => setActiveIndex((prev) => (prev + 1) % activeReviews.length),
      ROTATE_INTERVAL_MS
    );
    return () => clearTimeout(timer);
  }, [activeIndex, activeReviews.length]);

  // Slide the tagline strip so the active tagline sits at the left edge.
  useEffect(() => {
    const strip = taglinesRef.current;
    if (!isMobile || !strip) return;

    const activeTagline = strip.querySelectorAll<HTMLElement>(".tagline-wrapper")[activeIndex];
    if (!activeTagline) return;

    strip.style.transition = "left 0.3s";
    strip.style.left = `${-activeTagline.offsetLeft}px`;

    // Reaching the duplicated half means we can jump back to the real start
    // without the user seeing it, giving the strip an endless feel.
    if (activeIndex !== reviews.length) return;

    const resetTimer = setTimeout(() => {
      strip.style.transition = "unset";
      strip.style.left = "0px";
      setActiveIndex(0);
    }, 250);
    return () => clearTimeout(resetTimer);
  }, [activeIndex, isMobile]);

  return (
    <div className="testimonials-wrapper">
      <CpiTag index="03" label="TESTIMONIALS" />
      <div className="review-wrapper">
        <motion.div
          id="review-tagline"
          className="review-taglines"
          ref={taglinesRef}
          animate={isMobile ? { x: 0 } : undefined}
        >
          {activeReviews.map((review, idx) => (
            <div
              className={`tagline-wrapper${isMobile ? " mobile" : ""}`}
              key={review.id}
              style={isMobile ? { minWidth: "max-content" } : {}}
            >
              {!isMobile && (
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      className="indicator"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </AnimatePresence>
              )}
              <span
                className="tagline"
                style={{ color: idx % reviews.length === activeIndex % reviews.length ? "#111" : "#a5a5a5" }}
              >
                {review.tagline}
              </span>
            </div>
          ))}
        </motion.div>
        <div className="review-content">
          <div className="review-images">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex % reviews.length}
                src={activeReview?.playerImage}
                alt={activeReview?.tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="review-stats">
              84+
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon className="star-icon" key={i} aria-hidden="true" focusable="false" />
                ))}
                <span>4.9</span>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex % reviews.length}
              className="review"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <p>{activeReview?.review}</p>
              <div className="reviewer">
                <div className="initials">{activeReview?.initials}</div>
                <div className="info">
                  <span className="name">{activeReview?.name}</span>
                  <span className="team">{activeReview?.team}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

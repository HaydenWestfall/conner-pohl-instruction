import { useEffect, useRef, useState } from "react";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import "./Testimonials.scss";
import StarIcon from "../../../../assets/icons/star.svg?react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS, type Testimony } from "../../../../models/Testimony";

// Example review data, replace images as needed
let activeReviews: Testimony[] = [];

const reviews: Testimony[] = TESTIMONIALS;

const reviewsExtended: Testimony[] = [
  ...reviews.map((r, i) => ({ ...r, id: i })),
  ...reviews.map((r, i) => ({ ...r, id: i + reviews.length })),
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const taglinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        activeReviews = reviewsExtended;
        setIsMobile(true);
      } else {
        activeReviews = reviews;
        setIsMobile(false);
      }
      console.log(activeReviews);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const activeIndexSize = window.innerWidth < 768 ? 5 : 4;
      setActiveIndex((prev) => (prev + 1) % activeIndexSize);
      console.log(activeIndex);
      console.log(activeIndexSize);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Animate horizontal scroll for taglines on mobile
  useEffect(() => {
    if (!isMobile || !taglinesRef.current) return;
    const taglineWrapper = taglinesRef.current.querySelectorAll(".tagline-wrapper");
    const reviewTagline = document.getElementById("review-tagline");

    const activeTagline = taglineWrapper[activeIndex] as HTMLElement | undefined;
    reviewTagline!.style.transition = "left 0.3s";

    if (activeIndex === 4 && reviewTagline) {
      const left = activeTagline!.offsetLeft;
      reviewTagline.style.left = -1 * left + "px";

      setTimeout(() => {
        reviewTagline.style.transition = "unset";
        reviewTagline.style.left = "0px";
        setActiveIndex(0);
      }, 250);
      return;
    }

    if (activeTagline && reviewTagline) {
      const left = activeTagline!.offsetLeft;
      reviewTagline.style.left = -1 * left + "px";
    }
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
                style={{
                  color: idx % reviews.length === activeIndex % reviews.length ? "#111" : "#a5a5a5",
                }}
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
                src={activeReviews[activeIndex % reviews.length]?.playerImage}
                alt={activeReviews[activeIndex % reviews.length]?.tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="review-stats">
              84+
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <StarIcon className="star-icon" key={i} />
                ))}
                <span>4.9</span>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex % reviews.length}
              className="review"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <p>{activeReviews[activeIndex % reviews.length]?.review}</p>
              <div className="reviewer">
                <div className="initials">{activeReviews[activeIndex % reviews.length]?.initials}</div>
                <div className="info">
                  <span className="name">{activeReviews[activeIndex % reviews.length]?.name}</span>
                  <span className="team">{activeReviews[activeIndex % reviews.length]?.team}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import "./Testimonials.scss";
import StarIcon from "../../../../assets/icons/star.svg?react";
import Testimony1 from "../../../../assets/images/stealing.png";
import Testimony2 from "../../../../assets/images/hitting.png";
import Testimony3 from "../../../../assets/images/pitching.png";
import { AnimatePresence, motion } from "framer-motion";

interface Review {
  id: number;
  tagline: string;
  image: any;
  description: string;
  initials: string;
  name: string;
  team: string;
}

// Example review data, replace images as needed
let activeReviews: Review[] = [];

const reviews: Review[] = [
  {
    id: 0,
    tagline: "Mechanics Matter",
    image: Testimony1,
    description:
      "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
    initials: "JA",
    name: "Johnny Appleseed",
    team: "Dayton Classics",
  },
  {
    id: 1,
    tagline: "Tremendous Improvement",
    image: Testimony2,
    description:
      "“Conner’s instruction helped my daughter go from struggling at the plate to leading her team in hits. He’s patient, knowledgeable, and truly cares about his athletes.”",
    initials: "MS",
    name: "Mary Smith",
    team: "Springfield Sluggers",
  },
  {
    id: 2,
    tagline: "Built Confidence",
    image: Testimony3,
    description:
      "“Our son used to dread practice, but now he looks forward to every session. Conner makes learning fun and effective!”",
    initials: "TR",
    name: "Tommy Rivers",
    team: "Centerville Stars",
  },
  {
    id: 3,
    tagline: "Noticably Better",
    image: Testimony2,
    description:
      "“Conner’s group lessons helped our team bond and improve together. The difference on the field is night and day.”",
    initials: "LK",
    name: "Lisa King",
    team: "Oakwood Owls",
  },
];

const reviewsExtended: Review[] = [
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
    const activeTagline = taglineWrapper[activeIndex] as HTMLElement | undefined;
    if (activeTagline && taglinesRef.current) {
      const container = taglinesRef.current;
      const left = activeTagline.offsetLeft;

      const reviewTagline = document.getElementById("review-tagline");
      reviewTagline!.style.left = -1 * left + "px";

      // container.scrollTo({ left, behavior: "smooth" });
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
                  color: activeIndex === idx ? "#111" : "#a5a5a5",
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
                key={activeIndex}
                src={activeReviews[activeIndex]?.image}
                alt={activeReviews[activeIndex]?.tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="review-stats">
              84
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
              key={activeIndex}
              className="review"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <p>{activeReviews[activeIndex]?.description}</p>
              <div className="reviewer">
                <div className="initials">{activeReviews[activeIndex]?.initials}</div>
                <div className="info">
                  <span className="name">{activeReviews[activeIndex]?.name}</span>
                  <span className="team">{activeReviews[activeIndex]?.team}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

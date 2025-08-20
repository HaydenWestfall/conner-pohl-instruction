import { useEffect, useState } from "react";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import "./Testimonials.scss";
import StarIcon from "../../../../assets/icons/star.svg?react";
import Testimony1 from "../../../../assets/images/stealing.png";
import Testimony2 from "../../../../assets/images/hitting.png";
import Testimony3 from "../../../../assets/images/pitching.png";
import { AnimatePresence, motion } from "framer-motion";

// Example review data, replace images as needed
const reviews = [
  {
    tagline: "Mechanics Matter",
    image: Testimony1,
    description:
      "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
    initials: "JA",
    name: "Johnny Appleseed",
    team: "Dayton Classics",
    stats: 84,
    rating: 4.9,
  },
  {
    tagline: "Tremendous Improvement",
    image: Testimony2,
    description:
      "“Conner’s instruction helped my daughter go from struggling at the plate to leading her team in hits. He’s patient, knowledgeable, and truly cares about his athletes.”",
    initials: "MS",
    name: "Mary Smith",
    team: "Springfield Sluggers",
    stats: 67,
    rating: 4.8,
  },
  {
    tagline: "Built Confidence",
    image: Testimony3,
    description:
      "“Our son used to dread practice, but now he looks forward to every session. Conner makes learning fun and effective!”",
    initials: "TR",
    name: "Tommy Rivers",
    team: "Centerville Stars",
    stats: 52,
    rating: 5.0,
  },
  {
    tagline: "Noticably Better",
    image: Testimony2,
    description:
      "“Conner’s group lessons helped our team bond and improve together. The difference on the field is night and day.”",
    initials: "LK",
    name: "Lisa King",
    team: "Oakwood Owls",
    stats: 39,
    rating: 4.7,
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="testimonials-wrapper">
      <CpiTag index="03" label="TESTIMONIALS" />
      <div className="review-wrapper">
        <div className="review-taglines">
          {reviews.map((review, idx) => (
            <div className="tagline-wrapper" key={review.tagline}>
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
        </div>
        <div className="review-content">
          <div className="review-images">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={reviews[activeIndex].image}
                alt={reviews[activeIndex].tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  flexGrow: 1,
                  objectFit: "cover",
                  aspectRatio: "1.05",
                  borderRadius: "var(--border-radius-2)",
                  height: "100%",
                }}
              />
            </AnimatePresence>
            <div className="review-stats">
              {reviews[activeIndex].stats}
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <StarIcon className="star-icon" key={i} />
                ))}
                <span>{reviews[activeIndex].rating}</span>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="review"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p>{reviews[activeIndex].description}</p>
              <div className="reviewer">
                <div className="initials">{reviews[activeIndex].initials}</div>
                <div className="info">
                  <span className="name">{reviews[activeIndex].name}</span>
                  <span className="team">{reviews[activeIndex].team}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import "./Testimonials.scss";
import StarIcon from "../../../../assets/icons/star.svg?react";
import Testimony1 from "../../../../assets/images/testimony_1.png";
import Testimony2 from "../../../../assets/images/testimony_2.png";
import Testimony3 from "../../../../assets/images/testimony_3.png";
import TestimonialsHeader from "../../../../assets/images/testimonials_header.png";

// Example review data, replace images as needed
const reviews = [
  {
    tagline: "Built Confidence",
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
    tagline: "Improved Skills",
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
    tagline: "Increased Enjoyment",
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
    tagline: "Stronger Teamwork",
    image: TestimonialsHeader,
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
        <div
          className="review-taglines"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", minWidth: "180px" }}
        >
          {reviews.map((review, idx) => (
            <span
              key={review.tagline}
              style={{
                fontWeight: activeIndex === idx ? 700 : 400,
                color: activeIndex === idx ? "#111" : "#a5a5a5",
                fontSize: "var(--text-size-large-3)",
                transition: "color 0.3s, font-weight 0.3s",
                cursor: "pointer",
              }}
            >
              {review.tagline}
            </span>
          ))}
        </div>
        <div
          className="review-content"
          style={{ flex: 1, marginLeft: "2.5rem", display: "flex", flexDirection: "column" }}
        >
          <div className="review-images">
            <img src={reviews[activeIndex].image} alt={reviews[activeIndex].tagline} />
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
          <div className="review">
            <p>{reviews[activeIndex].description}</p>
            <div className="reviewer">
              <div className="initials">{reviews[activeIndex].initials}</div>
              <div className="info">
                <span className="name">{reviews[activeIndex].name}</span>
                <span className="team">{reviews[activeIndex].team}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import "./TestimoniesSectionMobile.scss";
import CpiButton from "../../../../components/cpiButton/CpiButton";
import Testimony1 from "../../../../assets/images/testimony_1.png";
import Testimony2 from "../../../../assets/images/testimony_2.png";
import Testimony3 from "../../../../assets/images/testimony_3.png";
import QuoteIcon from "../../../../assets/icons/quote.svg?react";
import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Review {
  name: string;
  initials: string;
  image: string;
  review: string;
  context: string;
}

export const TestimoniesSectionMobile = () => {
  const AUTO_SCROLL_INTERVAL = 20000;
  const reviews: Review[] = [
    {
      name: "Tom Brady",
      initials: "HW",
      image: Testimony1,
      review:
        "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
      context: "6th Grader | Looking to improve swing",
    },
    {
      name: "Rob Gronkowski",
      initials: "RG",
      image: Testimony2,
      review:
        "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
      context: "6th Grader | Looking to improve swing",
    },
    {
      name: "Drake Maye",
      initials: "DM",
      image: Testimony3,
      review:
        "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
      context: "6th Grader | Looking to improve swing",
    },
    {
      name: "Antonio Gibson",
      initials: "AG",
      image: Testimony1,
      review:
        "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
      context: "6th Grader | Looking to improve swing",
    },
    {
      name: "Stegon Diggs",
      initials: "SD",
      image: Testimony2,
      review:
        "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
      context: "6th Grader | Looking to improve swing",
    },
  ];

  // Combine images and descriptions into a single horizontally scrolling list
  const items = [
    {
      type: "review",
      review: reviews[0],
    },
    {
      type: "review",
      review: reviews[1],
    },
    {
      type: "review",
      review: reviews[2],
    },
    {
      type: "review",
      review: reviews[3],
    },
    {
      type: "review",
      review: reviews[4],
    },
  ];

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Scroll to the current testimonial, 1rem from left
  useEffect(() => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children[currentIdx]) {
        const child = children[currentIdx] as HTMLElement;
        const scrollList = scrollRef.current;
        // Calculate the left position of the child relative to the scroll container
        const childLeft = child.offsetLeft;
        // Scroll so child is 1rem from left
        scrollList.scrollTo({
          left: childLeft - 16, // 1rem = 16px
          behavior: "smooth",
        });
      }
    }
  }, [currentIdx]);

  const handlePrev = () => {
    if (currentIdx === 0) return;
    setCurrentIdx((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleNext = () => {
    if (currentIdx === items.length - 1) return;
    setCurrentIdx((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div className="testimonies-section-mobile-wrapper" ref={wrapperRef}>
      <div className="statement">
        <h2>TESTIMONIALS</h2>
        <p>
          We're proud to be a part of a passionate and supportive baseball community. Hear directly from players,
          parents, and coaches who’ve seen the impact of our training firsthand—their stories speak louder than stats.
        </p>
      </div>

      <div className="horizontal-scroll-list" ref={scrollRef}>
        {items.map((item, idx) => (
          <div
            className="review-wrapper"
            key={idx}
            style={
              {
                //   boxShadow: idx === currentIdx ? "0 0 0 2px #222" : undefined,
                //   borderColor: idx === currentIdx ? "#222" : undefined,
              }
            }
          >
            <div className="review-header">
              <div className="reviewer">{item.review!.name}</div>
              <img src={item.review!.image} alt="" />
            </div>
            <div className="review-footer">
              <div className="review">
                <QuoteIcon />
                <p>{item.review!.review}</p>
              </div>
              <span>{item.review!.context}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="trainer-actions">
        <div className="actions">
          <button onClick={handlePrev} aria-label="Previous Testimony" className={currentIdx === 0 ? "inactive" : ""}>
            <ArrowIcon id="prev-trainer" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimony"
            className={currentIdx === items.length - 1 ? "inactive" : ""}
          >
            <ArrowIcon id="next-trainer" />
          </button>
        </div>
        <CpiButton label="Leave a Review" onClick={() => window.alert("Test")} className="cpi-button dark" />
      </div>
    </div>
  );
};

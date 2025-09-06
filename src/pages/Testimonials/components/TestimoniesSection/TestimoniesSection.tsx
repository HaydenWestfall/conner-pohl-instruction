import { useEffect, useRef } from "react";
import CpiButton from "../../../../components/cpiButton/CpiButton";
import Testimony1 from "../../../../assets/images/testimony_1.png";
import Testimony2 from "../../../../assets/images/testimony_2.png";
import Testimony3 from "../../../../assets/images/testimony_3.png";
import QuoteIcon from "../../../../assets/icons/quote.svg?react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TestimoniesSection.scss";
import { TESTIMONIALS, type Testimony } from "../../../../models/Testimony";

gsap.registerPlugin(ScrollTrigger);

export const TestimoniesSection = () => {
  const reviews: Testimony[] = TESTIMONIALS;

  // Combine images and descriptions into a single horizontally scrolling list
  const items = [
    {
      type: "description",
      title: "TESTIMONIALS",
      text: "We're proud to be a part of a passionate and supportive baseball community. Hear directly from players, parents, and coaches who’ve seen the impact of our training firsthand—their stories speak louder than stats.",
      chips: ["Mechanics", "Plate Approach", "Execution"],
    },
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
    {
      type: "callToAction",
      title: "HAPPY WITH YOUR EXPERIENCE",
    },
  ];

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !scrollRef.current) return;
    const scrollEl = scrollRef.current;
    const totalWidth = scrollEl.scrollWidth - scrollEl.clientWidth;
    gsap.to(scrollEl, {
      x: () => `-${totalWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "center center",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-width-wrapper overflow-wrapper">
      <div className="testimonies-section-wrapper" ref={wrapperRef}>
        <div className="horizontal-scroll-list" ref={scrollRef}>
          {items.map((item, idx) => {
            if (item.type === "description") {
              return (
                <div className="lesson-description" key={idx} style={{ minWidth: "25rem", flexShrink: 0 }}>
                  <div className="header">
                    <h2>{item.title}</h2>
                    <p className="description-text">{item.text}</p>
                  </div>
                  <CpiButton label="Leave a Review" onClick={() => window.alert("Test")} className="cpi-button dark" />
                </div>
              );
            } else if (item.type === "review") {
              // Map idx to overlayData (skip description block at idx 0)
              return (
                <div className="review-wrapper" key={idx}>
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
              );
            } else {
              return (
                <div className="callToAction" key={idx}>
                  <h2>{item.title}</h2>
                  <CpiButton label="Leave a Review" onClick={() => window.alert("Test")} className="cpi-button dark" />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

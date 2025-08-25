import { useEffect, useRef } from "react";
import "./TestimoniesSection.scss";
import CpiButton from "../../../../components/cpiButton/CpiButton";
import Testimony1 from "../../../../assets/images/testimony_1.png";
import Testimony2 from "../../../../assets/images/testimony_2.png";
import Testimony3 from "../../../../assets/images/testimony_3.png";
import QuoteIcon from "../../../../assets/icons/quote.svg?react";
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

export const TestimoniesSection = () => {
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
  );
};

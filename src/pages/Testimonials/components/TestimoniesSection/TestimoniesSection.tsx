import { useEffect, useRef } from "react";
import gsap from "gsap";

import CpiButton from "../../../../components/CpiButton/CpiButton";
import { TESTIMONIALS } from "../../../../data/testimonials";
import { TestimonyCard } from "../TestimonyCard";
import "./TestimoniesSection.scss";

const INTRO_TEXT =
  "We're proud to be a part of a passionate and supportive baseball community. Hear directly from players, parents, and coaches who’ve seen the impact of our training firsthand—their stories speak louder than stats.";

export const TestimoniesSection = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Pin the section and translate the row horizontally as the page scrolls.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const scrollEl = scrollRef.current;
    if (!wrapper || !scrollEl) return;

    const overflowWidth = () => scrollEl.scrollWidth - scrollEl.clientWidth;

    // Scoped to a gsap.context so cleanup reverts only this component's
    // triggers, rather than every ScrollTrigger on the page.
    const context = gsap.context(() => {
      gsap.to(scrollEl, {
        x: () => `-${overflowWidth()}px`,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "center center",
          end: () => `+=${overflowWidth()}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    return () => context.revert();
  }, []);

  return (
    <div className="max-width-wrapper overflow-wrapper">
      <div className="testimonies-section-wrapper" ref={wrapperRef}>
        <div className="horizontal-scroll-list" ref={scrollRef}>
          <div className="lesson-description" style={{ minWidth: "25rem", flexShrink: 0 }}>
            <div className="header">
              <h2>TESTIMONIALS</h2>
              <p className="description-text">{INTRO_TEXT}</p>
            </div>
            {/* TODO: this is still a placeholder — wire it to the Google review
                link the footer already uses. */}
            <CpiButton label="Leave a Review" onClick={() => window.alert("Test")} className="cpi-button dark" />
          </div>

          {TESTIMONIALS.map((testimony) => (
            <TestimonyCard key={testimony.id} testimony={testimony} />
          ))}

          <div className="callToAction">
            <h2>HAPPY WITH YOUR EXPERIENCE</h2>
            <CpiButton label="Leave a Review" onClick={() => window.alert("Test")} className="cpi-button dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

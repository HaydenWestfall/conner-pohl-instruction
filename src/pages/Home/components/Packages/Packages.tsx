import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import FieldingImage from "../../../../assets/images/fielding.webp";
import HittingImage1 from "../../../../assets/images/hitting1.webp";
import HittingImage3 from "../../../../assets/images/hitting3.webp";
import PitchingImage2 from "../../../../assets/images/pitching2.webp";
import PitchingImage3 from "../../../../assets/images/pitching3.webp";
import CpiLink from "../../../../components/CpiButton/CpiLink";
import { BOOKING_URL } from "../../../../config/links";
import "./Packages.scss";

interface Package {
  image: string;
  header: string;
  /** Shown collapsed; clicking the card swaps in the full `description`. */
  descriptionSnippet: string;
  description: string;
}

const INTRO_TEXT =
  "Explore our range of training packages, designed to elevate skills through expert coaching and personalized programs.";

// Static content: module scope so it is not rebuilt on every render. The image
// order intentionally differs from MobilePackages, which uses its own layout.
const PACKAGES: Package[] = [
  {
    image: HittingImage1,
    header: "1 ON 1 HITTING LESSON",
    descriptionSnippet:
      "Work one-on-one with an experienced instructor to refine your swing from the ground up. These sessions focus on proper . . .",
    description:
      "Work one-on-one with an experienced instructor to refine your swing from the ground up. These sessions focus on proper stance, mechanics, timing, and approach at the plate, using tailored drills and immediate feedback to improve contact, power, and confidence.",
  },
  {
    image: HittingImage3,
    header: "DUO HITTING LESSON",
    descriptionSnippet:
      "Train alongside a teammate or friend in a small-group setting while receiving professional hitting instruction . . .",
    description:
      "Train alongside a teammate or friend in a small-group setting while receiving professional hitting instruction. These sessions cover the same mechanics and drills as the 1-on-1 option but incorporate competitive exercises, shared feedback, and live reps to keep players engaged and learning from one another.",
  },
  {
    image: PitchingImage3,
    header: "1 ON 1 PITCHING LESSON",
    descriptionSnippet:
      "Get individualized attention to develop and fine-tune your pitching skills. Players work on mechanics, accuracy . . .",
    description:
      "Get individualized attention to develop and fine-tune your pitching skills. Players work on mechanics, accuracy, velocity, and mental approach while learning drills and strategies to become more effective and confident on the mound.",
  },
  {
    image: PitchingImage2,
    header: "DUO PITCHING LESSONS",
    descriptionSnippet:
      "Pair up with another player for an energetic, collaborative pitching session. Athletes receive expert coaching on . . .",
    description:
      "Pair up with another player for an energetic, collaborative pitching session. Athletes receive expert coaching on mechanics, pitch selection, and game strategy, while practicing side by side for added motivation, feedback, and live scenario work.",
  },
  {
    image: FieldingImage,
    header: "FIELDING LESSONS",
    descriptionSnippet:
      "Build a solid defensive foundation with focused instruction on glove work, footwork, throwing accuracy, and . . .",
    description:
      "Build a solid defensive foundation with focused instruction on glove work, footwork, throwing accuracy, and positioning. Players will run through game-like drills and situational practice designed to improve reaction time, confidence, and overall defensive performance on the field.",
  },
];

export const Packages = () => {
  const [expandedHeader, setExpandedHeader] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Pin the section and translate the row horizontally as the page scrolls.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const scrollEl = scrollRef.current;
    if (!wrapper || !scrollEl) return;

    // Travel distance depends on layout width, so it is read through functions
    // and `invalidateOnRefresh` re-evaluates them whenever ScrollTrigger
    // recalculates (including on resize). The previous version rebuilt the
    // whole tween on every resize event instead.
    const overflowWidth = () => scrollEl.scrollWidth - scrollEl.clientWidth;

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

    // `context.revert()` tears down only what this component created, unlike
    // the previous `ScrollTrigger.getAll().kill()`, which also killed triggers
    // belonging to any other section on the page.
    return () => context.revert();
  }, []);

  return (
    <div className="max-width-wrapper">
      <div className="packages-desktop-wrapper" ref={wrapperRef}>
        <div className="horizontal-scroll-list" ref={scrollRef}>
          <div className="lesson-description" style={{ minWidth: "25rem", flexShrink: 0 }}>
            <div className="header">
              <h2>WHAT WE OFFER</h2>
              <p className="description-text">{INTRO_TEXT}</p>
            </div>
            <CpiLink label="Schedule a Session" href={BOOKING_URL} className="cpi-button dark" />
          </div>

          {PACKAGES.map((pkg) => {
            const expanded = expandedHeader === pkg.header;
            return (
              <div
                className="images"
                key={pkg.header}
                style={{ position: "relative" }}
                onClick={() => setExpandedHeader(expanded ? null : pkg.header)}
              >
                <img src={pkg.image} alt={pkg.header.toLowerCase()} />
                <div className={`image-overlay${expanded ? " expanded" : ""}`}>
                  <div className="overlay-content">
                    <h3>{pkg.header}</h3>
                    <p>{expanded ? pkg.description : pkg.descriptionSnippet}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="callToAction">
            <h2>GET STARTED TODAY</h2>
            <CpiLink label="Schedule a Session" href={BOOKING_URL} className="cpi-button dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

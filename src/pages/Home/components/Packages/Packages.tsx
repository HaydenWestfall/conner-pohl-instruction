import { useEffect, useRef, useState } from "react";
import "./Packages.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CpiLink from "../../../../components/cpiButton/CpiLink";
import HittingImage1 from "../../../../assets/images/hitting1.webp";
import HittingImage3 from "../../../../assets/images/hitting3.webp";
import PitchingImage2 from "../../../../assets/images/pitching2.webp";
import PitchingImage3 from "../../../../assets/images/pitching3.webp";
import FieldingImage from "../../../../assets/images/fielding.webp";

gsap.registerPlugin(ScrollTrigger);

export const Packages = () => {
  const packageImages = [HittingImage1, HittingImage3, PitchingImage3, PitchingImage2, FieldingImage];
  const packageDescriptions = [
    "Explore our range of training packages, designed to elevate skills through expert coaching and personalized programs.",
    "Hitting is one of the most challenging skills in baseball and across many sports. At Pohl Performance Baseball, we approach it with focus, adaptability, and attention to each athlete’s unique needs. Every player who walks through our doors receives personalized instruction aimed at making the game feel simpler, more understandable, and more achievable. Our goal is to create an environment that’s both informative and encouraging, helping athletes gain the knowledge, tools, and confidence they need to succeed at the plate.",
    "Pitching mechanics are the foundation of both performance and longevity on the mound. Good mechanics not only improve velocity and command but also reduce the risk of injury, allowing pitchers to compete consistently and confidently. At Pohl Performance Baseball, we focus on breaking down each movement — from the first step to the follow-through — ensuring that every pitcher develops an efficient, repeatable delivery that maximizes their potential.",
    "Great defense wins games. Our fielding lessons build quick feet, sharp instincts, and reliable hands so you’re ready for every play. We focus on the fundamentals and the finer details that turn good fielders into game-changers.",
  ];

  // State for expanded overlays
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const handleOverlayClick = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  // Combine images and descriptions into a single horizontally scrolling list
  const items = [
    {
      type: "description",
      title: "WHAT WE OFFER",
      text: packageDescriptions[0],
      chips: ["Mechanics", "Plate Approach", "Execution"],
    },
    {
      type: "image",
      src: packageImages[0],
      alt: "Hitting lesson",
    },
    {
      type: "image",
      src: packageImages[1],
      alt: "Pitching lesson",
    },
    {
      type: "image",
      src: packageImages[2],
      alt: "Fielding lesson",
    },
    {
      type: "image",
      src: packageImages[3],
      alt: "Hitting lesson",
    },
    {
      type: "image",
      src: packageImages[4],
      alt: "Hitting lesson",
    },
    {
      type: "callToAction",
      title: "GET STARTED TODAY",
    },
  ];

  // Overlay content for each image
  const overlayData = [
    {
      header: "1 ON 1 HITTING LESSON",
      descriptionSnippet:
        "Work one-on-one with an experienced instructor to refine your swing from the ground up. These sessions focus on proper . . .",
      description:
        "Work one-on-one with an experienced instructor to refine your swing from the ground up. These sessions focus on proper stance, mechanics, timing, and approach at the plate, using tailored drills and immediate feedback to improve contact, power, and confidence.",
    },
    {
      header: "DUO HITTING LESSON",
      descriptionSnippet:
        "Train alongside a teammate or friend in a small-group setting while receiving professional hitting instruction . . .",
      description:
        "Train alongside a teammate or friend in a small-group setting while receiving professional hitting instruction. These sessions cover the same mechanics and drills as the 1-on-1 option but incorporate competitive exercises, shared feedback, and live reps to keep players engaged and learning from one another.",
    },
    {
      header: "1 ON 1 PITCHING LESSON",
      descriptionSnippet:
        "Get individualized attention to develop and fine-tune your pitching skills. Players work on mechanics, accuracy . . .",
      description:
        "Get individualized attention to develop and fine-tune your pitching skills. Players work on mechanics, accuracy, velocity, and mental approach while learning drills and strategies to become more effective and confident on the mound.",
    },
    {
      header: "DUO PITCHING LESSONS",
      descriptionSnippet:
        "Pair up with another player for an energetic, collaborative pitching session. Athletes receive expert coaching on . . .",
      description:
        "Pair up with another player for an energetic, collaborative pitching session. Athletes receive expert coaching on mechanics, pitch selection, and game strategy, while practicing side by side for added motivation, feedback, and live scenario work.",
    },
    {
      header: "FIELDING LESSONS",
      descriptionSnippet:
        "Build a solid defensive foundation with focused instruction on glove work, footwork, throwing accuracy, and . . .",
      description:
        "Build a solid defensive foundation with focused instruction on glove work, footwork, throwing accuracy, and positioning. Players will run through game-like drills and situational practice designed to improve reaction time, confidence, and overall defensive performance on the field.",
    },
  ];

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function setupScroll() {
      if (!wrapperRef.current || !scrollRef.current) return;
      const scrollEl = scrollRef.current;
      const totalWidth = scrollEl.scrollWidth - scrollEl.clientWidth;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
    }
    setupScroll();
    window.addEventListener("resize", setupScroll);
    return () => {
      window.removeEventListener("resize", setupScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-width-wrapper">
      <div className="packages-desktop-wrapper" ref={wrapperRef}>
        {/* <CpiTag index="02" label="PACKAGES" className="dark" /> */}
        <div className="horizontal-scroll-list" ref={scrollRef}>
          {items.map((item, idx) => {
            if (item.type === "description") {
              return (
                <div className="lesson-description" key={idx} style={{ minWidth: "25rem", flexShrink: 0 }}>
                  <div className="header">
                    <h2>{item.title}</h2>
                    <p className="description-text">{item.text}</p>
                  </div>
                  <CpiLink
                    label="Schedule a Session"
                    href={import.meta.env.VITE_BOOKING_URL}
                    className="cpi-button dark"
                  />
                </div>
              );
            } else if (item.type === "image") {
              // Map idx to overlayData (skip description block at idx 0)
              const overlayIdx = idx - 1;
              const overlay = overlayData[overlayIdx] || {};
              const expanded = expandedIdx === idx;
              return (
                <div
                  className="images"
                  key={idx}
                  style={{ position: "relative" }}
                  onClick={() => handleOverlayClick(idx)}
                >
                  <img src={item.src} alt={item.alt} />
                  <div className={`image-overlay${expanded ? " expanded" : ""}`}>
                    <div className="overlay-content">
                      <h3>{overlay.header}</h3>
                      {expanded ? <p>{overlay.description}</p> : <p>{overlay.descriptionSnippet}</p>}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="callToAction" key={idx}>
                  <h2>{item.title}</h2>
                  <CpiLink
                    label="Schedule a Session"
                    href={import.meta.env.VITE_BOOKING_URL}
                    className="cpi-button dark"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

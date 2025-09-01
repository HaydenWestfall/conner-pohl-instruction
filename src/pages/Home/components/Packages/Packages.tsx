import { useEffect, useRef } from "react";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import "./Packages.scss";
import HittingImage from "../../../../assets/images/hitting.png";
import PitchingImage from "../../../../assets/images/pitching.png";
import FiledingImage from "../../../../assets/images/stealing.png";
import CpiButton from "../../../../components/cpiButton/CpiButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Packages = () => {
  const packageImages = [HittingImage, PitchingImage, FiledingImage];
  const packageDescriptions = [
    "Explore our range of training packages, designed to elevate skills through expert coaching and personalized programs.",
    "Hitting is one of the most challenging skills in baseball and across many sports. At Pohl Performance Baseball, we approach it with focus, adaptability, and attention to each athlete’s unique needs. Every player who walks through our doors receives personalized instruction aimed at making the game feel simpler, more understandable, and more achievable. Our goal is to create an environment that’s both informative and encouraging, helping athletes gain the knowledge, tools, and confidence they need to succeed at the plate.",
    "Pitching mechanics are the foundation of both performance and longevity on the mound. Good mechanics not only improve velocity and command but also reduce the risk of injury, allowing pitchers to compete consistently and confidently. At Pohl Performance Baseball, we focus on breaking down each movement — from the first step to the follow-through — ensuring that every pitcher develops an efficient, repeatable delivery that maximizes their potential.",
    "Great defense wins games. Our fielding lessons build quick feet, sharp instincts, and reliable hands so you’re ready for every play. We focus on the fundamentals and the finer details that turn good fielders into game-changers.",
  ];

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
      src: packageImages[0],
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
      header: "SOLO SESSION",
      description:
        "Personalized, one-on-one coaching focused on refining skills and building confidence at your own pace.",
    },
    {
      header: "DOUBLE SESSION",
      description:
        "Work alongside a partner for engaging training that combines teamwork competition, and development.",
    },
    {
      header: "Fielding Lessons",
      description: "Focused pitching lessons to improve accuracy, speed, and control.",
    },
    {
      header: "Fielding Lessons",
      description: "Sharpen defensive skills with hands-on fielding drills and tips.",
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
    <div className="packages-desktop-wrapper" ref={wrapperRef}>
      <CpiTag index="02" label="PACKAGES" className="dark" />
      <div className="horizontal-scroll-list" ref={scrollRef}>
        {items.map((item, idx) => {
          if (item.type === "description") {
            return (
              <div className="lesson-description" key={idx} style={{ minWidth: "25rem", flexShrink: 0 }}>
                <div className="header">
                  <h2>{item.title}</h2>
                  <p className="description-text">{item.text}</p>
                </div>
                <CpiButton
                  label="Schedule a Session"
                  onClick={() => window.alert("Test")}
                  className="cpi-button dark"
                />
              </div>
            );
          } else if (item.type === "image") {
            // Map idx to overlayData (skip description block at idx 0)
            const overlayIdx = idx - 1;
            const overlay = overlayData[overlayIdx] || {};
            return (
              <div className="images" key={idx} style={{ position: "relative" }}>
                <img src={item.src} alt={item.alt} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{overlay.header}</h3>
                    <p>{overlay.description}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="callToAction" key={idx}>
                <h2>{item.title}</h2>
                <CpiButton
                  label="Schedule a Session"
                  onClick={() => window.alert("Test")}
                  className="cpi-button dark"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

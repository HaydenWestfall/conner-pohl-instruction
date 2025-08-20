import { useEffect, useRef, useState } from "react";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import "./Packages2.scss";
import HittingImage from "../../../../assets/images/hitting.png";
import PitchingImage from "../../../../assets/images/pitching.png";
import FiledingImage from "../../../../assets/images/stealing.png";
import CpiButton from "../../../../components/cpiButton/CpiButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Packages2 = () => {
  const packageImages = [HittingImage, PitchingImage, FiledingImage];
  const packageDescriptions = [
    "Hitting is one of the most challenging skills in baseball and across many sports. At Pohl Performance Baseball, we approach it with focus, adaptability, and attention to each athlete’s unique needs. Every player who walks through our doors receives personalized instruction aimed at making the game feel simpler, more understandable, and more achievable. Our goal is to create an environment that’s both informative and encouraging, helping athletes gain the knowledge, tools, and confidence they need to succeed at the plate.",
    "Pitching mechanics are the foundation of both performance and longevity on the mound. Good mechanics not only improve velocity and command but also reduce the risk of injury, allowing pitchers to compete consistently and confidently. At Pohl Performance Baseball, we focus on breaking down each movement — from the first step to the follow-through — ensuring that every pitcher develops an efficient, repeatable delivery that maximizes their potential.",
    "Great defense wins games. Our fielding lessons build quick feet, sharp instincts, and reliable hands so you’re ready for every play. We focus on the fundamentals and the finer details that turn good fielders into game-changers.",
  ];

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current || !imagesRef.current) return;

    const images = imagesRef.current;
    const numImages = packageImages.length;
    const imageWidth = images.scrollWidth / numImages;

    // Horizontal scroll setup
    gsap.to(images, {
      x: () => `-${images.scrollWidth - imageWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${images.scrollWidth - imageWidth}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Calculate which image is in view
          const progress = self.progress;
          const index = Math.round(progress * (numImages - 1));
          if (index !== activeIndex) {
            // Fade out old description
            if (descRef.current) {
              gsap.to(descRef.current, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                  setActiveIndex(index);
                  gsap.to(descRef.current, { opacity: 1, duration: 0.3 });
                },
              });
            } else {
              setActiveIndex(index);
            }
          }
        },
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [packageImages.length, activeIndex]);

  return (
    <div className="packages-wrapper" ref={wrapperRef}>
      <CpiTag index="02" label="WHAT WE OFFER" className="dark" />
      <div className="lesson-wrapper">
        <div className="lesson-description">
          <div className="header">
            <h2>
              {activeIndex === 0 ? "HITTING LESSONS" : activeIndex === 1 ? "PITCHING LESSONS" : "FIELDING LESSONS"}
            </h2>
            <p ref={descRef} className="description-text">
              {packageDescriptions[activeIndex]}
            </p>
            <div className="chips">
              {activeIndex === 0 && (
                <>
                  <div className="chip">Mechanics</div>
                  <div className="chip">Plate Approach</div>
                  <div className="chip">Execution</div>
                </>
              )}
              {activeIndex === 1 && (
                <>
                  <div className="chip">Delivery</div>
                  <div className="chip">Velocity</div>
                  <div className="chip">Command</div>
                </>
              )}
              {activeIndex === 2 && (
                <>
                  <div className="chip">Footwork</div>
                  <div className="chip">Instincts</div>
                  <div className="chip">Reliability</div>
                </>
              )}
            </div>
          </div>
          <CpiButton label="Schedule a Session" onClick={() => window.alert("Test")} className="cpi-button dark" />
        </div>
        <div className="images" ref={imagesRef}>
          {packageImages.map((image, index) => (
            <img key={index} src={image} alt={`Player at bat ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

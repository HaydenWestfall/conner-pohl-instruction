import React, { useRef } from "react";
import { gsap, Power2 } from "gsap";

type ParallaxButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const ParallaxButton: React.FC<ParallaxButtonProps> = ({ children, className = "", ...props }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, { scale: 1.15, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3 });
    gsap.to(contentRef.current, { x: 0, y: 0, duration: 0.3 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const parent = buttonRef.current;
    const target = contentRef.current;
    const movement = 5;
    const boundingRect = parent!.getBoundingClientRect();
    const relX = e.pageX - boundingRect.left;
    const relY = e.pageY - boundingRect.top - window.scrollY;

    gsap.to(target, {
      x: ((relX - boundingRect.width / 3) / boundingRect.width) * movement,
      y: ((relY - boundingRect.height / 3) / boundingRect.height) * movement,
      ease: Power2.easeOut,
      duration: 0.25,
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`circle-button ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...props}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div ref={contentRef} style={{ willChange: "transform", display: "flex", gap: "0.25rem" }}>
        {children}
      </div>
    </button>
  );
};
export default ParallaxButton;

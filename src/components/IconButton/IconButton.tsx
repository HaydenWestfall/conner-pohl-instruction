import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import "./IconButton.scss";

type MagneticProps = {
  children: React.ReactNode;
  /** Divisor on the cursor offset — larger means less travel. */
  distance?: number;
  /** Spring duration in seconds. */
  duration?: number;
};

/**
 * Pulls its child toward the cursor while hovered and springs back on leave.
 *
 * `gsap.quickTo` is created once per mount rather than calling `gsap.to` on
 * every mousemove, which keeps a high-frequency pointer stream off the tween
 * allocation path.
 */
const Magnetic: React.FC<MagneticProps> = ({ children, distance = 3.25, duration = 1 }) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = magnetic.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, "x", { duration, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (event: MouseEvent) => {
      const { height, width, left, top } = element.getBoundingClientRect();
      xTo((event.clientX - (left + width / 2)) / distance);
      yTo((event.clientY - (top + height / 2)) / distance);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [distance, duration]);

  return <div ref={magnetic}>{children}</div>;
};

type IconButtonProps = {
  children: React.ReactNode;
  bgColor: string;
  overlayColor: string;
  onClick?: () => void;
  disableMotion?: boolean;
};

/** Matches a device with no fine pointer, where the magnetic hover effect is dead weight. */
const detectTouchDevice = () =>
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  ((navigator as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints ?? 0) > 0;

export const IconButton: React.FC<IconButtonProps> = ({ children, bgColor, overlayColor, onClick, disableMotion }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(detectTouchDevice());
  }, []);

  const button = (
    <button className="icon-btn" onClick={onClick}>
      {children}
    </button>
  );

  if (isTouchDevice || disableMotion) {
    return <div className="icon-btn-wrapper">{button}</div>;
  }

  return (
    <Magnetic>
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="icon-btn-wrapper"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        data-cursor="-inverse"
        data-cursor-stick=""
      >
        <motion.div
          initial={{ y: "-100%" }}
          animate={isHovered ? { y: 0 } : { y: "-100%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.25, delay: 0.15, ease: "easeInOut" }}
          style={{ backgroundColor: overlayColor }}
          className="icon-btn-overlay"
        />
        {/* A second, gentler magnet on the inner content produces the parallax
            lag between the wrapper and the icon. */}
        <Magnetic distance={2} duration={1.5}>
          {button}
        </Magnetic>
      </motion.div>
    </Magnetic>
  );
};

import React, { useState, useEffect, useRef } from "react";
import type { ReactElement } from "react";
import "./IconButton.scss";
import { motion } from "framer-motion";
import gsap from "gsap";

type MagneticProps = {
  children: React.ReactNode;
  distance?: number;
};

const Magnetic: React.FC<MagneticProps> = ({ children, distance = 3.25 }) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!magnetic.current) return;
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) / distance;
      const y = (clientY - (top + height / 2)) / distance;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magnetic.current.addEventListener("mousemove", handleMouseMove);
    magnetic.current.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      magnetic.current?.removeEventListener("mousemove", handleMouseMove);
      magnetic.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [distance]);

  return <div ref={magnetic}>{children}</div>;
};

type TextMagnetProps = {
  children: React.ReactNode;
  distance?: number;
};

const TextMagnet: React.FC<TextMagnetProps> = ({ children, distance = 2 }) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!magnetic.current) return;
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1.5, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1.5, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) / distance;
      const y = (clientY - (top + height / 2)) / distance;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magnetic.current.addEventListener("mousemove", handleMouseMove);
    magnetic.current.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      magnetic.current?.removeEventListener("mousemove", handleMouseMove);
      magnetic.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [distance]);

  return <div ref={magnetic}>{children}</div>;
};

type IconButtonProps = {
  children: React.ReactNode;
  bgColor: string;
  overlayColor: string;
  onClick?: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({ children, bgColor, overlayColor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Magnetic>
      <motion.div
        style={{
          backgroundColor: `${bgColor}`,
        }}
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
          style={{
            backgroundColor: `${overlayColor}`,
          }}
          className="icon-btn-overlay"
        />
        <TextMagnet>
          <button onClick={onClick}>{children}</button>
        </TextMagnet>
      </motion.div>
    </Magnetic>
  );
};

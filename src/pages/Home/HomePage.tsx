import { useEffect, useState } from "react";
import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { MobilePackages } from "./components/MobilePackages/MobilePackages";
import { Packages } from "./components/Packages/Packages";
import { useTitle } from "../../hooks/useTitle";
export const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useTitle("Professional Baseball Lessons & Training in Troy, OH | Expert Hitting, Pitching & Fielding Instruction");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // <!-- 1200 x 788 -->

  return (
    <main>
      <div className="route-wrapper">
        <Hero />
        <About />
        {isMobile ? <MobilePackages /> : <Packages />}
        <Testimonials />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

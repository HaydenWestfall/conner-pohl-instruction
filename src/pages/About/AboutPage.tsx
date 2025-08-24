import { useEffect, useState } from "react";
import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { AboutHeader } from "./components/AboutHeader/AboutHeader";
import { Mission } from "./components/Mission/Mission";
import { Trainers } from "./components/Trainers/Trainers";

export const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  useEffect(() => {
    const handleResize = () => {
      console.log("tracking");
      setIsMobile(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <div className="route-wrapper">
        <AboutHeader />
        <Mission />
        <Trainers />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

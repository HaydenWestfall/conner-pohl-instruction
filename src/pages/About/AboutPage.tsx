import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { AboutHeader } from "./components/AboutHeader/AboutHeader";
import { Mission } from "./components/Mission/Mission";
import { Trainers } from "./components/Trainers/Trainers";
import { Testimonials } from "../Home/components/Testimonials/Testimonials";

export const AboutPage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main>
      <div className="route-wrapper">
        <AboutHeader />
        <Mission />
        <Trainers />
        <Testimonials />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

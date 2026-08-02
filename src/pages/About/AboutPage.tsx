import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { Testimonials } from "../Home/components/Testimonials/Testimonials";
import { AboutHeader } from "./components/AboutHeader/AboutHeader";
import { Mission } from "./components/Mission/Mission";
import { Trainers } from "./components/Trainers/Trainers";

export const AboutPage = () => (
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

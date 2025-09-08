import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { AboutPage } from "../pages/About/AboutPage";
import { TestimonialsPage } from "../pages/Testimonials/TestimonialsPage";
import { FAQPage } from "../pages/FAQ/FAQPage";
import { ContactPage } from "../pages/Contact/ContactPage";
import { LegalPage } from "../pages/Legal/LegalPage";
import { BookPage } from "../pages/Book/BookPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonies" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/cancellationPolicy" element={<LegalPage />} />
        <Route path="/privacyPolicy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </>
  );
};

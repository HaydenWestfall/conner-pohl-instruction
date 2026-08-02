import { Route, Routes } from "react-router-dom";

import { AboutPage } from "../pages/About/AboutPage";
import { BookPage } from "../pages/Book/BookPage";
import { ContactPage } from "../pages/Contact/ContactPage";
import { FAQPage } from "../pages/FAQ/FAQPage";
import { HomePage } from "../pages/Home/HomePage";
import { LegalPage } from "../pages/Legal/LegalPage";
import { NotFoundPage } from "../pages/NotFound/NotFoundPage";
import { TestimonialsPage } from "../pages/Testimonials/TestimonialsPage";

// Paths must stay in sync with src/seo/routes.ts, which drives the per-route
// metadata, the prerendered HTML, and sitemap.xml.
export const AllRoutes = () => (
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
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

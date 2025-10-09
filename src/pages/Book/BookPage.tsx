import { Footer } from "../../shared/Footer/Footer";
import { Booking } from "./components/Booking";
import { useTitle } from "../../hooks/useTitle";

export const BookPage = () => {
  useTitle("Book Baseball Lessons Online | Schedule Your CPI Training Session Today");
  return (
    <main>
      <Booking />
      <Footer />
    </main>
  );
};

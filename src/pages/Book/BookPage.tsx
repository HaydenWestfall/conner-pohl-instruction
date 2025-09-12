import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { Booking } from "./components/Booking";

export const BookPage = () => {
  return (
    <main>
      <Booking />

      {/* <div className="route-wrapper">
        <ActionHeader children={<h1>YOUR JOURNEY BEGINS TODAY</h1>} />
        <Booking />
      </div>
      <Footer /> */}
    </main>
  );
};

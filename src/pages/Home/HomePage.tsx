import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";

export const HomePage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main>
      <div className="route-wrapper">
        <Hero />
        <About />
      </div>
    </main>
  );
};

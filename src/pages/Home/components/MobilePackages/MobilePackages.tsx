import { useState, useRef, useEffect } from "react";
import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import ArrowIcon from "../../../../assets/icons/arrow.svg?react";
import "./MobilePackages.scss";
import PitchingImage from "../../../../assets/images/pitching.png";
import FiledingImage from "../../../../assets/images/stealing.png";
import CpiButton from "../../../../components/cpiButton/CpiButton";

export const MobilePackages = () => {
  const packages = [
    {
      header: "1 ON 1 HITTING LESSON",
      description:
        "Personalized, one-on-one coaching focused on refining skills and building confidence at your own pace.",
      image: FiledingImage,
    },
    {
      header: "DUO HITTING LESSON",
      description: "Work alongside a partner for engaging training that combines teamwork competition.",
      image: PitchingImage,
    },
    {
      header: "1 ON 1 PITCHING LESSON",
      description: "Focused pitching lessons to improve accuracy, speed, and control.",
      image: FiledingImage,
    },
    {
      header: "DUO PITCHING LESSONS",
      description: "Sharpen defensive skills with hands-on fielding drills and tips.",
      image: PitchingImage,
    },
    {
      header: "FIELDING LESSONS",
      description: "Sharpen defensive skills with hands-on fielding drills and tips.",
      image: FiledingImage,
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children[currentIdx]) {
        const child = children[currentIdx] as HTMLElement;
        const scrollList = scrollRef.current;
        const childLeft = child.offsetLeft;
        scrollList.scrollTo({
          left: childLeft - 16,
          behavior: "smooth",
        });
      }
    }
  }, [currentIdx]);

  const handlePrev = () => {
    if (currentIdx === 0) return;
    setCurrentIdx((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (currentIdx === packages.length - 1) return;
    setCurrentIdx((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="packages-mobile-wrapper">
      <CpiTag index="02" label="PACKAGES" className="dark tag" />

      <div className="header">
        <h2>WHAT WE OFFER</h2>
        <p className="description-text">
          Explore our range of training packages, designed to elevate skills through expert coaching and personalized
          programs.
        </p>
      </div>

      <div className="horizontal-scroll-list" ref={scrollRef}>
        {packages.map((pkg, idx) => (
          <div className="package-card" key={idx}>
            <img src={pkg.image} alt={pkg.header} />
            <div className="image-overlay">
              <h2>{pkg.header}</h2>
              <p>{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="package-actions-wrapper">
        <div className="package-actions">
          <button onClick={handlePrev} aria-label="Previous Package" className={currentIdx === 0 ? "inactive" : ""}>
            <ArrowIcon id="prev-package" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Package"
            className={currentIdx === packages.length - 1 ? "inactive" : ""}
          >
            <ArrowIcon id="next-package" />
          </button>
        </div>
        <CpiButton label="Book Now" onClick={() => window.alert("Test")} className="cpi-button dark" />
      </div>
    </div>
  );
};

import HeroImage from "../../../../assets/images/hero_header.png";
import Testimony1 from "../../../../assets/images/testimony_1.png";
import Testimony2 from "../../../../assets/images/testimony_2.png";
import Testimony3 from "../../../../assets/images/testimony_3.png";
import "./About.scss";
import ScrollIcon from "../../../../assets/icons/mouse.svg?react";
import CpiButton from "../../../../cpiButton/CpiButton";
import { CpiTag } from "../../../../cpiTag/CpiTag";

export const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <CpiTag index="01" label="ABOUT" />
      </div>
    </>
  );
};

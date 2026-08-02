import type { PropsWithChildren } from "react";

import ActionHeroImage from "../../assets/images/contact_header.webp";
import "./ActionHeader.scss";

/** Short banner used by the pages that have no full-height hero of their own. */
export const ActionHeader: React.FC<PropsWithChildren> = ({ children }) => (
  <div id="action-header" className="hero-wrapper short">
    <img className="route-header-img" src={ActionHeroImage} alt="Baseball training session at Conner Pohl Instruction" />
    <div className="hero-header">{children}</div>
  </div>
);

/**
 * Customer testimonials, rendered by the home-page carousel and both
 * testimonials sections.
 *
 * Note: several entries are placeholder copy rather than real reviews. That is
 * why `src/seo/schema.ts` deliberately emits no Review / AggregateRating
 * structured data — marking up fabricated reviews risks a Google manual action.
 */

import playerImage1 from "../assets/images/testimony_1.webp";
import playerImage2 from "../assets/images/testimony_2.webp";
import playerImage3 from "../assets/images/testimony_3.webp";
import playerImage4 from "../assets/images/testimony_4.webp";

export interface Testimony {
  id: number;
  /** Short headline used as the carousel's selectable label. */
  tagline: string;
  name: string;
  initials: string;
  playerImage: string;
  review: string;
  /** Sub-label, e.g. "Player for Dayton Classics". */
  context: string;
  team: string;
}

export const TESTIMONIALS: Testimony[] = [
  {
    id: 0,
    tagline: "Tremendous Improvement",
    name: "Scott Jones",
    initials: "RG",
    playerImage: playerImage2,
    review:
      "When I met Conner, I knew right away he had a gift for teaching hitting. After hiring him at Edison State CC, our team batting average rose 40 points. He worked just as hard with our least talented hitters as with our best — patient, adaptable, and truly invested in helping every player get better.",
    context: "Red Sox Pitcher |   High School Coach",
    team: "",
  },
  {
    id: 1,
    tagline: "Mechanics Matter",
    name: "Brody Hoke",
    initials: "BH",
    playerImage: playerImage1,
    review:
      "I have now trained with Conner for around 4 years now. He’s taught me tons about my swing and helped me understand it throughout the years in ways I never thought were possible. As my body has grown and I’ve gotten stronger he’s helped me adapt. I’m thankful that I can always text or call him about my swing when it feels terrible and he’ll let me know what’s up right away. Glad to have a hitting coach like him!",
    context: "Player for Dayton Classics",
    team: "Dayton Classics",
  },
  {
    id: 2,
    tagline: "Built Confidence",
    name: "Lisa Mohlman",
    initials: "LM",
    playerImage: playerImage3,
    review:
      "Conner completely changed the way my son approaches hitting. He breaks things down so kids actually understand, and the confidence boost has been incredible. You can tell he truly cares about every player’s success.",
    context: "6th Grader | Looking to improve swing",
    team: "Lisa M., Parent of 15U Player",
  },
  {
    id: 3,
    tagline: "Noticably Better",
    name: "Jake Gibson",
    initials: "JG",
    playerImage: playerImage4,
    review:
      "Conner brings an energy and attention to detail that’s hard to find. He connects with players instantly and knows how to get results. Our hitters became more disciplined and consistent after just a few sessions.",
    context: "6th Grader | Looking to improve swing",
    team: "Centerville Stars",
  },
  {
    id: 4,
    tagline: "Noticably Better",
    name: "Ryan Dorsey",
    initials: "RD",
    playerImage: playerImage2,
    review:
      "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
    context: "6th Grader | Looking to improve swing",
    team: "Oakwood Owls",
  },
];

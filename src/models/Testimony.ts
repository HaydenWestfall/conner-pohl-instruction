import Testimony1 from "../assets/images/testimony_1.png";
import Testimony2 from "../assets/images/testimony_2.png";
import Testimony3 from "../assets/images/testimony_3.png";
import playerImage1 from "../assets/images/stealing.png";
import playerImage2 from "../assets/images/hitting.png";
import playerImage3 from "../assets/images/pitching.png";

export interface Testimony {
  id: number;
  tagline: string;
  name: string;
  initials: string;
  image: string;
  playerImage: string;
  review: string;
  context: string;
  team: string;
}

export const TESTIMONIALS: Testimony[] = [
  {
    id: 0,
    tagline: "Mechanics Matter",
    name: "Brody Hoke",
    initials: "BH",
    image: Testimony1,
    playerImage: playerImage1,
    review:
      "I have now trained with Conner for around 4 years now. He’s taught me tons about my swing and helped me understand it throughout the years in ways I never thought were possible. As my body has grown and I’ve gotten stronger he’s helped me adapt. I’m thankful that I can always text or call him about my swing when it feels terrible and he’ll let me know what’s up right away. Glad to have a hitting coach like him!",
    context: "Dont have this yet",
    team: "Dayton Classics",
  },
  {
    id: 1,
    tagline: "Tremendous Improvement",
    name: "Rob Gronkowski",
    initials: "RG",
    image: Testimony2,
    playerImage: playerImage2,
    review:
      "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
    context: "6th Grader | Looking to improve swing",
    team: "Springfield Sluggers",
  },
  {
    id: 2,
    tagline: "Built Confidence",
    name: "Drake Maye",
    initials: "DM",
    image: Testimony3,
    playerImage: playerImage3,
    review:
      "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
    context: "6th Grader | Looking to improve swing",
    team: "Springfield Sluggers",
  },
  {
    id: 3,
    tagline: "Noticably Better",
    name: "Antonio Gibson",
    initials: "AG",
    image: Testimony1,
    playerImage: playerImage1,
    review:
      "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
    context: "6th Grader | Looking to improve swing",
    team: "Centerville Stars",
  },
  {
    id: 4,
    tagline: "Noticably Better",
    name: "Stegon Diggs",
    initials: "SD",
    image: Testimony2,
    playerImage: playerImage2,
    review:
      "“We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more importantly—he’s excited to go to practice again. Highly recommend!”",
    context: "6th Grader | Looking to improve swing",
    team: "Oakwood Owls",
  },
];

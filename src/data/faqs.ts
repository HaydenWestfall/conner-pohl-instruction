/**
 * FAQ content, extracted so it can drive both the rendered accordion and the
 * FAQPage structured data. The accordion only mounts an answer once it is
 * opened, so the JSON-LD is what actually exposes these answers to crawlers —
 * the two must stay in sync, which is why they read from one array.
 */

export interface Faq {
  question: string;
  answer: string[];
  hasMap?: boolean;
}

export const FAQS: Faq[] = [
  {
    question: "What is CPI?",
    answer: [
      "CPI stands for Conner Pohl Instruction, founded by Conner Pohl, a lifelong ballplayer with a passion for teaching the game. CPI was founded simply out of a love for the game and a desire to give back. The goal is to pass on the knowledge and experiences that Conner and the CPI staff have gained over the years, helping athletes grow both on and off the field.",
    ],
  },
  {
    question: "Where are the baseball lessons held?",
    answer: [
      "Lessons are located at 2326 OH-718, Troy, OH 45373. The barn itself does not have its own mailing address, as it is part of the Splash and Smash Swim Club parcel.",
    ],
    hasMap: true,
  },
  {
    question: "What should my child bring to their first lesson?",
    answer: [
      "Any ballplayer should bring the following equipment: helmet, bat, batting gloves (if your player uses them), and a ball glove (especially for pitching/fielding lessons)",
    ],
  },
  {
    question: "Are there age requirements for CPI Baseball training?",
    answer: [
      "No — there are no strict age requirements. Every player develops on their own timeline, and we welcome any aspiring ballplayer to come check us out.",
      "That said, we also believe in being honest with families. If we feel a player isn’t quite ready for lessons, we’ll have an open conversation about it and provide guidance on next steps.",
    ],
  },
  {
    question: "How do I contact CPI for more information?",
    answer: [
      "If you have any questions or inquiries, please visit the “Contact” tab on our website. You can also reach us directly by email at cpohl@connerpohlinstruction.com",
    ],
  },
  {
    question: "Can I cancel or reschedule a lesson?",
    answer: [
      "Yes, you can cancel a lesson, but it must be done at least 24 hours in advance. This allows us to fill the spot for another player.",
      "If you cancel more than 24 hours before your scheduled lesson, you will be refunded the full amount.",
      "If you cancel within 24 hours of the lesson, you will not be refunded, unless there is a medical emergency or a subjective decision is made by CPI.",
      "Please note: there are no reschedules. If you need a different time, you’ll need to book a new lesson through our online calendar.",
    ],
  },
];

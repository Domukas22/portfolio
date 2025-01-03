//
//
//

"use client";

import Project_INTROS from "@/projects/intros";
import { HeroSection_CONTENT } from "@/components/SECTIONS/heros/HeroSection_CONTENT";
import { ProjectSection_TYPE } from "@/types";
import MultiPage_CONTENT from "@/app/projects/_components/MultiPage_CONTENT";
import { TitleParagraphImageSection_CONTENT } from "@/components/SECTIONS/TitleParagraphImageSection_CONTENT/TitleParagraphImageSection_CONTENT";

const Intro = Project_INTROS["localmore"];
const Sections: ProjectSection_TYPE[] = [
  {
    slug: "introduction",
    name: "Introduction",
    content: (
      <HeroSection_CONTENT title="Seems like a giant undertaking. How do we begin?" />
    ),
  },
  {
    slug: "2-aspects",
    name: "The 2 aspects",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The 2 core aspects"
        parapgraphs={[
          "Localmore can be split into 2 parts: <u>exploration and connection</u>",
          "The exploration aspect concerns itself with physical locations of a place. This may include sports fields, businesses, playgrounds, chill spots, tourist attractions etc.",
          "The connection aspect is all about people. This would include creating accounts, posts, events or interest groups.",
        ]}
        img_PATH="/projects/localmore/how-it-works/implementation/2-aspects.png"
      />
    ),
  },
  {
    slug: "starting-point",
    name: "Starting point",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Starting point"
        parapgraphs={[
          "In order to attract users, we need content. So how about we start with content that is unlikely to be changed, and that will not be uploaded by the users anyways?",
          "We start with very simple, static things, such as playgrounds, sports fields and chill spots. While this may not sound that exciting, the initial 300 items would serve as a starting point.",
        ]}
        img_PATH="/projects/localmore/how-it-works/implementation/exploration.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "the-transition",
    name: "The transition",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The transition"
        parapgraphs={[
          "From there, we could strategically expand to other areas, building on top of the already existing content.",
          "As soon as we collect enough content for the average user to explore, the averaeg user count will start growing.",
          "As the user count grows, so do our opportunities to create new features for the connection aspect.",
        ]}
        img_PATH="/projects/localmore/how-it-works/implementation/transition.png"
        sticky_TEXT
      />
    ),
  },
];

export default function SwimActive_PROJECTS() {
  return (
    <MultiPage_CONTENT
      Intro={Intro}
      Sections={Sections}
      currentPage_SLUG="implementation"
    />
  );
}

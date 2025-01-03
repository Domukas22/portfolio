//
//
//

"use client";

import Project_INTROS from "@/projects/intros";
import { HeroSection_CONTENT } from "@/components/SECTIONS/heros/HeroSection_CONTENT";
import { ProjectSection_TYPE } from "@/types";
import MultiPage_CONTENT from "@/app/projects/_components/MultiPage_CONTENT";
import { TitleParagraphImageSection_CONTENT } from "@/components/SECTIONS/TitleParagraphImageSection_CONTENT/TitleParagraphImageSection_CONTENT";
import { NextPageSection_CONTENT } from "@/components/SECTIONS/NextPageSection_CONTENT/NextPageSection_CONTENT";

const Intro = Project_INTROS["localmore"];
const Sections: ProjectSection_TYPE[] = [
  {
    slug: "introduction",
    name: "Introduction",
    content: (
      <HeroSection_CONTENT
        title="What's the problem Localmore is trying to solve?"
        headerImg_COLOR={Intro.headerImg_COLOR}
      />
    ),
  },
  {
    slug: "spaghetti",
    name: "Spaghetti",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Local information is spaghetti"
        parapgraphs={[
          "Finding something in your local area requires visiting various different platforms or having to click through multiple Google search results. The information is tangled up and difficult to navigate quickly.",
        ]}
        img_PATH="/projects/localmore/how-it-works/the-problem/spaghetti.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "globe",
    name: "Globe",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Most companies target the globe"
        parapgraphs={[
          "But there is a drawback. The details get lost. There is only so much information you can gather by trying to describe thousands of different places simultaneoussly. ",
          "Niche platforms have their advantages, but they usually come at a cost of distraction and uncertainty for someone trying to navigate their daily, urban life.",
        ]}
        img_PATH="/projects/localmore/how-it-works/the-problem/globe.png"
      />
    ),
  },
  {
    slug: "contact",
    name: "Contact",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="A single point of contact"
        parapgraphs={[
          "By reducing the steps required to navigate urban living, the resulting clarity gives rise to endless possibilities. Implementing such possibilities is difficult for companies providing services worldwide.",
          "There are unique advantages to being hyper-focused.",
        ]}
        img_PATH="/projects/localmore/how-it-works/the-problem/contact.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "experience",
    name: "Experience",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="A complete local experience"
        parapgraphs={[
          "Localmore provides a centralised platform for individual places, aiming to connect the various aspects of urban living. It simplifies exploration, fosters real-world connections, and strengthens the local community.",
        ]}
        img_PATH="/projects/localmore/how-it-works/the-problem/experience.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "experience",
    name: "Experience",
    content: (
      <NextPageSection_CONTENT
        text="How do we implement this idea?"
        href="/projects/localmore/how-it-works/implementation"
      />
    ),
  },
];

export default function SwimActive_PROJECTS() {
  return (
    <MultiPage_CONTENT
      Intro={Intro}
      Sections={Sections}
      currentPage_SLUG="the-problem"
    />
  );
}

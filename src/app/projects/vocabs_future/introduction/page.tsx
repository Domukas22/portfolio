//
//
//

"use client";

import Project_INTROS from "@/projects/intros";

import { HeroSection_CONTENT } from "@/components/SECTIONS/heros/HeroSection_CONTENT";
import { ProjectSection_TYPE } from "@/types";
import MultiPage_CONTENT from "../../_components/MultiPage_CONTENT";

const Intro = Project_INTROS["vocabs"];
const Sections: ProjectSection_TYPE[] = [
  {
    slug: "introduction",
    name: "Introduction",
    content: (
      <HeroSection_CONTENT
        key={Intro.name}
        title={Intro.name}
        subtitle={Intro.subtitle}
        publicImg_PATH={Intro.headerImg_PATH}
        headerImg_COLOR={Intro.headerImg_COLOR}
        tags={Intro.tags}
      />
    ),
  },
];

export default function SwimActive_PROJECTS() {
  return (
    <MultiPage_CONTENT
      Intro={Intro}
      Sections={Sections}
      currentPage_SLUG="introduction"
    />
  );
}

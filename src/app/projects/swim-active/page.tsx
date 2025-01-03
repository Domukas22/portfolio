//
//
//

"use client";

import Project_INTROS from "@/projects/intros";
import SiglePage_CONTENT from "../_components/SinglePage_CONTENT";
import { HeroSection_CONTENT } from "@/components/SECTIONS/heros/HeroSection_CONTENT";
import { TextOnlySection_CONTENT } from "@/components/SECTIONS/TextOnlySection_CONTENT/TextOnlySection_CONTENT";
import { UnevenRowImageGridSection_CONTENT } from "@/components/SECTIONS/UnevenRowImageGrid_SECTION/UnevenRowImageGrid_SECTION";
import { ProjectSection_TYPE } from "@/types";

const Intro = Project_INTROS["swim-active"];
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
  {
    slug: "about-the-project",
    name: "About the project",
    content: (
      <TextOnlySection_CONTENT
        texts_ARR={[
          {
            type: "h3",
            text: "On weekends, I give swimming lessons both in private and in a swimming club called SwimActive in Eppelheim, Heidelberg.",
            style: { maxWidth: "80rem" },
          },
          {
            type: "h3",
            text: "The club owner was happy to let me re-design the side, as well as take some images and videos. The project will be released very soon.",
            style: { maxWidth: "80rem", marginTop: "2rem" },
          },
          {
            type: "h3",
            text: "Here is a little sneak peak:",
            style: { maxWidth: "80rem", marginTop: "2rem" },
          },
        ]}
      />
    ),
  },
  {
    slug: "project-preview",
    name: "Project preview",
    content: (
      <UnevenRowImageGridSection_CONTENT
        firstWideImg_PATH="/projects/swim-active/sneak-peak/7.png"
        leftImages_PATHS={[
          "/projects/swim-active/sneak-peak/4.jpg",
          "/projects/swim-active/sneak-peak/5.jpg",
          "/projects/swim-active/sneak-peak/1.jpg",
        ]}
        rightImages_PATHS={[
          "/projects/swim-active/sneak-peak/6.jpg",
          "/projects/swim-active/sneak-peak/2.jpg",
          "/projects/swim-active/sneak-peak/3.jpg",
        ]}
      />
    ),
  },
];

export default function SwimActive_PROJECTS() {
  return <SiglePage_CONTENT {...{ Sections, Intro }} />;
}

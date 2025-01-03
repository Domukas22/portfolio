//
//
//

"use client";

import Project_INTROS from "@/projects/intros";
import SiglePage_CONTENT from "../_components/SinglePage_CONTENT";
import { HeroSection_CONTENT } from "@/components/SECTIONS/heros/HeroSection_CONTENT";
import { ProjectSection_TYPE } from "@/types";
import { TitleParagraphImageSection_CONTENT } from "@/components/SECTIONS/TitleParagraphImageSection_CONTENT/TitleParagraphImageSection_CONTENT";
import { MultiPointSection_CONTENT } from "@/components/SECTIONS/MultiPointSection_CONTENT/MultiPointSection_CONTENT";
import { LogoSwiperSection_CONTENT } from "@/components/SECTIONS/heros/LogoSwiperSection_CONTENT";
import { ExternalLinkGridSection_CONTENT } from "@/components/SECTIONS/ExternalLinkGridSection_CONTENT/ExternalLinkGridSection_CONTENT";
import { UnevenRowImageGridSection_CONTENT } from "@/components/SECTIONS/UnevenRowImageGrid_SECTION/UnevenRowImageGrid_SECTION";

const imgWrap_STYLES: React.CSSProperties = {
  padding: "6rem 1.6rem",
};
const img_STYLES: React.CSSProperties = {
  maxHeight: "40rem",
  height: "100%",
};

const Intro = Project_INTROS["sanfte-metzger"];
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
    slug: "links",
    name: "Links",
    content: (
      <ExternalLinkGridSection_CONTENT
        title="Links:"
        links={[
          {
            btnText: "The finished project PDF",
            href: "/projects/sanfte-metzger/finished-project.pdf",
          },
          {
            btnText: "View the assigment PDF",
            href: "/projects/sanfte-metzger/task.pdf",
          },
        ]}
      />
    ),
  },
  {
    slug: "srh",
    name: "Srh",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="An SRH project"
        parapgraphs={[]}
        img_PATH="/projects/domas-swim-school/srh.png"
      />
    ),
  },
  {
    slug: "task-sumamry",
    name: "Task sumamry",
    content: (
      <MultiPointSection_CONTENT
        title="Task sumamry"
        points={[
          {
            title: "Company background (hypothetical)",
            paragraphs: [
              "The number of people choosing healthy and fairly traded foods over cheap, mass-produced products from multinational corporations is growing noticeably every year. Consumers want meat from humane and ethical farming practices, as well as fair-trade coffee and chocolate. Ethical and moral values have become important considerations in our diet, taking up a significant part of public discussions.",
              `Additionally, there is a trend toward preferring regional products due to shorter transport routes. These changing consumer values now reflect a lifestyle that combines enjoyment with social responsibility.."`,
              `This shift inspired a startup to create a chain of butcher shops focused on treating meat as a high-quality product and ensuring respect for the animals. This philosophy forms the core of their brand. The brand name, Sanfte Metzger (“Gentle Butchers”), has already been chosen, and the slogan is: "Experts in responsible meat enjoyment."`,
            ],
          },
          {
            title:
              "The task was to create the visual foundation for the brand and establish its identity. This included:",
            paragraphs: [],
          },
          {
            title:
              "1. Designing the core elements of the corporate design and compiling them in a Corporate Design Manual (CD Manual)",
            paragraphs: [],
          },
          {
            title: "2. The following structure:",
            paragraphs: [
              "- Presentation of the logo (a combined word and image mark), including its structure, components, proportions, color and size variations, typography for the brand name and slogan, placement guidelines, and do's/don'ts.",
              "- Typography guidelines for the corporate design.",
              "- The color scheme for the corporate design.",
            ],
          },
          {
            title: "3. Designing branded materials",
            paragraphs: [
              "- Stationery such as letterheads (DIN 5008 format)",
              "- Business cards",
              "- Envelopes (DIN long with a window, and C4 without a window)",
            ],
          },
        ]}
      />
    ),
  },
  {
    slug: "considerations",
    name: "Considerations",
    content: (
      <MultiPointSection_CONTENT
        title="Starting considerations"
        points={[
          {
            title: "Gentleness",
            paragraphs: [
              "The company prides itself on treating animals the way they should be treated – with love and respect.",
            ],
          },
          {
            title: "Ecological awareness",
            paragraphs: [
              "Gentle Butchers strives to be an environmentally friendly company that takes proper care of all living things.",
            ],
          },
          {
            title: "Above average market quality",
            paragraphs: [
              "The price of their product will be slightly above average compared to the competition, for which they have a reason – quality.",
            ],
          },
        ]}
      />
    ),
  },
  {
    slug: "inspiration",
    name: "Inspiration",
    content: (
      <UnevenRowImageGridSection_CONTENT
        title="Inspiration"
        leftImages_PATHS={[
          "/projects/sanfte-metzger/logo/inspiration/1.png",
          "/projects/sanfte-metzger/logo/inspiration/2.png",
        ]}
        rightImages_PATHS={[
          "/projects/sanfte-metzger/logo/inspiration/3.png",
          "/projects/sanfte-metzger/logo/inspiration/4.png",
        ]}
      />
    ),
  },
  {
    slug: "first-draft",
    name: "First draft",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The first draft"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/1.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "finding-balance",
    name: "Finding balance",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Finding balance"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/2.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "the-missing-piece",
    name: "The missing piece",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The missing piece"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/3.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "an-experiment",
    name: "An experiment",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="An experiment"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/4.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },

  {
    slug: "the-circles",
    name: "The circles",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The circles"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/5.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "building-a-snowman",
    name: "Building a snowman ⛄",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Building the shapes"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/6.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "creating-shapes",
    name: "Creating the shapes",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Creating the shapes"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/7.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "abstracting",
    name: "Abstracting",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Abstracting"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/8.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "final-version",
    name: "Final version",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Final version"
        parapgraphs={[]}
        img_PATH="/projects/sanfte-metzger/logo/progressions/9.svg"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "branded-materials",
    name: "Branded materials",
    content: (
      <UnevenRowImageGridSection_CONTENT
        title="Branded materials"
        leftImages_PATHS={[
          "/projects/sanfte-metzger/logo/branded-materials/1.png",
          "/projects/sanfte-metzger/logo/branded-materials/3.png",
        ]}
        rightImages_PATHS={[
          "/projects/sanfte-metzger/logo/branded-materials/2.png",
          "/projects/sanfte-metzger/logo/branded-materials/4.png",
        ]}
      />
    ),
  },
  {
    slug: "progress-recap",
    name: "Progress recap",
    content: (
      <LogoSwiperSection_CONTENT
        title="Progress recap"
        swiperImg_PATHS={[
          "/projects/sanfte-metzger/logo/progressions/1.svg",
          "/projects/sanfte-metzger/logo/progressions/2.svg",
          "/projects/sanfte-metzger/logo/progressions/3.svg",
          "/projects/sanfte-metzger/logo/progressions/4.svg",
          "/projects/sanfte-metzger/logo/progressions/5.svg",
          "/projects/sanfte-metzger/logo/progressions/6.svg",
          "/projects/sanfte-metzger/logo/progressions/7.svg",
          "/projects/sanfte-metzger/logo/progressions/8.svg",
          "/projects/sanfte-metzger/logo/progressions/9.svg",
        ]}
        customBackgroundColors={[
          { color: "#FFFAF3", index: 7 },
          { color: "#FFFAF3", index: 8 },
        ]}
        maxDesktopWidth={50}
      />
    ),
  },
];

export default function SwimActive_PROJECTS() {
  return <SiglePage_CONTENT {...{ Sections, Intro }} />;
}

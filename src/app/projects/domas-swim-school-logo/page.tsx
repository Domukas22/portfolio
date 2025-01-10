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
import { NextPageSection_CONTENT } from "@/components/SECTIONS/NextPageSection_CONTENT/NextPageSection_CONTENT";

const imgWrap_STYLES: React.CSSProperties = {
  padding: "6rem 1.6rem",
};
const img_STYLES: React.CSSProperties = {
  maxHeight: "40rem",
  height: "100%",
};

const Intro = Project_INTROS["domas-swim-school-logo"];
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
    slug: "a-simple-project",
    name: "A simple project",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="A simple project"
        parapgraphs={[
          "While I was studying at the SRH, we were given a simple, 2-day assignment of creating any kind of logo, using pohtoshop or illustrator, while also taking the theory we learned into consideration.",
          "In order to finance my studies, each weekend I would give private swimming lessons to children and adults. I though I'd use this time to create a logo for my own swim school in case I ever have one in the future.",
        ]}
        img_PATH="/projects/domas-swim-school-logo/srh.png"
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
            title: "An simple, clear, minimalistic icon",
            paragraphs: [
              "Most swimming clubs have logos with so many detailsm, that if you view them slightly further away, they tend to blend together and blur out. I tried visualizing lining up a few swimming logos side by side, and decided thay my logo would stand out my having less elements alltogether.",
            ],
          },
          {
            title: "Water, dynamic, natural forms",
            paragraphs: [
              "Let's also include a wave, because what else screems 'swimming' louder?",
            ],
          },
          {
            title: "Adaptability",
            paragraphs: [
              "Keep in mind at this time I was still only doing private lessons. I would only practise with one person at a time to 10x the learning rate. Each client has different skills, flexibility, weaknesses. My job is to identify them and adjust the training accordingly.",
            ],
          },
          {
            title: "Trust and safety",
            paragraphs: [
              `Most of my students were kids. I wanted the logo to communicate the idea of me carefully holding a child in the water.`,
            ],
          },
        ]}
      />
    ),
  },
  {
    slug: "the-first-draft",
    name: "First draft",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The first draft"
        parapgraphs={[
          `A fairly simple idea. The letter "D" represents me in the water, seamlessly adapting to the wave.`,
          `I later realized this is likely to be interpreted as a boat crashing down a waterfall. Talk about balance 😀.`,
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/1.png"
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
        parapgraphs={[
          `This looks a lot more serene and safe. Perhaps a little too safe, because all I can see now is an anti-virus shield.`,
          `My deliberation here was whether to keep adjusting the few existing elements to create a different perception or add a new element.`,
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/2.png"
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
        parapgraphs={[
          `I managed to some degree solve the previous problem by looking a step ahead. Adding a human-like figure was an attemt to 1. convey the message that I do private lessons with a single person at a time and 2. create a sense of security, as if the outer edges of the boat protect the human figure from the water, which would in this case be me.`,
          `I was faily happy with this idea, but I wanted to somehow make it proportional.`,
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/3.png"
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
        parapgraphs={[
          `Earlier that week, before being assigned this exercise, I was introduced to the golden ratio for the first time, and I found it truly mind-blowing.`,
          "I decided to design this logo as proportionally perfect as I could, following the golden ratio.",
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/4.png"
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
        parapgraphs={[
          `Here we see the proportionally sized circles I will be implementing.`,
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/5.png"
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
        parapgraphs={[
          `After playing around for a while I managed to position the circles in a way where they serve as outlines for the shapes of the logo.`,
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/6.png"
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
        parapgraphs={[
          "I adjusted the thicknes both of the board/letter D, as well as the outlined circle.",
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/7.png"
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
        parapgraphs={["A simplified version of the previous step."]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/8.png"
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
        parapgraphs={[
          "Tadaaa... we now have a simple and very sexy icon.",
          "Let's round out those corners of the boat and add some color.",
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/9.png"
        {...{ imgWrap_STYLES, img_STYLES }}
      />
    ),
  },
  {
    slug: "adding-color",
    name: "Adding color",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Final result"
        parapgraphs={[
          "Of course I went for blue. I did have to play around a bit with the tone of the color, but eventually settled for a darker, less energetic one.",
        ]}
        img_PATH="/projects/domas-swim-school-logo/logo/progressions/10.png"
        {...{
          img_STYLES,
          imgWrap_STYLES: { ...imgWrap_STYLES, backgroundColor: "#f6f7ff" },
        }}
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
          "/projects/domas-swim-school-logo/logo/progressions/1.png",
          "/projects/domas-swim-school-logo/logo/progressions/2.png",
          "/projects/domas-swim-school-logo/logo/progressions/3.png",
          "/projects/domas-swim-school-logo/logo/progressions/4.png",
          "/projects/domas-swim-school-logo/logo/progressions/5.png",
          "/projects/domas-swim-school-logo/logo/progressions/6.png",
          "/projects/domas-swim-school-logo/logo/progressions/7.png",
          "/projects/domas-swim-school-logo/logo/progressions/8.png",
          "/projects/domas-swim-school-logo/logo/progressions/9.png",
          "/projects/domas-swim-school-logo/logo/progressions/10.png",
        ]}
        customBackgroundColors={[{ color: "#f6f7ff", index: 9 }]}
        maxDesktopWidth={50}
      />
    ),
  },
  {
    slug: "next-project",
    name: "Next project",
    content: (
      <NextPageSection_CONTENT
        text="Localmore: My dream project"
        href="/projects/localmore"
      />
    ),
  },
];

export default function SwimActive_PROJECTS() {
  return <SiglePage_CONTENT {...{ Sections, Intro }} />;
}

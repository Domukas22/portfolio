//
//
//

"use client";

import Project_INTROS from "@/projects/intros";

import { HeroSection_CONTENT } from "@/components/SECTIONS/heros/HeroSection_CONTENT";
import { ProjectSection_TYPE } from "@/types";
import MultiPage_CONTENT from "../../_components/MultiPage_CONTENT";
import { TextOnlySection_CONTENT } from "@/components/SECTIONS/TextOnlySection_CONTENT/TextOnlySection_CONTENT";
import { TitleParagraphImageSection_CONTENT } from "@/components/SECTIONS/TitleParagraphImageSection_CONTENT/TitleParagraphImageSection_CONTENT";

const Intro = Project_INTROS["localmore"];
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
    slug: "quick-about",
    name: "Quick about",
    content: (
      <TextOnlySection_CONTENT
        texts_ARR={[
          {
            type: "h3",
            text: "Localmore is a vision of an online city center, built with the right incentives. ",
            style: { maxWidth: "80rem", marginBottom: "2rem" },
          },
          {
            type: "h3",
            text: "Its goal is to help people explore their local area in the most fun and efficient way possible, while meeting new people along the way.",
            style: { maxWidth: "80rem" },
          },
        ]}
      />
    ),
  },
  // {
  //   slug: "the-story",
  //   name: "The story",
  //   content: (
  //     <TitleParagraphImageSection_CONTENT
  //       title="The story"
  //       parapgraphs={[
  //         "I came up with the idea 3 years ago in the middle of my shift while delivering food to a customer.",
  //         " Although I have never designed anything in my life and coding looked like magic, I remember telling myself this is a worthwhile project that I would like to work on for the next 10 years.",
  //       ]}
  //       img_PATH="/projects/localmore/introduction/lieferando.png"
  //       link={{
  //         href: "/projects/localmore/story",
  //         link_TEXT: "Story of Localmore",
  //       }}
  //     />
  //   ),
  // },
  {
    slug: "why-use-localmore",
    name: "Why use Localmore?",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Why use Localmore?"
        parapgraphs={[
          "Most of the things you can find on Localmore you can also find somewhere else. So what’s the point?",
          "Localmore will allow you to navigate that information a lot quicker. It will also allow you to explore content in various ways that are not yet available anywhere.",
        ]}
        img_PATH="/projects/localmore/introduction/localmore_competitors.png"
        link={{
          href: "/projects/localmore/how-it-works/the-problem",
          link_TEXT: "Read complete analysis",
        }}
      />
    ),
  },
  {
    slug: "branding",
    name: "Branding",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Branding"
        parapgraphs={[
          "Localmore is built to feel like an old friend guiding you through the city—familiar, approachable, and genuinely helpful. The branding is rooted in clarity, simplicity, and precision, with every element designed to resonate with a diverse audience.",
        ]}
        img_PATH="/projects/localmore/introduction/branding.png"
        link={{
          href: "/projects/localmore/branding/foundation",
          link_TEXT: "Explore our values",
        }}
      />
    ),
  },
  {
    slug: "design",
    name: "Design",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Design"
        parapgraphs={[
          "Localmore has a simple, minimalistic design approach and a casual, laid back tone of voice. Using it should feel relieving, like the creators paid attention to every little detail and every single process.",
        ]}
        img_PATH="/projects/localmore/introduction/design.png"
        link={{
          href: "/projects/localmore/introduction/design.png",
          link_TEXT: "Dive deeper into design",
        }}
      />
    ),
  },
  {
    slug: "coding",
    name: "Coding",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Coding"
        parapgraphs={[
          "This project is the sole reason I learned to write software. Since coding is not my main interest, I tend to come up with a design and then learn just enough to make it real.",
        ]}
        img_PATH="/projects/localmore/introduction/coding.png"
        link={{
          href: "/projects/localmore/coding",
          link_TEXT: "How is Localmore built?",
        }}
      />
    ),
  },
  {
    slug: "taking-images",
    name: "Taking images",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Taking images"
        parapgraphs={[
          "I have taken around 10.000 images over 3 years for the app. This project was my opportunity to learn more about photography, and the difficulty of managing/implementing content consistently across the entire website.",
        ]}
        img_PATH="/projects/localmore/introduction/images.png"
        link={{
          href: "/projects/localmore/taking-images",
          link_TEXT: "More about Localmore images",
        }}
      />
    ),
  },
  {
    slug: "whats-next",
    name: "What’s next?",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="What’s next?"
        parapgraphs={[
          "Localmore is far from finished. The initial version isn’t even released yet. Although I could technically learn and build everything myself, I am starting to realize that partnering up with a developer would be the smartest way forward.",
        ]}
        img_PATH="/projects/localmore/introduction/whats-next.png"
        link={{
          href: "/projects/localmore/whats-next",
          link_TEXT: "What are my future plans?",
        }}
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

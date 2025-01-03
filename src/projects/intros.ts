//
//
//

import { ProjectTag_TYPE } from "./types/other";

type Project_NAME =
  | "vocabs"
  | "localmore"
  | "swim-active"
  | "sanfte-metzger"
  | "domas-swim-school-logo";

export type pageChild_TYPE = { slug: string; name: string };

export type nestedPage_TYPE =
  | { type: "no-children"; slug: string; name: string }
  | {
      type: "with-children";
      slug: string;
      name: string;
      children: pageChild_TYPE[];
    };

export interface ProjectIntro_TYPE {
  slug: string;
  name: string;
  subtitle: string;
  shortSubtitle: string;
  tags: ProjectTag_TYPE[];
  emoji: string;
  headerImg_PATH: string;
  headerImg_COLOR: string;

  nestedPages?: nestedPage_TYPE[];
}

type ProjectIntros = Record<Project_NAME, ProjectIntro_TYPE>;

const Project_INTROS: ProjectIntros = {
  localmore: {
    slug: "localmore",
    name: "Localmore",
    subtitle: "The project that kickstarted my interest in design",
    shortSubtitle: "My dream project",
    tags: ["website", "logo", "images", "coding", "in-progress"],
    emoji: "🤩",
    headerImg_PATH: "/projects/localmore/header.png",
    headerImg_COLOR: "rgba(255, 247, 240, 0.5)",
    // nestedPages: [
    //   {
    //     type: "no-children",
    //     slug: "introduction",
    //     name: "Introduction",
    //   },
    //   // {
    //   //   type: "no-children",
    //   //   slug: "the-story",
    //   //   name: "The story",
    //   // },
    //   {
    //     type: "with-children",
    //     slug: "how-it-works",
    //     name: "How it works",
    //     children: [
    //       { slug: "the-problem", name: "The problem" },
    //       { slug: "implementation", name: "Implementation" },
    //       { slug: "advantages", name: "Advantages" },
    //     ],
    //   },
    //   {
    //     type: "with-children",
    //     slug: "branding",
    //     name: "Branding",
    //     children: [
    //       { slug: "foundation", name: "Foundation" },
    //       { slug: "target-audience", name: "Target audience" },
    //       { slug: "the-name", name: "The name" },
    //       { slug: "the-logo", name: "The logo" },
    //     ],
    //   },
    //   {
    //     type: "with-children",
    //     slug: "design",
    //     name: "Design",
    //     children: [
    //       { slug: "overview", name: "Overview" },
    //       { slug: "the-card", name: "The card" },
    //       { slug: "filters", name: "Filters" },
    //     ],
    //   },
    //   {
    //     type: "no-children",
    //     slug: "coding",
    //     name: "Coding",
    //   },
    //   {
    //     type: "no-children",
    //     slug: "taking-images",
    //     name: "Taking images",
    //   },
    //   {
    //     type: "no-children",
    //     slug: "whats-next",
    //     name: "What's next?",
    //   },
    // ],
  },
  vocabs: {
    slug: "vocabs",
    name: "Vocabs",
    subtitle: "A vocabulary app for mobile devices",
    shortSubtitle: "Mobile app",
    tags: ["app", "coding", "in-progress"],
    emoji: "✍️",
    headerImg_PATH: `/projects/vocabs/header.png`,
    headerImg_COLOR: "#716d68",
    nestedPages: [
      {
        type: "no-children",
        slug: "introduction",
        name: "Introduction",
      },
    ],
  },
  "swim-active": {
    slug: "swim-active",
    name: "Swim Active",
    subtitle: "A website for a swimming school",
    shortSubtitle: "Website design",
    tags: ["website", "images", "coding", "in-progress", "video"],
    emoji: "💧",
    headerImg_PATH: "/projects/swim-active/header.png",
    headerImg_COLOR: "#FFF7F0",
  },
  "sanfte-metzger": {
    slug: "sanfte-metzger",
    name: "Sanfte Metzger",
    subtitle: "A hypothetical corporate design for a unique butcher's shop",
    shortSubtitle: "Logo design",
    tags: ["logo"],
    emoji: "🐮",
    headerImg_PATH: "/projects/sanfte-metzger/header.png",
    headerImg_COLOR: "#FFFAF3",
  },

  "domas-swim-school-logo": {
    slug: "domas-swim-school-logo",
    name: "Domas Swim School",
    subtitle:
      "A logo design for my private swimming lessons I created at the SRH",
    shortSubtitle: "Simple school project",
    tags: ["logo"],
    emoji: "🤿",
    headerImg_PATH: "/projects/domas-swim-school-logo/header.png",
    headerImg_COLOR: "#FFF7F0",
  },
};

export default Project_INTROS;

//
//
//

import { Localmore_TABS } from "./project-localmore";
import { existingProject_SLUGS, ProjectIntro_TYPE } from "./projectTypes";

export const Project_INTROS: Record<existingProject_SLUGS, ProjectIntro_TYPE> =
  {
    localmore: {
      slug: "localmore",
      name: "Localmore",

      subtitle: "The project that kickstarted my interest in design",
      shortSubtitle: "My dream project",

      headerImg_FILENAME: "header-localmore.png", // Local image path or identifier
      headerImg_COLOR: "rgba(255, 247, 240, 0.5)",

      tags: ["website", "logo", "images", "coding", "in-progress"],
      emoji: "🤩",

      GET_tabs: Localmore_TABS,
    },
    "sanfte-metzger": {
      slug: "sanfte-metzger",
      headerImg_FILENAME: "header-sanfte-metzger.png",
      name: "Sanfte Metzger",
      subtitle: "A hypothetical corporate design for a unique butchers shop",
      shortSubtitle: "Logo design",
      tags: ["logo"],
      emoji: "🐮",
      headerImg_COLOR: "rgba(255, 247, 240, 0.25)",

      GET_tabs: Localmore_TABS,
    },
    "domas-swim-school": {
      slug: "domas-swim-school",
      headerImg_FILENAME: "header-domas-swim-school.png",
      name: "Domas Swim School",
      subtitle: "A logo design for my private swimming lessons",
      shortSubtitle: "Logo design",
      tags: ["logo"],
      emoji: "🤿",
      headerImg_COLOR: "#FFF7F0",

      GET_tabs: Localmore_TABS,
    },
    vocabs: {
      slug: "vocabs",
      headerImg_FILENAME: "header-vocabs.png",
      name: "Vocabs",
      subtitle: "A vocabulary app for mobile devices",
      shortSubtitle: "Mobile app",
      tags: ["app", "coding", "in-progress"],
      emoji: "✍️",
      headerImg_COLOR: "#FFF7F0",

      GET_tabs: Localmore_TABS,
    },
    "swim-active": {
      slug: "swim-active",
      headerImg_FILENAME: "header-swim-active.png",
      name: "Swim Active",
      subtitle: "A website for a swimming school",
      shortSubtitle: "Website design",
      tags: ["website", "images", "coding", "in-progress", "video"],
      emoji: "💧",
      headerImg_COLOR: "#FFF7F0",

      GET_tabs: Localmore_TABS,
    },
  };

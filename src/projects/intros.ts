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

interface ProjectIntro_TYPE {
  slug: string;
  name: string;
  subtitle: string;
  shortSubtitle: string;
  tags: ProjectTag_TYPE[];
  emoji: string;
  headerImg_COLOR: string;
}

type ProjectIntros = Record<Project_NAME, ProjectIntro_TYPE>;

const Project_INTROS: ProjectIntros = {
  vocabs: {
    slug: "vocabs",
    name: "Vocabs",
    subtitle: "A vocabulary app for mobile devices",
    shortSubtitle: "Mobile app",
    tags: ["app", "coding", "in-progress"],
    emoji: "✍️",
    headerImg_COLOR: "#FFF7F0",
  },
  "swim-active": {
    slug: "swim-active",
    name: "Swim Active",
    subtitle: "A website for a swimming school",
    shortSubtitle: "Website design",
    tags: ["website", "images", "coding", "in-progress", "video"],
    emoji: "💧",
    headerImg_COLOR: "#FFF7F0",
  },
  "sanfte-metzger": {
    slug: "sanfte-metzger",
    name: "Sanfte Metzger",
    subtitle: "A hypothetical corporate design for a unique butcher's shop",
    shortSubtitle: "Logo design",
    tags: ["logo"],
    emoji: "🐮",
    headerImg_COLOR: "#FFFAF3",
  },
  localmore: {
    slug: "localmore",
    name: "Localmore",
    subtitle: "The project that kickstarted my interest in design",
    shortSubtitle: "My dream project",
    tags: ["website", "logo", "images", "coding", "in-progress"],
    emoji: "🤩",
    headerImg_COLOR: "rgba(255, 247, 240, 0.5)",
  },
  "domas-swim-school-logo": {
    slug: "domas-swim-school-logo",
    name: "Domas Swim School",
    subtitle:
      "A logo design for my private swimming lessons I created at the SRH",
    shortSubtitle: "Simple school project",
    tags: ["logo"],
    emoji: "🤿",
    headerImg_COLOR: "#FFF7F0",
  },
};

export default Project_INTROS;

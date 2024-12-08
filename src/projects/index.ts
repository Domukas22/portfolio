//
//
//

import { Localmore_PROJECT } from "./project-localmore";

export type ProjectTag_TYPE =
  | "website"
  | "app"
  | "logo"
  | "images"
  | "video"
  | "coding"
  | "in-progress";

export interface Project_TYPE {
  header_IMG: string;
  name: string;
  subtitle: string;
  shortSubtitle: string;
  emoji: string;
  firstTabSlug: string;
  tags: ProjectTag_TYPE[];
  GET_tabs: () => void;
}

export const Projects: Record<string, Project_TYPE> = {
  localmore: {
    header_IMG: "header-localmore.png", // Local image path or identifier
    name: "Localmore",
    subtitle: "The project that kickstarted my interest in design",
    shortSubtitle: "My dream project",
    tags: ["website", "logo", "images", "coding", "in-progress"],
    emoji: "🤩",
    firstTabSlug: "tab-1",
    GET_tabs: Localmore_PROJECT,
  },
  "sanfte-metzger": {
    header_IMG: "header-sanfte-metzger.png",
    name: "Sanfte Metzger",
    subtitle: "A hypothetical corporate design for a unique butchers shop",
    shortSubtitle: "Logo design",
    tags: ["logo"],
    emoji: "🐮",
    firstTabSlug: "tab-1",
    GET_tabs: () => {},
  },
  "domas-swim-school": {
    header_IMG: "header-domas-swim-school.png",
    name: "Domas Swim School",
    subtitle: "A logo design for my private swimming lessons",
    shortSubtitle: "Logo design",
    tags: ["logo"],
    emoji: "🤿",
    firstTabSlug: "tab-1",
    GET_tabs: () => {},
  },
  vocabs: {
    header_IMG: "header-vocabs.png",
    name: "Vocabs",
    subtitle: "A vocabulary app for mobile devices",
    shortSubtitle: "Mobile app",
    tags: ["app", "coding", "in-progress"],
    emoji: "✍️",
    firstTabSlug: "tab-1",
    GET_tabs: () => {},
  },
  "swim-active": {
    header_IMG: "header-swim-active.png",
    name: "Swim Active",
    subtitle: "A website for a swimming school",
    shortSubtitle: "Website design",
    tags: ["website", "images", "coding", "in-progress", "video"],
    emoji: "💧",
    firstTabSlug: "tab-1",
    GET_tabs: () => {},
  },
};

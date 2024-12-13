//
//

import { ProjectSection_TYPE } from "./projectSection_TYPES";

//
export type existingProject_SLUGS =
  | "localmore"
  | "sanfte-metzger"
  | "domas-swim-school"
  | "vocabs"
  | "swim-active";

// ====================================================================================================================================================
// ====================================================================================================================================================

export type ProjectTag_TYPE =
  | "website"
  | "app"
  | "logo"
  | "images"
  | "video"
  | "coding"
  | "in-progress";

export interface ProjectIntro_TYPE {
  slug: existingProject_SLUGS;
  name: string;
  subtitle: string;
  shortSubtitle: string;
  emoji: string;
  tags: ProjectTag_TYPE[];
  headerImg_FILENAME: string;
  headerImg_COLOR: string;
  GET_tabs: () => ProjectTabs_TYPE[];
}

export type ProjectTabs_TYPE = {
  tab_NAME: string;
  tab_SLUG: string;
  sections: ProjectSection_TYPE[];
};

export type customBackgroundColors_TYPE = {
  color: string;
  index: number;
};

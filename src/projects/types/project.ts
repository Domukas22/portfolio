//
//
//

import { ProjectTag_TYPE } from "./other";
import { ProjectSection_TYPE } from "./sections";

export type existingProject_SLUGS =
  | "localmore"
  | "domas-swim-school"
  | "sanfte-metzger"
  | "vocabs"
  | "swim-active";

export type Project_TYPE = {
  slug: existingProject_SLUGS;
  name: string;
  subtitle: string;
  shortSubtitle: string;
  emoji: string;
  tags: ProjectTag_TYPE[];

  headerImg_COLOR: string;
  sections: ProjectSection_TYPE[];
};

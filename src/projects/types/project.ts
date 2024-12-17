//
//
//

import { ProjectTag_TYPE } from "./other";
import { ProjectTabs_TYPE } from "./tabs";

export type existingProject_SLUGS = "localmore" | "domas-swim-school";
// | "sanfte-metzger"
// | "domas-swim-school"
// | "vocabs"
// | "swim-active";

export type Project_TYPE = {
  slug: existingProject_SLUGS;
  name: string;
  subtitle: string;
  shortSubtitle: string;
  emoji: string;
  tags: ProjectTag_TYPE[];

  headerImg_COLOR: string;
  tabs: ProjectTabs_TYPE[];
};

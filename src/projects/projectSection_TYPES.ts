//
//
//

import { ProjectTag_TYPE } from "./projectTypes";

export type ProjectSectionType_TYPE = "hero";

export type Hero_SECTION = {
  type: "introduction";
  section_SLUG: string;
  section_NAME: string;

  project_NAME: string;
  project_SUBTITLE: string;

  headerImg_FILENAME: string;
  headerImg_COLOR: string;

  tags: ProjectTag_TYPE[];
};

export type ProjectSection_TYPE = Hero_SECTION;

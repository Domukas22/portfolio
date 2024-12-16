//
//
//

import { ProjectSection_TYPE } from "./sections";

export type SingleTab_TYPE = {
  type: "single-tab";
  tab_NAME: string;
  tab_SLUG: string;
  sections: ProjectSection_TYPE[];
};

export type TabCollection_TYPE = {
  type: "tab-collection";
  tab_NAME: string;
  tab_SLUG: string;
  subtabs: SingleTab_TYPE[];
};

export type ProjectTabs_TYPE = SingleTab_TYPE | TabCollection_TYPE;

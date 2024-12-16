//
//
//

import { DummySection } from "@/projects/types/sections";
import { ProjectTabs_TYPE } from "@/projects/types/tabs";

const Design: ProjectTabs_TYPE = {
  type: "tab-collection",
  tab_NAME: "Design",
  tab_SLUG: "design",
  subtabs: [
    {
      type: "single-tab",
      tab_NAME: "Overview", // describe overall design goals / choices
      tab_SLUG: "overview",
      sections: [DummySection],
    },
    {
      type: "single-tab",
      tab_NAME: "The card",
      tab_SLUG: "the-card",
      sections: [DummySection],
    },
    {
      type: "single-tab",
      tab_NAME: "Filters",
      tab_SLUG: "filters",
      sections: [DummySection],
    },
  ],
};

export default Design;

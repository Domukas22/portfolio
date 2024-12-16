//
//
//

import { DummySection } from "@/projects/types/sections";
import { ProjectTabs_TYPE } from "@/projects/types/tabs";
import LocalmoreLogo_TAB from "./subtabs/the-logo";

const Branding: ProjectTabs_TYPE = {
  type: "tab-collection",
  tab_NAME: "Branding",
  tab_SLUG: "branding",
  subtabs: [
    {
      type: "single-tab",
      tab_NAME: "Foundation",
      tab_SLUG: "branding",
      sections: [DummySection],
    },
    {
      type: "single-tab",
      tab_NAME: "Target audience",
      tab_SLUG: "target-audience",
      sections: [DummySection],
    },
    {
      type: "single-tab",
      tab_NAME: "The name",
      tab_SLUG: "the-name",
      sections: [DummySection],
    },
    LocalmoreLogo_TAB,
  ],
};

export default Branding;

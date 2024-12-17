//
//
//

import { ProjectTabs_TYPE } from "@/projects/types/tabs";
import { DummySection } from "@/projects/types/sections";
import LocalmoreExpandable_LOGO from "@/components/LocalmoreExpandalbe_LOGO";

const Introduction: ProjectTabs_TYPE = {
  type: "single-tab",
  tab_NAME: "Introduction",
  tab_SLUG: "introduction",
  sections: [
    {
      type: "title-paragraph-image",
      section_SLUG: "end-result",
      section_NAME: "End result",
      title: "The end result",
      parapgraphs: [
        `It just so happens that the first letter of the first word also marks the beginning of the most memorable part: the intersecting letters 'L' and 'M'. Paired with the arrow at the end, this forms the abbreviated version of the logo.`,
        "We did it! Up top 🖐️",
      ],
      img_PATH: "/projects/localmore/logo/progressions/10.png",
      customImg_EL: <LocalmoreExpandable_LOGO />,
    },
    DummySection,
  ],
};

export default Introduction;

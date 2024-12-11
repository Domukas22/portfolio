//
//
//

import { Project_INTROS } from "./projectIntros";
import { ProjectTabs_TYPE } from "./projectTypes";

export function Localmore_TABS(): ProjectTabs_TYPE[] {
  const intro = Project_INTROS.localmore;

  return [
    {
      tab_NAME: "Introduction",
      tab_SLUG: "introduction",
      sections: [
        {
          type: "introduction",
          section_SLUG: "localmore",
          section_NAME: "Localmore",
          project_NAME: "Localmore",
          project_SUBTITLE:
            "The project that kickstarted my interest in design",
          headerImg_FILENAME: intro.headerImg_FILENAME,
          headerImg_COLOR: intro.headerImg_COLOR,
          tags: intro.tags,
        },
      ],
    },
  ];
}

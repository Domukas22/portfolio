//
//
//

import { Project_INTROS } from "@/projects/projectIntros";
import { ProjectTabs_TYPE } from "@/projects/projectTypes";

export function Introduction(): ProjectTabs_TYPE {
  const intro = Project_INTROS.localmore;

  return {
    tab_NAME: "Introduction",
    tab_SLUG: "introduction",
    sections: [
      {
        type: "hero",
        section_SLUG: "localmore",
        section_NAME: "Localmore",
        project_NAME: "Localmore",
        project_SUBTITLE: "The project that kickstarted my interest in design",
        headerImg_FILENAME: intro.headerImg_FILENAME,
        headerImg_COLOR: intro.headerImg_COLOR,
        tags: intro.tags,
      },
    ],
  };
}

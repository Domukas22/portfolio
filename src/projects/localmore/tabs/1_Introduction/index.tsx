//
//
//

import ProjectTag_LIST from "@/components/ProjectTag_LIST/ProjectTag_LIST";
import { ProjectTabs_TYPE } from "@/projects/types/tabs";

const Introduction: ProjectTabs_TYPE = {
  type: "single-tab",
  tab_NAME: "Introduction",
  tab_SLUG: "introduction",
  sections: [
    {
      type: "hero",
      project_NAME: "Localmore",
      headerImg_FILENAME: "header.png",

      headerImg_COLOR: "#fff7f0",
      project_SUBTITLE: "The project that kickstarted my interest in design",

      section_NAME: "Localmore",
      section_SLUG: "localmore",

      children: (
        <ProjectTag_LIST
          tags={["website", "logo", "images", "coding", "in-progress"]}
          styles={{ marginTop: "1rem" }}
        />
      ),
    },
  ],
};

export default Introduction;

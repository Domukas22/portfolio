//
//
//

import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects/projectTypes";

interface GetProjectTabWithSection_TYPE {
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
  section_SLUG: string | null | undefined;
  tab_SLUG: string | null | undefined;
}

export default function GET_projectTabWithSection({
  project,
  tab_SLUG,
  section_SLUG,
}: GetProjectTabWithSection_TYPE) {
  return {
    tab: project.tabs.find((tab) => tab.tab_SLUG === tab_SLUG),
    section: project.tabs
      .find((tab) => tab.tab_SLUG === tab_SLUG)
      ?.sections.find((s) => s.section_SLUG === section_SLUG),
  };
}

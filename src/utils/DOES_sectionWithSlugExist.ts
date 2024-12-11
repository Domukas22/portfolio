//
//
//

import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects/projectTypes";

export function DOES_sectionWithSlugExist({
  project,
  tab_SLUG,
  section_SLUG,
}: {
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
  tab_SLUG: string | null;
  section_SLUG: string | undefined;
}) {
  return project.tabs
    .find((tab) => tab.tab_SLUG === tab_SLUG)
    ?.sections.some((section) => section.section_SLUG === section_SLUG);
}

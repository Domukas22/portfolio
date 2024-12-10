//
//
//

import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects";

export function DOES_tabWithSlugExist({
  project,
  slug,
}: {
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
  slug: string | undefined | null;
}) {
  return project.tabs.some((tab) => tab.slug === slug);
}

//
//
//

import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects";
import GET_projectTabWithSection from "./GET_projectTabWithSection";

interface NavigateTabs_TYPE {
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
  tab_SLUG?: string | null;
  section_SLUG?: string | null;
}

export default function GET_tabAndSectionToNavigate({
  project,
  tab_SLUG,
  section_SLUG,
}: NavigateTabs_TYPE) {
  const { tab, section } = GET_projectTabWithSection({
    project,
    tab_SLUG,
    section_SLUG,
  });

  // if tab does not exist or is not defined, select first tab of the project
  if (!tab_SLUG || !tab) {
    const firstTab_SLUG = project.tabs[0]?.slug;

    // first tab of project not found
    if (!firstTab_SLUG) {
      console.error(
        `❌ First tab in project "${project.slug}" was undefined when handling params ❌`
      );
      return { tab: undefined, section: undefined };
    }

    return { tab: project.tabs[0] };
  }

  // handle section slug if provided
  if (section_SLUG) {
    // if section does not exist in tab, select the first section of the tab
    if (!section) {
      const firstSection_SLUG = tab?.sections?.[0].slug;

      // first section of tab not found
      if (!firstSection_SLUG) {
        console.error(
          `❌ First section slug in tab "${tab.slug}", in project "${project.slug}", was undefined when handling params ❌`
        );
        return { tab: undefined, section: undefined };
      }

      return { tab, section: tab?.sections?.[0] };
    }

    return { tab, section };
  }

  return { tab };
}

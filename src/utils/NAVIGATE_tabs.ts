//
//
//

import { HandleTabUrlParams_TYPE } from "@/hooks/USE_handleTabParams";
import { ChangeTab_TYPE } from "@/hooks/USE_manageTab";
import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects";
import GET_projectTabWithSection from "./GET_projectTabWithSection";

interface NavigateTabs_TYPE {
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
  tab_SLUG?: string | null;
  section_SLUG?: string | null;
  HANDLE_tabUrlParams: ({
    tab_SLUG,
    section_SLUG,
  }: HandleTabUrlParams_TYPE) => void;
  CHANGE_tab: ({ tab, section_SLUG }: ChangeTab_TYPE) => void;
  OPEN_tab: (tab_SLUG: string) => void;
}

export default function NAVIGATE_tabs({
  project,
  tab_SLUG,
  section_SLUG,
  HANDLE_tabUrlParams,
  CHANGE_tab,
  OPEN_tab,
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
      return console.error(
        `❌ First tab in project "${project.slug}" was undefined when handling params ❌`
      );
    }

    HANDLE_tabUrlParams({ tab_SLUG: firstTab_SLUG });
    CHANGE_tab({ tab: project.tabs[0] });
    OPEN_tab(project.tabs[0].slug);
    return;
  }

  // handle section slug if provided
  if (section_SLUG) {
    // if section does not exist in tab, select the first section of the tab
    if (!section) {
      const firstSection_SLUG = tab?.sections?.[0].slug;

      // first section of tab not found
      if (!firstSection_SLUG) {
        return console.error(
          `❌ First section slug in tab "${tab.slug}", in project "${project.slug}", was undefined when handling params ❌`
        );
      }

      HANDLE_tabUrlParams({
        tab_SLUG: tab.slug,
        section_SLUG: firstSection_SLUG,
      });
      CHANGE_tab({ tab, section_SLUG: firstSection_SLUG });
      OPEN_tab(tab.slug);
      return;
    }

    HANDLE_tabUrlParams({ tab_SLUG: tab.slug, section_SLUG: section.slug });
    CHANGE_tab({ tab, section_SLUG: section.slug });
    OPEN_tab(tab.slug);
    return;
  }

  HANDLE_tabUrlParams({ tab_SLUG: tab.slug });
  CHANGE_tab({ tab });
  OPEN_tab(tab.slug);
  return;
}

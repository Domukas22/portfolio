//
//
//

import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects/projectTypes";
import SCROLL_to from "@/utils/SCROLL_to";
import { useState } from "react";

interface UseManagaTabs_TYPE {
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
}

export interface ChangeTab_TYPE {
  tab: ProjectTabs_TYPE | undefined;
  section_SLUG?: string | undefined;
}

export default function USE_manageTabs({ project }: UseManagaTabs_TYPE) {
  const [IS_changingTab, SET_isChangingTab] = useState(false);
  const [current_TAB, SET_currentTab] = useState(project?.tabs?.[0]);

  const CHANGE_tab = ({ tab, section_SLUG }: ChangeTab_TYPE) => {
    if (IS_changingTab || !tab) return;

    if (current_TAB?.tab_SLUG === tab?.tab_SLUG) {
      SCROLL_to({ target_ID: section_SLUG });
      return;
    }

    // SET_mobileProjectMenuOpen(false);
    SET_isChangingTab(true);

    setTimeout(() => {
      SET_currentTab(tab);

      setTimeout(() => {
        SCROLL_to({ target_ID: section_SLUG, instant: true });
        setTimeout(() => {
          SET_isChangingTab(false);
        }, 100);
      }, 1);
    }, 101); // opacity of the content changes in 100ms
  };

  return { current_TAB, IS_changingTab, CHANGE_tab };
}

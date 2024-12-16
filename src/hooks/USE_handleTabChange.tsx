//
//
//

import { Project_TYPE } from "@/projects/types/project";
import { ProjectTabs_TYPE } from "@/projects/types/tabs";
import SCROLL_to from "@/utils/SCROLL_to";
import { useCallback, useMemo, useState } from "react";

interface UseManagaTabs_TYPE {
  project: Project_TYPE;
  TOGGLE_tab: (slug: string | undefined, val?: boolean) => void;
  CLOSE_mobileProjectMenu: () => void;
}

export interface ChangeTab_TYPE {
  tab: ProjectTabs_TYPE | undefined;
  section_SLUG?: string | undefined;
}

export default function USE_handleTabChange({
  project,
  TOGGLE_tab,
  CLOSE_mobileProjectMenu = () => {},
}: UseManagaTabs_TYPE) {
  const first_TAB = useMemo(() => project?.tabs?.[0], [project]);
  const [IS_changingTab, SET_isChangingTab] = useState(false);

  const [current_TAB, SET_currentTab] = useState<ProjectTabs_TYPE | undefined>(
    project?.tabs?.[0]
  );
  const [current_SUBTAB, SET_currentSubtab] = useState<
    ProjectTabs_TYPE | undefined
  >(first_TAB?.type === "tab-collection" ? first_TAB?.subtabs?.[0] : undefined);

  const CHANGE_tab = useCallback(
    ({
      tab,
      subtab,
    }: {
      tab: ProjectTabs_TYPE | undefined;
      subtab?: ProjectTabs_TYPE | undefined;
    }) => {
      if (IS_changingTab || !tab) return;

      // if tab and subtab match exaclty to the current ones, simply scroll up
      if (
        current_TAB?.tab_SLUG === tab?.tab_SLUG &&
        current_SUBTAB?.tab_SLUG === subtab?.tab_SLUG
      ) {
        SCROLL_to({});
        return;
      }

      // SET_mobileProjectMenuOpen(false);
      SET_isChangingTab(true);

      setTimeout(() => {
        if (tab?.type === "tab-collection") {
          TOGGLE_tab(tab?.tab_SLUG, true);
        }
        SET_currentTab(tab);
        SET_currentSubtab(subtab);
        CLOSE_mobileProjectMenu();

        setTimeout(() => {
          SCROLL_to({ instant: true });
          setTimeout(() => {
            SET_isChangingTab(false);
          }, 100);
        }, 1);
      }, 151); // opacity of the content changes in 100ms
    },
    [
      IS_changingTab,
      TOGGLE_tab,
      current_TAB,
      current_SUBTAB,
      CLOSE_mobileProjectMenu,
    ]
  );

  const SELECT_veryFirstTab = useCallback(() => {
    CHANGE_tab({
      tab: project?.tabs?.[0],
      subtab:
        first_TAB?.type === "tab-collection"
          ? first_TAB?.subtabs?.[0]
          : undefined,
    });
  }, [CHANGE_tab, first_TAB, project]);

  return {
    current_TAB,
    current_SUBTAB,
    IS_changingTab,
    CHANGE_tab,
    SELECT_veryFirstTab,
  };
}

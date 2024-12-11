//
//
//

import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects/projectTypes";
import { Tab_DD } from "./Tab_DD/Tab_DD";

export default function Project_TABS({
  project,
  current_TAB,
  activeSectionIndex,
  hideContent,
  SELECT_section,
  opened_TABS,
  TOGGLE_tab,
}: {
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
  current_TAB: ProjectTabs_TYPE;
  activeSectionIndex: number;
  hideContent: boolean;
  SELECT_section: (
    tab_SLUG?: string | null,
    section_SLUG?: string | null
  ) => void;
  opened_TABS: string[];
  TOGGLE_tab: (slug: string, val?: boolean) => void;
}) {
  return (
    <>
      {project?.tabs?.map((_tab) => (
        <Tab_DD
          key={_tab.tab_SLUG}
          tab={_tab}
          current_TAB={current_TAB}
          activeIndex={activeSectionIndex}
          hideContent={hideContent}
          SELECT_section={SELECT_section}
          open={opened_TABS.some((x) => x === _tab.tab_SLUG)}
          toggle={() => TOGGLE_tab(_tab.tab_SLUG)}
        />
      ))}
    </>
  );
}

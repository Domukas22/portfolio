//
//
//

import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects";
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
    <div
      data-tiny-scrollbar-styles
      className="flex-1 overflow-y-auto pb-[4rem]"
    >
      {project?.tabs?.map((_tab) => (
        <Tab_DD
          key={_tab.slug}
          tab={_tab}
          current_TAB={current_TAB}
          activeIndex={activeSectionIndex}
          hideContent={hideContent}
          SELECT_section={SELECT_section}
          open={opened_TABS.some((x) => x === _tab.slug)}
          toggle={() => TOGGLE_tab(_tab.slug)}
        />
      ))}
    </div>
  );
}

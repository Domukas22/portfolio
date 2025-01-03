//
//
//

import Menu_MODALS from "@/components/modals/Menu_MODALS/Menu_MODALS";
import MultiPageProject_SIDENAV from "@/components/Nav/MultiPageProject_SIDENAV";
import Project_NAVS from "@/components/Nav/Project_NAVS";
import Project_SECTIONS from "@/components/Project_SECTIONS";
import TopNav_ADJUSTMENT from "@/components/TopNav_ADJUSTMENT";
import USE_openedDropdowns from "@/hooks/USE_openedDropdowns";
import USE_projectMenuStates from "@/hooks/USE_projectMenuStates";
import { ProjectIntro_TYPE } from "@/projects/intros";
import { ProjectSection_TYPE } from "@/types";

export default function MultiPage_CONTENT({
  Sections = [],
  Intro,
  currentPage_SLUG = "xxx",
}: {
  Sections: ProjectSection_TYPE[];
  Intro: ProjectIntro_TYPE;
  currentPage_SLUG: string;
}) {
  const {
    IS_deskMenuOpen,
    IS_mobMenuOpen,

    SET_deskMenuOpen,
    SET_mobMenuOpen,
    SET_mobProjectMenuOpen,
  } = USE_projectMenuStates();

  const { opened_DDs, TOGGLE_dd } = USE_openedDropdowns();

  return (
    <>
      <TopNav_ADJUSTMENT />
      <Project_NAVS
        {...{ IS_deskMenuOpen }}
        project_NAME={Intro?.name}
        OPEN_mobMenu={() => SET_mobMenuOpen(true)}
        OPEN_mobProjectMenu={() => {
          SET_mobProjectMenuOpen(true);
        }}
        OPEN_deskMenu={() => SET_deskMenuOpen(true)}
      />

      <Project_SECTIONS {...{ Sections }} />

      {/* ------------------------ NAVS -------------------------------- */}

      <MultiPageProject_SIDENAV
        {...{ opened_DDs, TOGGLE_dd }}
        projet_NAME={Intro?.name}
        nested_PAGES={Intro?.nestedPages || []}
        currentPage_SLUG={currentPage_SLUG}
        project_SLUG={Intro.slug}
        // CLOSE_mobProjectMenu={() => SET_mobProjectMenuOpen(false)}
      />

      {/* ------------------------ MODALS -------------------------------- */}
      <Menu_MODALS
        IS_deskMenuOpen={IS_deskMenuOpen}
        IS_mobileMenuOpen={IS_mobMenuOpen}
        CLOSE_desk={() => SET_deskMenuOpen(false)}
        CLOSE_mob={() => SET_mobMenuOpen(false)}
      />

      {/* <ScrollSpyMobProject_MODAL
        {...{ Sections, activeSectionIndex }}
        CLOSE_modal={() => SET_mobProjectMenuOpen(false)}
        project_NAME={Intro?.name}
        IS_mobProjectOpen={IS_mobProjectOpen}
      /> */}
    </>
  );
}

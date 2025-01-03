//
//
//

import Menu_MODALS from "@/components/modals/Menu_MODALS/Menu_MODALS";
import ScrollSpyMobProject_MODAL from "@/components/modals/ScrollSpyMobProject_MODAL";
import Project_NAVS from "@/components/Nav/Project_NAVS";
import ScrollSpyProject_SIDENAV from "@/components/Nav/ScrollSpyProject_SIDENAV";
import Project_SECTIONS from "@/components/Project_SECTIONS";
import TopNav_ADJUSTMENT from "@/components/TopNav_ADJUSTMENT";
import USE_projectMenuStates from "@/hooks/USE_projectMenuStates";
import USE_scrollSpy from "@/hooks/USE_scrollSpy";
import { ProjectIntro_TYPE } from "@/projects/intros";
import { ProjectSection_TYPE } from "@/types";

export default function SiglePage_CONTENT({
  Sections = [],
  Intro,
}: {
  Sections: ProjectSection_TYPE[];
  Intro: ProjectIntro_TYPE;
}) {
  const {
    IS_deskMenuOpen,
    IS_mobMenuOpen,
    IS_mobProjectOpen,
    SET_deskMenuOpen,
    SET_mobMenuOpen,
    SET_mobProjectMenuOpen,
  } = USE_projectMenuStates();

  const { activeSectionIndex, sectionRefs } = USE_scrollSpy(
    Sections?.map((s) => s.slug)
  );

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

      <Project_SECTIONS {...{ sectionRefs, Sections }} />

      {/* ------------------------ NAVS -------------------------------- */}

      <ScrollSpyProject_SIDENAV
        projet_NAME={Intro?.name}
        {...{ Sections, activeSectionIndex }}
        CLOSE_mobProjectMenu={() => SET_mobProjectMenuOpen(false)}
      />

      {/* ------------------------ MODALS -------------------------------- */}
      <Menu_MODALS
        IS_deskMenuOpen={IS_deskMenuOpen}
        IS_mobileMenuOpen={IS_mobMenuOpen}
        CLOSE_desk={() => SET_deskMenuOpen(false)}
        CLOSE_mob={() => SET_mobMenuOpen(false)}
      />

      <ScrollSpyMobProject_MODAL
        {...{ Sections, activeSectionIndex }}
        CLOSE_modal={() => SET_mobProjectMenuOpen(false)}
        project_NAME={Intro?.name}
        IS_mobProjectOpen={IS_mobProjectOpen}
      />
    </>
  );
}

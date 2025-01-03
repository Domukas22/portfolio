//
//
//

import ProjectDesk_NAV from "./ProjectDesk_NAV/ProjectDesk_NAV";
import ProjectMob_NAV from "./ProjectMob_NAV/ProjectMob_NAV";

export default function Project_NAVS({
  project_NAME = "Project name",
  IS_deskMenuOpen = false,
  OPEN_mobMenu = () => {},
  OPEN_deskMenu = () => {},
  OPEN_mobProjectMenu = () => {},
}: {
  project_NAME: string;
  IS_deskMenuOpen: boolean;
  OPEN_mobMenu: () => void;
  OPEN_deskMenu: () => void;
  OPEN_mobProjectMenu: () => void;
}) {
  return (
    <>
      <ProjectMob_NAV
        project_NAME={project_NAME}
        OPEN_mobMenu={OPEN_mobMenu}
        OPEN_mobProjectMenu={OPEN_mobProjectMenu}
      />
      <ProjectDesk_NAV
        project_NAME={project_NAME}
        IS_deskMenuOpen={IS_deskMenuOpen}
        OPEN_deskMenu={OPEN_deskMenu}
      />
    </>
  );
}

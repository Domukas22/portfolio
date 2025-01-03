//
//
//

import { ProjectSection_TYPE } from "@/types";
import DesktopProjectSideNav_BTN from "../DesktopProjectSideNav_BTN";
import SideNav from "../SideNav/SideNav";
import SinglePageProjectNav_BTNS from "../SinglePageProjectNav_BTNS";

export default function ScrollSpyProject_SIDENAV({
  projet_NAME = "Project name",
  Sections = [],
  activeSectionIndex = 9999,
  CLOSE_mobProjectMenu = () => {},
}: {
  projet_NAME: string;
  Sections: ProjectSection_TYPE[];
  activeSectionIndex: number;
  CLOSE_mobProjectMenu: () => void;
}) {
  return (
    <SideNav
      extraElsAboveScrollable={
        <DesktopProjectSideNav_BTN projet_NAME={projet_NAME} />
      }
    >
      <SinglePageProjectNav_BTNS
        {...{ Sections }}
        activeSectionIndex={activeSectionIndex}
        CLOSE_mobProjectMenu={CLOSE_mobProjectMenu}
      />
    </SideNav>
  );
}

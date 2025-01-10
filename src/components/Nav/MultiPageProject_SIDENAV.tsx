//
//
//

import DesktopProjectSideNav_BTN from "../DesktopProjectSideNav_BTN";
import LogoCorner_BTN from "../LogoCorner_BTN/LogoCorner_BTN";
import MultiPageProjectNav_BTNS from "../MultiPageProjectNav_BTNS/MultiPageProjectNav_BTNS";
import SideNav from "../SideNav/SideNav";
import { nestedPage_TYPE } from "@/projects/intros";

export default function MultiPageProject_SIDENAV({
  projet_NAME = "Project name",
  project_SLUG = "xxx",
  nested_PAGES = [],
  opened_DDs = [],
  currentPage_SLUG = "xxx",
  // CLOSE_mobProjectMenu = () => {},
  TOGGLE_dd = () => {},
}: {
  projet_NAME: string;
  project_SLUG: string;
  opened_DDs: string[];
  nested_PAGES: nestedPage_TYPE[];
  currentPage_SLUG: string;
  TOGGLE_dd: (slug: string | undefined, val?: boolean) => void;
  // CLOSE_mobProjectMenu: () => void;
}) {
  return (
    <SideNav
      extraElsAboveScrollable={
        <>
          <LogoCorner_BTN />
          <DesktopProjectSideNav_BTN projet_NAME={projet_NAME} />
        </>
      }
    >
      <MultiPageProjectNav_BTNS
        {...{ nested_PAGES, currentPage_SLUG, opened_DDs, TOGGLE_dd }}
        project_SLUG={project_SLUG}
        // CLOSE_mobProjectMenu={CLOSE_mobProjectMenu}
      />
    </SideNav>
  );
}

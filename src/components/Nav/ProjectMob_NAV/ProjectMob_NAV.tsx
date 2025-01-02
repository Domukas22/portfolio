//
//
//

"use client";

import StickyTopNav from "../StickyTopNav/StickyTopNav";
import css from "./ProjectMob_NAV.module.css";
import ProjectMenu_BTN from "@/components/ProjectMenu_BTN/ProjectCorner_BTN";
import MobileMenu_BTN from "@/components/MobileMenu_BTN";

interface ProjectMob_NAV_PROPS {
  project_NAME: string;

  OPEN_mobileMenu: () => void;
  OPEN_mobileProjectMenu?: () => void;
}

export default function ProjectMob_NAV({
  project_NAME = "Project name",
  OPEN_mobileMenu = () => {},
  OPEN_mobileProjectMenu,
}: ProjectMob_NAV_PROPS) {
  return (
    <StickyTopNav targetClass={css.projectMobileNav}>
      <ProjectMenu_BTN {...{ project_NAME, OPEN_mobileProjectMenu }} />

      <MobileMenu_BTN {...{ OPEN_mobileMenu }} />
    </StickyTopNav>
  );
}

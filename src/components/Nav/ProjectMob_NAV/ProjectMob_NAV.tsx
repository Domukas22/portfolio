//
//
//

"use client";

import Nav from "../Nav/Nav";
import css from "./ProjectMob_NAV.module.css";
import ProjectMenu_BTN from "@/components/ProjectMenu_BTN/ProjectCorner_BTN";
import MobileMenu_BTN from "@/components/MobileMenu_BTN";

interface ProjectMob_NAV_PROPS {
  project_NAME: string;

  OPEN_mobMenu: () => void;
  OPEN_mobProjectMenu?: () => void;
}

export default function ProjectMob_NAV({
  project_NAME = "Project name",
  OPEN_mobMenu = () => {},
  OPEN_mobProjectMenu,
}: ProjectMob_NAV_PROPS) {
  return (
    <Nav targetClass={css.projectMobileNav}>
      <ProjectMenu_BTN {...{ project_NAME, OPEN_mobProjectMenu }} />

      <MobileMenu_BTN {...{ OPEN_mobMenu }} />
    </Nav>
  );
}

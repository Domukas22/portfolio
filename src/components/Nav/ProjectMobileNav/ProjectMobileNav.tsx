//
//
//

"use client";

import Btn from "@/components/Btn/Btn";
import { ICON_dropDownArrow } from "@/components/Icons/Icons";

import StickyTopNav from "../StickyTopNav/StickyTopNav";
import css from "./ProjectMobileNav.module.css";
import ProjectMenu_BTN from "@/components/ProjectMenu_BTN/ProjectCorner_BTN";
import MobileMenu_BTN from "@/components/MobileMenu_BTN";

interface ProjectMobileNav_PROPS {
  project_NAME: string;
  project_TABTITLE: string;
  OPEN_mobileMenu: () => void;
  OPEN_mobileProjectMenu?: () => void;
}

export default function ProjectMobileNav({
  project_NAME = "Project name",
  project_TABTITLE = "Current project tab",
  OPEN_mobileMenu = () => {},
  OPEN_mobileProjectMenu,
  _ref,
}: ProjectMobileNav_PROPS) {
  return (
    <StickyTopNav targetClass={css.projectMobileNav} _ref={_ref}>
      <ProjectMenu_BTN
        {...{ project_NAME, project_TABTITLE, OPEN_mobileProjectMenu }}
      />

      <MobileMenu_BTN {...{ OPEN_mobileMenu }} />
    </StickyTopNav>
  );
}

//
//
//

"use client";

import Nav from "../Nav/Nav";
import css from "./ProjectDesk_NAV.module.css";
import Btn from "@/components/Btn/Btn";
import Link from "next/link";
import { ICON_arrow } from "@/components/Icons/Icons";
import SCROLL_to from "@/utils/SCROLL_to";

interface ProjectDesktopNav_PROPS {
  project_NAME: string;
  IS_deskMenuOpen: boolean;
  OPEN_deskMenu: () => void;
}

export default function ProjectDesk_NAV({
  project_NAME = "Project name",

  IS_deskMenuOpen = false,
  OPEN_deskMenu = () => {},
}: ProjectDesktopNav_PROPS) {
  return (
    <Nav
      targetClass={css.projectDesktopNav}
      data-tiny
      data-next-to-sidenav
      data-hide-on-tablet
    >
      <li>
        <Link className="btn-tiny-desk-round" href="/">
          Home
        </Link>
      </li>
      <TinyDeskNav_SEPARATOR />
      <li>
        <Link className="btn-tiny-desk-round" href="/">
          Projects
        </Link>
      </li>
      <TinyDeskNav_SEPARATOR />
      <li>
        <Btn
          btnType="btn-tiny-desk-round"
          text={project_NAME}
          onClick={() => SCROLL_to({})}
          data-last
        />
      </li>

      {/* Menu btn */}
      <li
        className="fixed top-0  !h-[var(--tiny-nav-height)]"
        style={{
          padding: 0,
          right: IS_deskMenuOpen ? "var(--scrollbar-width)" : "0px",
        }}
      >
        <Btn
          btnType="btn-square-light"
          text="Menu"
          right_ICON={<ICON_arrow direction="right" />}
          data-light-left-border-color="true"
          onClick={OPEN_deskMenu}
        />
      </li>
    </Nav>
  );
}

export function TinyDeskNav_SEPARATOR() {
  return <span className="h-full content-center duration-100">{">"}</span>;
}

//
//
//

"use client";

import StickyTopNav from "../StickyTopNav/StickyTopNav";
import css from "./ProjectDesk_NAV.module.css";
import Btn from "@/components/Btn/Btn";
import Link from "next/link";
import { ICON_arrow } from "@/components/Icons/Icons";
import SCROLL_to from "@/utils/SCROLL_to";

interface ProjectDesktopNav_PROPS {
  project_NAME: string;
  IS_desktopMenuOpen: boolean;
  _ref?: React.RefObject<HTMLElement>;
  OPEN_menu: () => void;
}

export default function ProjectDesk_NAV({
  project_NAME = "Project name",
  _ref,
  IS_desktopMenuOpen = false,
  OPEN_menu = () => {},
}: ProjectDesktopNav_PROPS) {
  return (
    <StickyTopNav targetClass={css.projectDesktopNav} tiny _ref={_ref}>
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
          right: IS_desktopMenuOpen ? "var(--scrollbar-width)" : "0px",
        }}
      >
        <Btn
          btnType="btn-square-light"
          text="Menu"
          right_ICON={<ICON_arrow direction="right" />}
          data-light-left-border-color="true"
          onClick={OPEN_menu}
        />
      </li>
    </StickyTopNav>
  );
}

function TinyDeskNav_SEPARATOR() {
  return <span className="h-full content-center duration-100">{">"}</span>;
}

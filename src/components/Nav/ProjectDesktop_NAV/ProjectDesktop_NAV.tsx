//
//
//

"use client";

import StickyTopNav from "../StickyTopNav/StickyTopNav";
import css from "./ProjectDesktop_NAV.module.css";
import Btn from "@/components/Btn/Btn";
import Link from "next/link";
import SCROLL_to from "@/utils/SCROLL_to";
import { ICON_arrow } from "@/components/Icons/Icons";

interface ProjectDesktopNav_PROPS {
  project_NAME: string;
  tab_TITLE: string;
  OPEN_menu: () => void;
  RESET_tabs: () => void;
  _ref?: React.RefObject<HTMLElement>;
  hideContent: boolean;
  IS_desktopMenuOpen: boolean;
}

export default function ProjectDesktop_NAV({
  project_NAME = "Project name",
  tab_TITLE = "Tab title",
  _ref,
  hideContent,
  IS_desktopMenuOpen = false,
  OPEN_menu = () => {},
  RESET_tabs = () => {},
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
          onClick={RESET_tabs}
        />
      </li>
      <TinyDeskNav_SEPARATOR />
      <li className="flex-1">
        <Btn
          btnType="btn-tiny-desk-round"
          text={tab_TITLE}
          onClick={() => SCROLL_to({})}
          className="max-w-full"
          data-last
          data-hide={hideContent}
          text_STYLES={{
            width: "100%",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        />
      </li>
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
  return <span className="h-full content-center">{">"}</span>;
}

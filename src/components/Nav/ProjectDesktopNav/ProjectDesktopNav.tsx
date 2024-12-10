//
//
//

"use client";

import StickyTopNav from "../StickyTopNav/StickyTopNav";
import css from "./ProjectDesktopNav.module.css";
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
}

export default function ProjectDesktopNav({
  project_NAME = "Project name",
  tab_TITLE = "Tab title",
  _ref,
  hideContent,
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
      <li>
        <Btn
          btnType="btn-tiny-desk-round"
          text={tab_TITLE}
          onClick={() => SCROLL_to({})}
          extraAttributes={[`data-hide="${hideContent}"`, "data-last"]}
        />
      </li>
      <li className="ml-auto">
        <Btn
          btnType="btn-square-light"
          text="Menu"
          right_ICON={<ICON_arrow direction="right" />}
          extraAttributes={['data-light-left-border-color="true"']}
          onClick={OPEN_menu}
        />
      </li>
    </StickyTopNav>
  );
}

function TinyDeskNav_SEPARATOR() {
  return <span className="h-full content-center">{">"}</span>;
}

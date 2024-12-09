//
//
//

"use client";

import StickyTopNav from "../StickyTopNav/StickyTopNav";
import css from "./ProjectDesktopNav.module.css";
import ProjectMenu_BTN from "@/components/ProjectMenu_BTN/ProjectCorner_BTN";
import MobileMenu_BTN from "@/components/MobileMenu_BTN";
import Btn from "@/components/Btn/Btn";
import Link from "next/link";
import SCROLL_toTop from "@/utils/SCROLL_toTop";
import { ICON_arrow } from "@/components/Icons/Icons";

interface ProjectDesktopNav_PROPS {
  project_NAME: string;
  tab_TITLE: string;
  project_SLUG: string;
  CHANGE_toFirstTab: () => void;
  OPEN_menu: () => void;
}

export default function ProjectDesktopNav({
  project_NAME = "Project name",
  tab_TITLE = "Tab title",
  project_SLUG,
  CHANGE_toFirstTab = () => {},
  OPEN_menu = () => {},
}: ProjectDesktopNav_PROPS) {
  return (
    <StickyTopNav targetClass={css.projectDesktopNav} tiny>
      <TinyDesktopNav_LINK text="Home" href="/" />
      <span className="h-full content-center">{">"}</span>
      <TinyDesktopNav_LINK text="Projects" href="/" />
      <span className="h-full content-center">{">"}</span>
      <TinyDesktopNav_LINK
        text={project_NAME}
        href={`/projects/${project_SLUG}`}
      />
      <span className="h-full content-center">{">"}</span>
      <TinyDesktopNav_LINK text={tab_TITLE} last />
      <Btn
        btnType="btn-square-light"
        text="Menu"
        right_ICON={<ICON_arrow direction="right" />}
        extraAttributes={['data-light-left-border-color="true"']}
        className=""
        onClick={OPEN_menu}
      />
    </StickyTopNav>
  );
}

function TinyDesktopNav_LINK({
  text = "Link",
  href = "/",
  last = false,
}: {
  text: string;
  href?: string;
  last?: boolean;
}) {
  return (
    <li style={{ flex: last ? 1 : 0 }}>
      {last ? (
        <Btn
          btnType="btn-square-light"
          text={text}
          className="px-[0.8rem] !h-[3.2rem] rounded-full "
          onClick={SCROLL_toTop}
        />
      ) : (
        <Link
          className={`btn-square-light font-light text-[var(--text-white-dimm)] px-[0.8rem] !h-[3.2rem] rounded-full`}
          // style={{ border: "1px solid red" }}
          {...{ href }}
        >
          {text}
        </Link>
      )}
    </li>
  );
}

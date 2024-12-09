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
  project_SLUG: string;
  OPEN_menu: () => void;
  _ref?: React.RefObject<HTMLElement>;
  hideContent: boolean;
}

export default function ProjectDesktopNav({
  project_NAME = "Project name",
  tab_TITLE = "Tab title",
  project_SLUG,
  OPEN_menu = () => {},
  _ref,
  hideContent,
}: ProjectDesktopNav_PROPS) {
  return (
    <StickyTopNav targetClass={css.projectDesktopNav} tiny _ref={_ref}>
      <TinyDesktopNav_LINK text="Home" href="/" />
      <span className="h-full content-center">{">"}</span>
      <TinyDesktopNav_LINK text="Projects" href="/" />
      <span className="h-full content-center">{">"}</span>
      <TinyDesktopNav_LINK
        text={project_NAME}
        href={`/projects/${project_SLUG}`}
      />
      <span className="h-full content-center">{">"}</span>
      <TinyDesktopNav_LINK text={tab_TITLE} last {...{ hideContent }} />
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
  hideContent,
}: {
  text: string;
  href?: string;
  last?: boolean;
  hideContent?: boolean;
}) {
  return (
    <li
      style={{
        flex: last ? 1 : 0,
        pointerEvents: hideContent ? "none" : "auto",
        opacity: hideContent ? 0 : 1,
        transition: "150ms",
      }}
    >
      {last ? (
        <Btn
          btnType="btn-square-light"
          text={text}
          className="px-[0.8rem] !h-[3.2rem] rounded-full "
          onClick={() => SCROLL_to({})}
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

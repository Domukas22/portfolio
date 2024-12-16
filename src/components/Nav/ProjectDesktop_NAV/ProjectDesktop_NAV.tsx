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
import { ProjectTabs_TYPE } from "@/projects/types/tabs";

interface ProjectDesktopNav_PROPS {
  project_NAME: string;
  current_TAB: ProjectTabs_TYPE | undefined;
  current_SUBTAB: ProjectTabs_TYPE | undefined;

  OPEN_menu: () => void;
  SELECT_veryFirstTab: () => void;
  _ref?: React.RefObject<HTMLElement>;
  hideContent: boolean;
  IS_desktopMenuOpen: boolean;
  CHANGE_tab: ({
    tab,
    subtab,
  }: {
    tab: ProjectTabs_TYPE | undefined;
    subtab?: ProjectTabs_TYPE | undefined;
  }) => void;
}

export default function ProjectDesktop_NAV({
  project_NAME = "Project name",
  current_TAB,
  current_SUBTAB,
  _ref,
  hideContent,
  IS_desktopMenuOpen = false,
  OPEN_menu = () => {},
  SELECT_veryFirstTab = () => {},
  CHANGE_tab,
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
          onClick={SELECT_veryFirstTab}
        />
      </li>
      <TinyDeskNav_SEPARATOR />

      <GET_tabBtn
        HAS_subtab={!!current_SUBTAB}
        {...{ current_TAB, hideContent, CHANGE_tab }}
      />
      <TinyDeskNav_SEPARATOR {...{ hideContent }} />
      <GET_subtabBtn {...{ current_SUBTAB, hideContent }} />

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

function TinyDeskNav_SEPARATOR({ hideContent }: { hideContent?: boolean }) {
  return (
    <span
      className="h-full content-center duration-100"
      style={hideContent ? { pointerEvents: "none", opacity: 0 } : {}}
    >
      {">"}
    </span>
  );
}
function GET_tabBtn({
  HAS_subtab = false,
  current_TAB,
  hideContent = false,
  CHANGE_tab,
}: {
  CHANGE_tab: ({
    tab,
    subtab,
  }: {
    tab: ProjectTabs_TYPE | undefined;
    subtab?: ProjectTabs_TYPE | undefined;
  }) => void;
  HAS_subtab: boolean;
  current_TAB: ProjectTabs_TYPE | undefined;
  hideContent: boolean;
}) {
  return !HAS_subtab ? (
    <li className="flex-1">
      <Btn
        btnType="btn-tiny-desk-round"
        text={current_TAB?.tab_NAME}
        onClick={() => SCROLL_to({})}
        className="max-w-full"
        data-last
        data-hide={hideContent}
        text_STYLES={{
          maxWidth: "100%",
          width: "100%",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      />
    </li>
  ) : (
    <li>
      <Btn
        btnType="btn-tiny-desk-round"
        text={current_TAB?.tab_NAME}
        onClick={() =>
          CHANGE_tab({
            tab: current_TAB,
            subtab:
              current_TAB?.type === "tab-collection"
                ? current_TAB.subtabs?.[0]
                : undefined,
          })
        }
        data-hide={hideContent}
      />
    </li>
  );
}
function GET_subtabBtn({
  current_SUBTAB,
  hideContent,
}: {
  current_SUBTAB: ProjectTabs_TYPE | undefined;
  hideContent: boolean;
}) {
  return !!current_SUBTAB ? (
    <li className="flex-1">
      <Btn
        btnType="btn-tiny-desk-round"
        text={current_SUBTAB.tab_NAME}
        onClick={() => SCROLL_to({})}
        className="max-w-full"
        data-last
        data-hide={hideContent}
        text_STYLES={{
          maxWidth: "100%",
          width: "100%",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      />
    </li>
  ) : null;
}

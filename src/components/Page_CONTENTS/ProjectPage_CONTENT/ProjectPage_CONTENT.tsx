"use client";

import {
  ProjectIntro_TYPE,
  Projects,
  ProjectSection_TYPE,
  ProjectTabs_TYPE,
} from "@/projects";
import { useParams } from "next/navigation";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import LogoCorner_BTN from "../../LogoCorner_BTN/LogoCorner_BTN";
import MobileMenu_MODAL from "../../MobileMenu_MODAL/MobileMenu_MODAL";
import { useRouter, useSearchParams } from "next/navigation";
import SideNav from "../../SideNav/SideNav";
import ProjectMobileNav from "../../Nav/ProjectMobileNav/ProjectMobileNav";
import USE_Toggle from "@/hooks/USE_toggle";
import Btn from "../../Btn/Btn";
import ProjectDesktopNav from "@/components/Nav/ProjectDesktopNav/ProjectDesktopNav";
import { Tab_DD } from "@/components/Tab_DD/Tab_DD";
import MobileProjectMenu_MODAL from "@/components/MobileProjectMenu_MODAL/MobileProjectMenu_MODAL";
import DesktopMenu_MODAL from "@/components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import USE_perserveStickyNavPosition from "@/utils/USE_perserveStickyNavPosition";
import USE_handleTabParams from "@/hooks/USE_handleTabParams";
import USE_scrollSpy from "@/hooks/USE_scrollSpy";
import USE_manageTabs from "@/hooks/USE_manageTab";
import NAVIGATE_tabs from "@/utils/NAVIGATE_tabs";
import { ICON_arrow } from "@/components/Icons/Icons";

// ===================================================================
// Todo: Show/hide the "collapse all" button with framer motion
// ===================================================================

export default function ProjectPage_CONTENT() {
  const { slug }: { slug: string } = useParams();
  const project = { ...Projects[slug], tabs: Projects[slug]?.GET_tabs() };

  const params = useSearchParams();
  const router = useRouter();

  const sideNav_REF = useRef<HTMLElement | null>(null);
  const tinyNavNav_REF = useRef<HTMLElement | null>(null);

  const [loaded, SET_loaded] = useState(false);

  const { opened_TABS, TOGGLE_tab, CLOSE_allTabs } = USE_openedTabs();

  const { state: IS_menuOpen, set: SET_menuOpen } = USE_Toggle(false);
  const { state: IS_mobileMenuOpen, set: SET_mobileMenuOpen } =
    USE_Toggle(false);
  const { state: IS_mobileProjectOpen, set: SET_mobileProjectMenuOpen } =
    USE_Toggle(false);

  const { HANDLE_tabUrlParams } = USE_handleTabParams({
    router,
    params,
    project,
  });
  const { current_TAB, IS_changingTab, CHANGE_tab } = USE_manageTabs({
    project,
  });

  const { activeSectionIndex, sectionRefs } = USE_scrollSpy({
    tab: current_TAB,
  });

  const SELECT_section = (
    tab_SLUG?: string | null,
    section_SLUG?: string | null
  ) => {
    NAVIGATE_tabs({
      project,
      tab_SLUG,
      section_SLUG,
      HANDLE_tabUrlParams,
      CHANGE_tab,
      OPEN_tab: (tab_SLUG: string) => TOGGLE_tab(tab_SLUG, true),
    });
  };

  USE_perserveStickyNavPosition({
    stickyEls: [sideNav_REF?.current, tinyNavNav_REF?.current],
    active: !IS_menuOpen,
    dependencies: [IS_menuOpen],
  });

  useEffect(() => {
    SELECT_section(params.get("tab"), params.get("section"));
    SET_loaded(true);
  }, []);

  return (
    <>
      <SideNav _ref={sideNav_REF}>
        <LogoCorner_BTN insideTinyNav={false} />

        <li>
          <Btn
            btnType="btn-square"
            className="px-[1.2rem] py-[0.4rem] justify-start text-start z-20 w-full"
            text_STYLES={{ fontWeight: 300, color: "var(--text-white-dimm)" }}
            extraAttributes={['data-light-bottom-border-color="true"']}
            text={`Project: ${project?.name}`}
            onClick={() =>
              SELECT_section(
                project?.tabs?.[0]?.slug,
                project?.tabs?.[0]?.sections?.[0]?.slug
              )
            }
          />
        </li>

        <Project_TABS
          {...{
            project,
            current_TAB,
            activeSectionIndex,
            SELECT_section,
            opened_TABS,
            TOGGLE_tab,
          }}
          hideContent={IS_changingTab || !loaded}
        />

        <li>
          <Btn
            btnType="btn-square"
            className="px-[1.2rem] py-[0.4rem] justify-start text-start z-20 w-full"
            text_STYLES={{
              fontWeight: 300,
              color: "var(--text-white-dimm)",
              flex: 1,
            }}
            extraAttributes={['data-light-top-border-color="true"']}
            text="Collapse all"
            right_ICON={<ICON_arrow direction="up" color="light" small />}
            onClick={CLOSE_allTabs}
          />
        </li>
      </SideNav>

      <div className="flex-1 pb-[50rem]">
        <ProjectMobileNav
          project_NAME={project?.name}
          project_TABTITLE={current_TAB?.title}
          OPEN_mobileMenu={() => SET_mobileMenuOpen(true)}
          OPEN_mobileProjectMenu={() => SET_mobileProjectMenuOpen(true)}
          // _ref={mobileNav_REF}
        />
        <ProjectDesktopNav
          project_NAME={project?.name}
          project_SLUG={slug}
          tab_TITLE={current_TAB?.title}
          OPEN_menu={() => SET_menuOpen(true)}
          _ref={tinyNavNav_REF}
          hideContent={IS_changingTab || !loaded}
        />

        <ProjectTab_SECTIONS
          {...{ current_TAB, sectionRefs }}
          hideContent={IS_changingTab || !loaded}
        />
      </div>

      <MobileMenu_MODAL
        IS_open={IS_mobileMenuOpen}
        CLOSE_modal={() => SET_mobileMenuOpen(false)}
      />
      <MobileProjectMenu_MODAL
        IS_open={IS_mobileProjectOpen}
        CLOSE_modal={() => SET_mobileProjectMenuOpen(false)}
      >
        <Btn
          btnType="btn-square"
          className="px-[1.2rem]  sticky top-0 justify-start text-start z-20 w-full"
          text_STYLES={{ color: "var(--text-white-dimm)" }}
          extraAttributes={['data-light-bottom-border-color="true"']}
          text={`Project: ${project?.name}`}
        />
        {loaded &&
          project?.tabs?.map((_tab) => (
            <Tab_DD
              key={_tab.slug}
              tab={_tab}
              current_TAB={current_TAB}
              activeIndex={activeSectionIndex}
              hideContent={IS_changingTab || !loaded}
              SELECT_section={SELECT_section}
            />
          ))}
      </MobileProjectMenu_MODAL>
      <DesktopMenu_MODAL
        IS_open={IS_menuOpen}
        TOGGLE_open={() => SET_menuOpen(false)}
      >
        <Menu_ITEMS />
      </DesktopMenu_MODAL>
      <div
        className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-[#0000009f] z-50"
        style={{
          transition: "150ms ease-in",
          opacity: IS_menuOpen ? 1 : 0,
          pointerEvents: IS_menuOpen ? "auto" : "none",
        }}
      ></div>
    </>
  );
}

export function ProjectTab_SECTIONS({
  current_TAB,
  hideContent,
  sectionRefs,
}: {
  current_TAB: ProjectTabs_TYPE;
  hideContent: boolean;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
}) {
  return (
    <>
      {current_TAB?.sections?.map((section, index) => (
        <section
          key={section.slug}
          id={section.slug}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          // className={activeSectionIndex === index ? "bg-gray-700" : ""}
          className="pb-[100rem]"
        >
          <div
            className="container"
            style={{
              transition: "100ms",
              opacity: hideContent ? 0 : 1,
              pointerEvents: hideContent ? "none" : "auto",
            }}
          >
            <h1
              dangerouslySetInnerHTML={{
                __html: section.longTab_TITLE,
              }}
            />
          </div>
        </section>
      ))}
    </>
  );
}

export function USE_openedTabs() {
  const [opened_TABS, SET_openedTabs] = useState<string[]>([]);

  const TOGGLE_tab = (slug: string, val?: boolean) => {
    if (typeof val === "boolean" && !val) {
      return SET_openedTabs((prev) => prev.filter((x) => x !== slug));
    }

    SET_openedTabs((prev) =>
      prev.includes(slug) ? prev.filter((x) => x !== slug) : [...prev, slug]
    );
  };

  const CLOSE_allTabs = () => SET_openedTabs([]);

  return { opened_TABS, TOGGLE_tab, CLOSE_allTabs };
}

export function Project_TABS({
  project,
  current_TAB,
  activeSectionIndex,
  hideContent,
  SELECT_section,
  opened_TABS,
  TOGGLE_tab,
}: {
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
  current_TAB: ProjectTabs_TYPE;
  activeSectionIndex: number;
  hideContent: boolean;
  SELECT_section: (
    tab_SLUG?: string | null,
    section_SLUG?: string | null
  ) => void;
  opened_TABS: string[];
  TOGGLE_tab: (slug: string, val?: boolean) => void;
}) {
  return (
    <div
      data-tiny-scrollbar-styles
      className="flex-1 overflow-y-auto pb-[4rem]"
    >
      {project?.tabs?.map((_tab) => (
        <Tab_DD
          key={_tab.slug}
          tab={_tab}
          current_TAB={current_TAB}
          activeIndex={activeSectionIndex}
          hideContent={hideContent}
          SELECT_section={SELECT_section}
          open={opened_TABS.some((x) => x === _tab.slug)}
          toggle={() => TOGGLE_tab(_tab.slug)}
        />
      ))}
    </div>
  );
}

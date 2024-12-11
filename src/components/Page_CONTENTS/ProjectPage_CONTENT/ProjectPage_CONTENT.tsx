"use client";

import { Project_INTROS } from "@/projects/projectIntros";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SideNav from "../../SideNav/SideNav";
import ProjectMobileNav from "../../Nav/ProjectMobileNav/ProjectMobileNav";
import USE_Toggle from "@/hooks/USE_toggle";
import ProjectDesktop_NAV from "@/components/Nav/ProjectDesktop_NAV/ProjectDesktop_NAV";
import DesktopMenu_MODAL from "@/components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import USE_perserveStickyNavPosition from "@/utils/USE_perserveStickyNavPosition";
import USE_handleTabParams from "@/hooks/USE_handleTabParams";
import USE_scrollSpy from "@/hooks/USE_scrollSpy";
import USE_manageTabs from "@/hooks/USE_manageTab";
import GET_tabAndSectionToNavigate from "@/utils/GET_tabAndSectionToNavigate";
import { ProjectTab_SECTIONS } from "@/components/ProjectTab_SECTIONS";
import USE_openedTabs from "@/hooks/USE_openedTabs";
import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import { Tab_DD } from "@/components/Tab_DD/Tab_DD";
import MobileProjectTopBtn_WRAP from "@/components/MobileProjectTopBtn_WRAP";
import DesktopProjectSideNav_BTN from "@/components/DesktopProjectSideNav_BTN";
import DesktopProjectSideNavCollapse_BTN from "@/components/DesktopProjectSideNavCollapse_BTN";
import ModalMenu_UNDERLAY from "@/components/ModalMenu_UNDERLAY";
import { existingProject_SLUGS } from "@/projects/projectTypes";

export default function ProjectPage_CONTENT() {
  const { slug }: { slug: existingProject_SLUGS } = useParams();
  const params = useSearchParams();
  const router = useRouter();
  const sideNav_REF = useRef<HTMLElement | null>(null);
  const tinyNavNav_REF = useRef<HTMLElement | null>(null);
  const [loaded, SET_loaded] = useState(false);
  const { opened_TABS, TOGGLE_tab, COLLAPSE_tabs, OPEN_singleTab } =
    USE_openedTabs();

  const project = useMemo(
    () => ({ ...Project_INTROS[slug], tabs: Project_INTROS[slug]?.GET_tabs() }),
    [slug]
  );

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

  const { activeSectionIndex, sectionRefs } = USE_scrollSpy(current_TAB);

  const SELECT_section = useCallback(
    (
      tab_SLUG?: string | null,
      section_SLUG?: string | null,
      dontToggleTab?: boolean
    ) => {
      const { tab, section } = GET_tabAndSectionToNavigate({
        project,
        tab_SLUG,
        section_SLUG,
      });
      if (IS_mobileProjectOpen) {
        SET_mobileProjectMenuOpen(false);
      }
      HANDLE_tabUrlParams({
        tab_SLUG: tab?.tab_SLUG,
        section_SLUG: section?.section_SLUG,
      });
      CHANGE_tab({ tab, section_SLUG: section?.section_SLUG });
      TOGGLE_tab(tab?.tab_SLUG, dontToggleTab ? false : true);
    },
    [
      CHANGE_tab,
      HANDLE_tabUrlParams,
      SET_mobileProjectMenuOpen,
      IS_mobileProjectOpen,
      TOGGLE_tab,
      project,
    ]
  );

  const RESET_tabs = useCallback(() => {
    SELECT_section(
      project?.tabs?.[0]?.tab_SLUG,
      project?.tabs?.[0]?.sections?.[0]?.section_SLUG
    );
    OPEN_singleTab(project?.tabs?.[0]?.tab_SLUG);
  }, [SELECT_section, project, OPEN_singleTab]);

  USE_perserveStickyNavPosition({
    stickyEls: [sideNav_REF?.current, tinyNavNav_REF?.current],
    active: !IS_menuOpen,
  });

  // initial tab selection
  useEffect(() => {
    if (!loaded) {
      SELECT_section(params.get("tab"), params.get("section"));
      SET_loaded(true);
    }
  }, [SELECT_section, SET_loaded, params, loaded]);

  return (
    <>
      {/* Side nav */}
      <SideNav
        _ref={sideNav_REF}
        extraElsAboveScrollable={
          <DesktopProjectSideNav_BTN
            projet_NAME={project?.name}
            {...{ RESET_tabs }}
          />
        }
        extraElsUnderScrollable={
          <DesktopProjectSideNavCollapse_BTN
            show={opened_TABS?.length > 0}
            {...{ COLLAPSE_tabs }}
          />
        }
      >
        {project?.tabs?.map((_tab) => (
          <Tab_DD
            key={_tab.tab_SLUG}
            tab={_tab}
            current_TAB={current_TAB}
            activeIndex={activeSectionIndex}
            hideContent={IS_changingTab || !loaded}
            SELECT_section={SELECT_section}
            open={opened_TABS.some((x) => x === _tab.tab_SLUG)}
            toggle={() => TOGGLE_tab(_tab.tab_SLUG)}
          />
        ))}
      </SideNav>

      {/* Main content */}
      <div className="flex-1 pb-[50rem]">
        <ProjectMobileNav
          project_NAME={project?.name}
          project_TABTITLE={current_TAB?.tab_NAME}
          OPEN_mobileMenu={() => SET_mobileMenuOpen(true)}
          OPEN_mobileProjectMenu={() => {
            SET_mobileProjectMenuOpen(true);
            OPEN_singleTab(current_TAB.tab_SLUG);
          }}
        />
        <ProjectDesktop_NAV
          project_NAME={project?.name}
          tab_TITLE={current_TAB?.tab_NAME}
          OPEN_menu={() => SET_menuOpen(true)}
          _ref={tinyNavNav_REF}
          hideContent={IS_changingTab || !loaded}
          RESET_tabs={RESET_tabs}
          IS_desktopMenuOpen={IS_menuOpen}
        />

        <ProjectTab_SECTIONS
          {...{ current_TAB, sectionRefs }}
          hideContent={IS_changingTab || !loaded}
        />
      </div>

      {/* Mobile menu modal */}
      <Mobile_MODAL
        title="Menu"
        IS_open={IS_mobileMenuOpen}
        CLOSE_modal={() => SET_mobileMenuOpen(false)}
        animate_LI
      >
        <Menu_ITEMS SHOW_homeBtn />
      </Mobile_MODAL>

      {/* Mobile project menu modal */}
      <Mobile_MODAL
        title="Project Menu"
        IS_open={IS_mobileProjectOpen}
        CLOSE_modal={() => SET_mobileProjectMenuOpen(false)}
        extraElsAboveScrollable={
          <MobileProjectTopBtn_WRAP
            project_NAME={project.name}
            SHOW_collapseBtn={opened_TABS?.length > 0}
            {...{ RESET_tabs, COLLAPSE_tabs }}
          />
        }
      >
        <>
          {project?.tabs?.map((_tab) => (
            <Tab_DD
              key={_tab.tab_SLUG}
              tab={_tab}
              current_TAB={current_TAB}
              activeIndex={activeSectionIndex}
              hideContent={IS_changingTab || !loaded}
              SELECT_section={SELECT_section}
              open={opened_TABS.some((x) => x === _tab.tab_SLUG)}
              toggle={() => TOGGLE_tab(_tab.tab_SLUG)}
              mobile
            />
          ))}
        </>
      </Mobile_MODAL>

      {/* Desktop side menu modal */}
      <DesktopMenu_MODAL
        IS_open={IS_menuOpen}
        TOGGLE_open={() => SET_menuOpen(false)}
      >
        <Menu_ITEMS SHOW_homeBtn />
      </DesktopMenu_MODAL>

      {/* Darkening for desktop side menu modal */}
      <ModalMenu_UNDERLAY open={IS_menuOpen} />
    </>
  );
}

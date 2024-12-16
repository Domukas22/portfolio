"use client";

import { useParams } from "next/navigation";
import { useMemo, useRef } from "react";
import SideNav from "../../SideNav/SideNav";
import ProjectMobileNav from "../../Nav/ProjectMobileNav/ProjectMobileNav";
import USE_Toggle from "@/hooks/USE_toggle";
import ProjectDesktop_NAV from "@/components/Nav/ProjectDesktop_NAV/ProjectDesktop_NAV";
import DesktopMenu_MODAL from "@/components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import USE_perserveStickyNavPosition from "@/utils/USE_perserveStickyNavPosition";
import USE_handleTabChange from "@/hooks/USE_handleTabChange";
import ProjectTab_SECTIONS from "@/components/SECTIONS";
import USE_openedTabs from "@/hooks/USE_openedTabs";
import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import { Tab_DD } from "@/components/Tab_DD/Tab_DD";
import MobileProjectTopBtn_WRAP from "@/components/MobileProjectTopBtn_WRAP";
import DesktopProjectSideNav_BTN from "@/components/DesktopProjectSideNav_BTN";
import DesktopProjectSideNavCollapse_BTN from "@/components/DesktopProjectSideNavCollapse_BTN";
import ModalMenu_UNDERLAY from "@/components/ModalMenu_UNDERLAY";
import { existingProject_SLUGS } from "@/projects/types/project";
import Projects from "@/projects";

export default function ProjectPage_CONTENT() {
  const { slug }: { slug: existingProject_SLUGS } = useParams();

  const sideNav_REF = useRef<HTMLElement | null>(null);
  const tinyNavNav_REF = useRef<HTMLElement | null>(null);

  const { opened_TABS, TOGGLE_tab, COLLAPSE_tabs, OPEN_singleTab } =
    USE_openedTabs();

  const project = useMemo(() => Projects[slug], [slug]);

  const { state: IS_menuOpen, set: SET_menuOpen } = USE_Toggle(false);
  const { state: IS_mobileMenuOpen, set: SET_mobileMenuOpen } =
    USE_Toggle(false);
  const { state: IS_mobileProjectOpen, set: SET_mobileProjectMenuOpen } =
    USE_Toggle(false);

  const {
    CHANGE_tab,
    IS_changingTab,
    current_TAB,
    current_SUBTAB,
    SELECT_veryFirstTab,
  } = USE_handleTabChange({
    project,
    TOGGLE_tab,
    CLOSE_mobileProjectMenu: () => SET_mobileProjectMenuOpen(false),
  });

  /// removed url naviagiton. Simplify everything with a simple tag selection.

  USE_perserveStickyNavPosition({
    stickyEls: [sideNav_REF?.current, tinyNavNav_REF?.current],
    active: !IS_menuOpen,
  });

  return (
    <>
      {/* Side nav */}
      <SideNav
        _ref={sideNav_REF}
        extraElsAboveScrollable={
          <DesktopProjectSideNav_BTN
            projet_NAME={project?.name}
            {...{ SELECT_veryFirstTab }}
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
            hideContent={false}
            open={opened_TABS.some((x) => x === _tab.tab_SLUG)}
            TOGGLE_tab={() => TOGGLE_tab(_tab.tab_SLUG)}
            {...{ current_TAB, current_SUBTAB, CHANGE_tab }}
          />
        ))}
      </SideNav>

      {/* Main content */}
      <div className="pb-[50rem]">
        <ProjectMobileNav
          project_NAME={project?.name}
          project_TABTITLE={
            current_SUBTAB ? current_SUBTAB?.tab_NAME : current_TAB?.tab_NAME
          }
          OPEN_mobileMenu={() => SET_mobileMenuOpen(true)}
          OPEN_mobileProjectMenu={() => {
            SET_mobileProjectMenuOpen(true);
            OPEN_singleTab(current_TAB?.tab_SLUG);
          }}
        />
        <ProjectDesktop_NAV
          project_NAME={project?.name}
          OPEN_menu={() => SET_menuOpen(true)}
          _ref={tinyNavNav_REF}
          hideContent={IS_changingTab}
          current_TAB={current_TAB}
          current_SUBTAB={current_SUBTAB}
          SELECT_veryFirstTab={SELECT_veryFirstTab}
          CHANGE_tab={CHANGE_tab}
          IS_desktopMenuOpen={IS_menuOpen}
        />

        {/* If tab.slug === introduction, insert introduction section */}

        <ProjectTab_SECTIONS
          {...{ current_TAB }}
          current_TAB={current_SUBTAB ? current_SUBTAB : current_TAB}
          hideContent={IS_changingTab}
          project_SLUG={project.slug}
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
            {...{ SELECT_veryFirstTab, COLLAPSE_tabs }}
          />
        }
      >
        <>
          {project?.tabs?.map((_tab) => (
            <Tab_DD
              key={_tab.tab_SLUG}
              tab={_tab}
              hideContent={false}
              open={opened_TABS.some((x) => x === _tab.tab_SLUG)}
              TOGGLE_tab={() => TOGGLE_tab(_tab.tab_SLUG)}
              mobile
              {...{ current_TAB, current_SUBTAB, CHANGE_tab }}
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

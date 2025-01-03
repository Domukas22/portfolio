"use client";

import { useParams } from "next/navigation";
import { useMemo, useRef } from "react";
import SideNav from "../../SideNav/SideNav";
import ProjectMob_NAV from "../../Nav/ProjectMob_NAV/ProjectMob_NAV";
import USE_Toggle from "@/hooks/USE_toggle";
import ProjectDesk_NAV from "@/components/Nav/ProjectDesk_NAV/ProjectDesk_NAV";
import DesktopMenu_MODAL from "@/components/modals/Menu_MODALS/components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import USE_perserveStickyNavPosition from "@/utils/USE_perserveStickyNavPosition";

import ProjectPage_SECTIONS from "@/components/SECTIONS";

import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import { ScrollSpySidenav_BTN } from "@/components/ScrollSpySidenav_BTN/ScrollSpySidenav_BTN";
import DesktopProjectSideNav_BTN from "@/components/DesktopProjectSideNav_BTN";
import DesktopProjectSideNavCollapse_BTN from "@/components/DesktopProjectSideNavCollapse_BTN";
import ModalMenu_UNDERLAY from "@/components/ModalMenu_UNDERLAY";
import { existingProject_SLUGS } from "@/projects/types/project";
import Projects from "@/projects";
import MobProjectMenuProject_BTN from "@/components/MobProjectMenuProject_BTN";
import USE_scrollSpy from "@/hooks/USE_scrollSpy";
import SCROLL_to from "@/utils/SCROLL_to";

export default function ProjectPage_CONTENT() {
  const { slug }: { slug: existingProject_SLUGS } = useParams();
  const sideNav_REF = useRef<HTMLElement | null>(null);
  const tinyNavNav_REF = useRef<HTMLElement | null>(null);

  const project = useMemo(() => Projects[slug], [slug]);

  const { activeSectionIndex, sectionRefs } = USE_scrollSpy(project?.sections);

  const { state: IS_menuOpen, set: SET_menuOpen } = USE_Toggle(false);
  const { state: IS_mobileMenuOpen, set: SET_mobileMenuOpen } =
    USE_Toggle(false);
  const { state: IS_mobileProjectOpen, set: SET_mobileProjectMenuOpen } =
    USE_Toggle(false);

  /// removed url naviagiton. Simplify everything with a simple tag selection.

  USE_perserveStickyNavPosition({
    // TODO --> jsut make the tinyNavNav_REF element to position "fixed"
    stickyEls: [tinyNavNav_REF?.current],
    active: !IS_menuOpen,
  });

  return (
    <>
      {/* Side nav */}
      <SideNav
        _ref={sideNav_REF}
        extraElsAboveScrollable={
          <DesktopProjectSideNav_BTN projet_NAME={project?.name} />
        }
        extraElsUnderScrollable={
          <DesktopProjectSideNavCollapse_BTN
            show={false}
            {...{ COLLAPSE_tabs: () => {} }}
          />
        }
      >
        {project?.sections?.map((section, index) => (
          <ScrollSpySidenav_BTN
            key={section.section_SLUG}
            text={section.section_NAME}
            onClick={() => SCROLL_to({ target_ID: section.section_SLUG })}
            active={activeSectionIndex === index}
          />
        ))}
      </SideNav>

      {/* Main content */}
      <div className="pb-[50rem]">
        <ProjectMob_NAV
          project_NAME={project?.name}
          OPEN_mobMenu={() => SET_mobileMenuOpen(true)}
          OPEN_mobProjectMenu={() => {
            SET_mobileProjectMenuOpen(true);
            // OPEN_singleTab(current_TAB?.tab_SLUG);
          }}
        />
        <ProjectDesk_NAV
          project_NAME={project?.name}
          OPEN_deskMenu={() => SET_menuOpen(true)}
          _ref={tinyNavNav_REF}
          IS_deskMenuOpen={IS_menuOpen}
        />

        <ProjectPage_SECTIONS
          sections={project?.sections}
          project_SLUG={project?.slug}
          sectionRefs={sectionRefs}
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
          <MobProjectMenuProject_BTN
            project_NAME={project?.name}
            onClick={() => {}}
          />
        }
      >
        <>
          {project?.sections?.map((section, index) => (
            <ScrollSpySidenav_BTN
              key={section.section_SLUG}
              text={section.section_NAME}
              onClick={() => {
                SCROLL_to({ target_ID: section.section_SLUG });
                SET_mobileProjectMenuOpen(false);
              }}
              active={activeSectionIndex === index}
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

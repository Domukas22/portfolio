"use client";

import { Projects } from "@/projects";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SideNav from "../../SideNav/SideNav";
import ProjectMobileNav from "../../Nav/ProjectMobileNav/ProjectMobileNav";
import USE_Toggle from "@/hooks/USE_toggle";
import Btn from "../../Btn/Btn";
import ProjectDesktopNav from "@/components/Nav/ProjectDesktopNav/ProjectDesktopNav";
import DesktopMenu_MODAL from "@/components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import USE_perserveStickyNavPosition from "@/utils/USE_perserveStickyNavPosition";
import USE_handleTabParams from "@/hooks/USE_handleTabParams";
import USE_scrollSpy from "@/hooks/USE_scrollSpy";
import USE_manageTabs from "@/hooks/USE_manageTab";
import GET_tabAndSectionToNavigate from "@/utils/GET_tabAndSectionToNavigate";
import { ICON_arrow } from "@/components/Icons/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectTab_SECTIONS } from "@/components/ProjectTab_SECTIONS";
import USE_openedTabs from "@/hooks/USE_openedTabs";
import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import { Tab_DD } from "@/components/Tab_DD/Tab_DD";

export default function ProjectPage_CONTENT() {
  const { slug }: { slug: string } = useParams();
  const project = useMemo(
    () => ({ ...Projects[slug], tabs: Projects[slug]?.GET_tabs() }),
    [slug]
  );

  const params = useSearchParams();
  const router = useRouter();

  const sideNav_REF = useRef<HTMLElement | null>(null);
  const tinyNavNav_REF = useRef<HTMLElement | null>(null);

  const [loaded, SET_loaded] = useState(false);
  const { opened_TABS, TOGGLE_tab, CLOSE_allTabs, OPEN_singleTab } =
    USE_openedTabs();

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
    (tab_SLUG?: string | null, section_SLUG?: string | null) => {
      const { tab, section } = GET_tabAndSectionToNavigate({
        project,
        tab_SLUG,
        section_SLUG,
      });

      HANDLE_tabUrlParams({ tab_SLUG: tab?.slug, section_SLUG: section?.slug });
      CHANGE_tab({ tab, section_SLUG: section?.slug });
      TOGGLE_tab(tab?.slug, true);
      if (IS_mobileProjectOpen) {
        SET_mobileProjectMenuOpen(false);
      }
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
      project?.tabs?.[0]?.slug,
      project?.tabs?.[0]?.sections?.[0]?.slug
    );
    OPEN_singleTab(project?.tabs?.[0]?.slug);
  }, [SELECT_section, project, OPEN_singleTab]);

  USE_perserveStickyNavPosition({
    stickyEls: [sideNav_REF?.current, tinyNavNav_REF?.current],
    active: !IS_menuOpen,
  });

  useEffect(() => {
    if (!loaded) {
      SELECT_section(params.get("tab"), params.get("section"));
      SET_loaded(true);
    }
  }, [SELECT_section, SET_loaded, params, loaded]);

  return (
    <>
      <SideNav
        _ref={sideNav_REF}
        extraElsAboveScrollable={
          <li>
            <Btn
              btnType="btn-square"
              className="px-[1.2rem] py-[0.4rem] justify-start text-start z-20 w-full"
              text_STYLES={{
                fontWeight: 300,
                color: "var(--text-white-light)",
              }}
              extraAttributes={['data-light-bottom-border-color="true"']}
              text={`Project: ${project?.name}`}
              onClick={RESET_tabs}
            />
          </li>
        }
        extraElsUnderScrollable={
          <AnimatePresence>
            {opened_TABS?.length > 0 && (
              <motion.div
                style={{ overflow: "hidden" }}
                initial={{ opacity: 0, translateY: "5rem" }}
                animate={{ opacity: 1, translateY: "0rem" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                exit={{ opacity: 0, translateY: "5rem" }}
                key={"collapse-all-button"}
              >
                <li>
                  <Btn
                    btnType="btn-square"
                    className="px-[1.2rem] py-[0.4rem] justify-start text-start z-20 w-full"
                    text_STYLES={{
                      fontWeight: 300,
                      color: "var(--text-white-light)",
                      flex: 1,
                    }}
                    extraAttributes={['data-light-top-border-color="true"']}
                    text="Collapse all"
                    right_ICON={
                      <ICON_arrow direction="up" color="light" small />
                    }
                    onClick={CLOSE_allTabs}
                  />
                </li>
              </motion.div>
            )}
          </AnimatePresence>
        }
      >
        {project?.tabs?.map((_tab) => (
          <Tab_DD
            key={_tab.slug}
            tab={_tab}
            current_TAB={current_TAB}
            activeIndex={activeSectionIndex}
            hideContent={IS_changingTab || !loaded}
            SELECT_section={SELECT_section}
            open={opened_TABS.some((x) => x === _tab.slug)}
            toggle={() => TOGGLE_tab(_tab.slug)}
          />
        ))}
      </SideNav>

      <div className="flex-1 pb-[50rem]">
        <ProjectMobileNav
          project_NAME={project?.name}
          project_TABTITLE={current_TAB?.title}
          OPEN_mobileMenu={() => SET_mobileMenuOpen(true)}
          OPEN_mobileProjectMenu={() => {
            SET_mobileProjectMenuOpen(true);
            OPEN_singleTab(current_TAB.slug);
          }}
          // _ref={mobileNav_REF}
        />
        <ProjectDesktopNav
          project_NAME={project?.name}
          tab_TITLE={current_TAB?.title}
          OPEN_menu={() => SET_menuOpen(true)}
          _ref={tinyNavNav_REF}
          hideContent={IS_changingTab || !loaded}
          RESET_tabs={RESET_tabs}
        />

        <ProjectTab_SECTIONS
          {...{ current_TAB, sectionRefs }}
          hideContent={IS_changingTab || !loaded}
        />
      </div>

      {/* Mobile menu modal */}
      <Mobile_MODAL
        IS_open={IS_mobileMenuOpen}
        CLOSE_modal={() => SET_mobileMenuOpen(false)}
        animate_LI
      >
        <Menu_ITEMS SHOW_homeBtn />
      </Mobile_MODAL>

      {/* Project menu modal */}
      <Mobile_MODAL
        IS_open={IS_mobileProjectOpen}
        CLOSE_modal={() => SET_mobileProjectMenuOpen(false)}
        extraElsAboveScrollable={
          <div
            className="flex w-full h-[5rem]"
            style={{
              borderBottom: "var(--border-light)",
            }}
          >
            <li className="flex-1 h-full">
              <Btn
                btnType="btn-square"
                className="px-[1.2rem] justify-start text-start z-20 w-full h-full"
                text_STYLES={{ color: "var(--text-white-light)" }}
                // extraAttributes={['data-light-bottom-border-color="true"']}
                text={`Project: ${project.name}`}
                onClick={() => {
                  SELECT_section(
                    project?.tabs?.[0]?.slug,
                    project?.tabs?.[0]?.sections?.[0]?.slug
                  );
                }}
              />
            </li>

            <AnimatePresence>
              {opened_TABS?.length > 0 && (
                <motion.li
                  style={{ overflow: "hidden" }}
                  initial={{ opacity: 0, translateX: "5rem" }}
                  animate={{ opacity: 1, translateX: "0rem" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  exit={{ opacity: 0, translateX: "5rem" }}
                  key={"collapse-all-button"}
                  className="h-full"
                >
                  <Btn
                    btnType="btn-square"
                    className="px-[2rem]  justify-start text-start z-20 w-full h-full"
                    extraAttributes={['data-light-left-border-color="true"']}
                    right_ICON={<ICON_arrow direction="up" color="light" />}
                    onClick={CLOSE_allTabs}
                  />
                </motion.li>
              )}
            </AnimatePresence>
          </div>
        }
      >
        <>
          {project?.tabs?.map((_tab) => (
            <Tab_DD
              key={_tab.slug}
              tab={_tab}
              current_TAB={current_TAB}
              activeIndex={activeSectionIndex}
              hideContent={IS_changingTab || !loaded}
              SELECT_section={SELECT_section}
              open={opened_TABS.some((x) => x === _tab.slug)}
              toggle={() => TOGGLE_tab(_tab.slug)}
            />
          ))}
        </>
      </Mobile_MODAL>

      {/* Desktop menu modal */}
      <DesktopMenu_MODAL
        IS_open={IS_menuOpen}
        TOGGLE_open={() => SET_menuOpen(false)}
      >
        <Menu_ITEMS SHOW_homeBtn />
      </DesktopMenu_MODAL>

      <div
        className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-[#0000009f] z-50"
        style={{
          transition: "150ms ease-in",
          opacity: IS_menuOpen ? 1 : 0,
          pointerEvents: IS_menuOpen ? "auto" : "none",
        }}
      />
    </>
  );
}

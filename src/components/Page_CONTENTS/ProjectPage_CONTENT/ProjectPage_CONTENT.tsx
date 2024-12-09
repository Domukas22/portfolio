"use client";

import { Projects, ProjectSection_TYPE, ProjectTabs_TYPE } from "@/projects";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import LogoCorner_BTN from "../../LogoCorner_BTN/LogoCorner_BTN";
import MobileMenu_MODAL from "../../MobileMenu_MODAL/MobileMenu_MODAL";
import { useRouter, useSearchParams } from "next/navigation";
import SideNav from "../../SideNav/SideNav";
import ProjectMobileNav from "../../Nav/ProjectMobileNav/ProjectMobileNav";
import USE_Toggle from "@/hooks/USE_toggle";
import Btn from "../../Btn/Btn";
import ProjectDesktopNav from "@/components/Nav/ProjectDesktopNav/ProjectDesktopNav";
import SET_urlParams from "@/utils/SET_urlParams";
import { Tab_DD } from "@/components/Tab_DD/Tab_DD";
import HANDLE_projectTabsOnLoad from "@/utils/HANDLE_projectTabsOnLoad";
import MobileProjectMenu_MODAL from "@/components/MobileProjectMenu_MODAL/MobileProjectMenu_MODAL";
import DesktopMenu_MODAL from "@/components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import HANDLE_stickyNavTop from "@/utils/HANDLE_stickyNavTop";
import SCROLL_to from "@/utils/SCROLL_to";

// ===================================================================
// Todo: The loading AND the manual tab switching should both worh with same funciton
// ---> when swtichign manually, we simply change the url.
// ---> a useEffect hook then adjusts the tab state

// ---> sidenote, the opened/closed tags should be handled here, not in Tab_DD
// ---> create am array state of currently open tabs
// ===================================================================

export default function ProjectPage_CONTENT() {
  const { slug }: { slug: string } = useParams();
  const project = { ...Projects[slug], tabs: Projects[slug]?.GET_tabs() };
  const params = useSearchParams();
  const router = useRouter();

  const sideNav_REF = useRef<HTMLElement | null>(null);
  const tinyNavNav_REF = useRef<HTMLElement | null>(null);

  const [hideContent, SET_hideContent] = useState(true);
  const [hideTabs, SET_hideTabs] = useState(true);
  const [current_TAB, SET_currentTab] = useState(project?.tabs?.[0]);

  const { activeSectionIndex, sectionRefs } = USE_scrollSpy({
    tab: current_TAB,
  });

  const { state: IS_menuOpen, SET_state: SET_menuOpen } = USE_Toggle(false);
  const { state: IS_mobileMenuOpen, SET_state: SET_mobileMenuOpen } =
    USE_Toggle(false);
  const { state: IS_mobileProjectOpen, SET_state: SET_mobileProjectMenuOpen } =
    USE_Toggle(false);

  const CHANGE_tab = (tab: ProjectTabs_TYPE) => {
    SET_currentTab(tab);
    SET_urlParams({
      params,
      router,
      toDelete_ARR: ["tab"],
      toAdd_ARR: [["tab", tab?.slug]],
    });
  };

  const navigate = ({
    incoming_TAB,
    section,
  }: {
    incoming_TAB: ProjectTabs_TYPE;
    section: ProjectSection_TYPE;
  }) => {
    if (hideContent) return;

    if (current_TAB?.slug === incoming_TAB?.slug) {
      SCROLL_to({ target_ID: section?.slug });
      return;
    }

    SET_mobileProjectMenuOpen(false);
    SET_hideContent(true);

    setTimeout(() => {
      CHANGE_tab(incoming_TAB);

      setTimeout(() => {
        SCROLL_to({ target_ID: section?.slug, instant: true });
        setTimeout(() => {
          SET_hideContent(false);
        }, 100);
      }, 1);
    }, 101); // opacity of the content changes in 100ms
  };

  useEffect(() => {
    HANDLE_projectTabsOnLoad({
      tab: current_TAB,
      CHANGE_tab,
      project,
      params,
      router,
    });
    SET_hideTabs(false);
    SET_hideContent(false);
  }, []);

  useEffect(
    () =>
      // when desktop modal opens, adjust the top value of the refs, sot hey dont disappear
      HANDLE_stickyNavTop({
        stickyEls: [sideNav_REF?.current, tinyNavNav_REF?.current],
        IS_0: !IS_menuOpen,
      }),
    [IS_menuOpen]
  );

  return (
    <>
      <SideNav _ref={sideNav_REF}>
        <LogoCorner_BTN insideTinyNav={false} />

        <li>
          <Btn
            btnType="btn-square"
            className="px-[1.2rem] py-[0.4rem] sticky top-[var(--tiny-nav-height-plus-1)]  justify-start text-start z-20"
            text_STYLES={{ fontWeight: 300, color: "var(--text-white-dimm)" }}
            extraAttributes={['data-light-bottom-border-color="true"']}
            text={`Project: ${project?.name}`}
          />
        </li>
        {project?.tabs?.map((_tab) => (
          <Tab_DD
            key={_tab.slug}
            current_TAB={current_TAB}
            activeIndex={activeSectionIndex}
            tab={_tab}
            {...{
              navigate,
              hideContent,
              hideTabs,
            }}
          />
        ))}
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
          {...{ hideContent }}
        />

        {/* Render sections */}
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
        {!hideTabs &&
          project?.tabs?.map((_tab) => (
            <Tab_DD
              key={_tab.slug}
              current_TAB={current_TAB}
              activeIndex={activeSectionIndex}
              tab={_tab}
              {...{
                navigate,
                SET_loading: SET_hideTabs,
                hideTabs,
                hideContent,
                SET_mobileProjectMenuOpen,
              }}
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

function USE_scrollSpy({ tab }: { tab: ProjectTabs_TYPE }) {
  // Create an array of section IDs for the observer
  const sectionIds = useMemo(
    () => tab?.sections?.map((section) => section.slug),
    [tab]
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>([]); // Explicitly declare the type

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  // Scroll Spy Logic: IntersectionObserver
  useEffect(() => {
    // Check if IntersectionObserver is available
    if (!("IntersectionObserver" in window)) {
      console.warn("IntersectionObserver is not supported in this browser.");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const index = sectionIds?.indexOf(visibleSection.target.id);
          if (index !== -1) {
            setActiveSectionIndex(index); // Update active section index
          }
        }
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    // Safely observe only valid elements
    sectionRefs.current.forEach((section) => {
      if (section instanceof Element) {
        observer.observe(section);
      } else {
        console.warn("Skipping invalid section:", section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section instanceof Element) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionIds]);

  return { activeSectionIndex, sectionRefs };
}

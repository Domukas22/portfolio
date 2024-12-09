"use client";

import { Projects } from "@/projects";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LogoCorner_BTN from "../../LogoCorner_BTN/LogoCorner_BTN";
import MobileMenu_MODAL from "../../MobileMenu_MODAL/MobileMenu_MODAL";

import { useRouter, useSearchParams } from "next/navigation";

import SideNav from "../../SideNav/SideNav";
import ProjectMobileNav from "../../Nav/ProjectMobileNav/ProjectMobileNav";
import USE_Toggle from "@/hooks/USE_toggle";

import Btn from "../../Btn/Btn";
import Image from "next/image";
import ProjectDesktopNav from "@/components/Nav/ProjectDesktopNav/ProjectDesktopNav";
import SET_urlParams from "@/utils/SET_urlParams";
import ProjectTab_BTNS from "@/components/ProjectTab_BTNS/ProjectTab_BTNS";
import HANDLE_projectTabsOnLoad from "@/utils/HANDLE_projectTabsOnLoad";

// ===================================================================
// TODO ==> implement scroll spy: https://blog.maximeheckel.com/posts/scrollspy-demystified/
// ===================================================================

export default function ProjectPage_CONTENT() {
  const { slug }: { slug: string } = useParams();
  const project = { ...Projects[slug], tabs: Projects[slug]?.GET_tabs() };
  const params = useSearchParams();
  const router = useRouter();

  const { state: IS_menuOpen, SET_state: SET_menuOpen } = USE_Toggle(false);
  const { state: IS_mobileMenuOpen, SET_state: SET_mobileMenuOpen } =
    USE_Toggle(false);
  const { state: IS_mobileProjectOpen, SET_state: SET_mobileProjectMenuOpen } =
    USE_Toggle(false);

  const [tab, SET_tab] = useState(project?.tabs?.[0]);

  const CHANGE_tab = (tab) => {
    SET_tab(tab);
    SET_urlParams({
      params,
      router,
      toDelete_ARR: ["tab"],
      toAdd_ARR: [["tab", tab?.slug]],
    });
  };

  useEffect(
    () =>
      HANDLE_projectTabsOnLoad({ tab, CHANGE_tab, project, params, router }),
    []
  );

  // -------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------------
  const [sectionRefs, setSectionRefs] = useState<HTMLElement[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(-1);

  // Use the useScrollspy hook
  const activeIndex = useScrollspy(sectionRefs, { offset: 100 });

  useEffect(() => {
    // Update the active section index
    setActiveSectionIndex(activeIndex);
    console.log("Active section index updated:", activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const sections = tab?.sections?.map((section) =>
      document.getElementById(section.slug)
    );
    setSectionRefs(sections || []); // Store in state
  }, [tab]);

  // -------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <SideNav>
        <LogoCorner_BTN insideTinyNav={false} />

        <Btn
          btnType="btn-square"
          className="px-[1.2rem] py-[0.4rem] sticky top-[var(--nav-height)] justify-start text-start text-[var(--text-white-dimm)] font-light"
          extraAttributes={['data-light-bottom-border-color="true"']}
          text={`Project: ${project?.name}`}
        />

        <ProjectTab_BTNS
          all_TABS={project?.tabs}
          current_TAB={tab}
          activeIndex={activeSectionIndex}
          {...{ CHANGE_tab }}
        />
      </SideNav>

      <div className="flex-1 pb-[50rem]">
        <ProjectMobileNav
          project_NAME={project?.name}
          project_TABTITLE={tab?.title}
          OPEN_mobileMenu={() => SET_mobileMenuOpen(true)}
          OPEN_mobileProjectMenu={() => SET_mobileProjectMenuOpen(true)}
        />
        <ProjectDesktopNav
          project_NAME={project?.name}
          project_SLUG={slug}
          tab_TITLE={tab?.title}
          OPEN_menu={() => SET_menuOpen(true)}
        />

        <div className="container">
          <Image
            width={2000}
            height={450}
            className="w-full h-[40rem] object-cover rounded-[2.4rem]"
            src={`/projects/headers/${project.header_IMG}`}
            alt=""
          />
        </div>

        {tab?.sections?.map((section) => (
          <section
            key={section.slug}
            id={section.slug}
            className="pb-[50rem] border-red-200 border-2"
          >
            <div className="container">
              <h1
                dangerouslySetInnerHTML={{
                  __html: section.longTab_TITLE,
                }}
              />
            </div>
          </section>
        ))}

        <div className="fixed z-50 top-0 w-full bg-gray-500 h-[100px] opacity-45"></div>
      </div>

      <MobileMenu_MODAL
        IS_open={IS_mobileMenuOpen}
        CLOSE_modal={() => SET_mobileMenuOpen(false)}
      />
    </>
  );
}

// =============================================================================================
// =============================================================================================
// =============================================================================================

function useScrollspy(
  elements: HTMLElement[],
  options?: { offset?: number; root?: HTMLElement }
): number {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const rootMargin = `-${options?.offset || 0}px 0px 0px 0px`;
  const observer = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        // Track scroll direction (down or up)
        const scrollDirection =
          window.scrollY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = window.scrollY;

        // Sort entries based on their position in the viewport
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          return;
        }

        // Find the entry that is most visible based on scroll direction
        const mostVisible = visibleEntries.reduce((prev, current) => {
          if (scrollDirection === "down") {
            return prev.boundingClientRect.top > current.boundingClientRect.top
              ? prev
              : current;
          } else {
            return prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current;
          }
        });

        const index = elements.findIndex((el) => el === mostVisible.target);

        if (index !== -1) {
          setCurrentIndex(index);
        }
      },
      { root: options?.root || null, rootMargin }
    );

    const { current: currentObserver } = observer;

    // Observe the elements
    elements.forEach((el) => {
      if (el) {
        currentObserver.observe(el);
      }
    });

    return () => currentObserver.disconnect();
  }, [elements, rootMargin, options?.root]);

  return currentIndex;
}

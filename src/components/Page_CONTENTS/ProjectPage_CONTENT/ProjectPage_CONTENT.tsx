///
//
//

"use client";

import { Projects } from "@/projects";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
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
    () => HANDLE_tabsOnLoad({ tab, CHANGE_tab, project, params, router }),
    []
  );

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
          {...{ CHANGE_tab }}
        />
      </SideNav>

      <div className="flex-1">
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
        {/* <p
          dangerouslySetInnerHTML={{
            __html: tab?.sections?.[0]?.longTab_TITLE,
          }}
        /> */}
        {tab?.sections?.map((section) => (
          <section key={section.slug} id={section.slug}>
            <div className="container">
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
    </>
  );
}

function HANDLE_tabsOnLoad({ tab, CHANGE_tab, project, params, router }) {
  const tabUrlSlug = params.get("tab");
  const first_TAB = project?.tabs?.[0];

  if (!tabUrlSlug) {
    if (!tab) return CHANGE_tab(first_TAB);
    return SET_urlParams({
      params,
      router,
      toDelete_ARR: ["tab"],
      toAdd_ARR: [["tab", tab?.slug]],
    });
  }

  if (!tab) {
    const targetTab = project?.tabs?.find((tab) => tab.slug === tabUrlSlug);
    if (!targetTab) return CHANGE_tab(first_TAB);

    return CHANGE_tab(targetTab);
  }

  if (tab?.slug !== tabUrlSlug) {
    const targetTab = project?.tabs?.find((tab) => tab.slug === tabUrlSlug);
    if (!targetTab) return CHANGE_tab(first_TAB);
    return CHANGE_tab(targetTab);
  }
}

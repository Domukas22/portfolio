//
//
//

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import SET_urlParams from "./SET_urlParams";
import { ProjectIntro_TYPE, ProjectTabs_TYPE } from "@/projects";

interface HandleProjectTabsOnLoad_TYPE {
  tab: ProjectTabs_TYPE;
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
  router: AppRouterInstance;
  params: URLSearchParams;
  CHANGE_tab: (tab: ProjectTabs_TYPE) => void;
}

export default function HANDLE_projectTabsOnLoad({
  tab,
  CHANGE_tab,
  project,
  params,
  router,
}: HandleProjectTabsOnLoad_TYPE) {
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

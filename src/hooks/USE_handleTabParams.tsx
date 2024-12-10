//
//
//

import {
  ProjectIntro_TYPE,
  ProjectTabs_TYPE,
  ProjectSection_TYPE,
} from "@/projects";
import SET_urlParams from "@/utils/SET_urlParams";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface UseHandleTabParams_TYPE {
  router: AppRouterInstance;
  params: URLSearchParams;
  project: ProjectIntro_TYPE & { tabs: ProjectTabs_TYPE[] };
}

export interface HandleTabUrlParams_TYPE {
  tab_SLUG?: string | null;
  section_SLUG?: string | null;
}

export interface HandleTabParams_TYPE {
  tab: ProjectTabs_TYPE;
  section?: ProjectSection_TYPE | undefined;
}

export default function USE_handleTabParams({
  params,
  router,
}: UseHandleTabParams_TYPE) {
  function HANDLE_tabUrlParams({
    tab_SLUG,
    section_SLUG,
  }: HandleTabUrlParams_TYPE) {
    const toAdd_ARR: [string, string][] = [];

    if (tab_SLUG) {
      toAdd_ARR.push(["tab", tab_SLUG]);
    }

    if (section_SLUG) {
      toAdd_ARR.push(["section", section_SLUG]);
    }

    SET_urlParams({
      params,
      router,
      clearAll: true,
      toAdd_ARR,
    });
  }

  return { HANDLE_tabUrlParams };
}

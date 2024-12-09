//
//
//

import SET_urlParams from "./SET_urlParams";

export default function HANDLE_projectTabsOnLoad({ tab, CHANGE_tab, project, params, router }) {
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
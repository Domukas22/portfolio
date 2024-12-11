//
//
//

import { useState, useCallback } from "react";

export default function USE_openedTabs() {
  const [opened_TABS, SET_openedTabs] = useState<string[]>([]);

  const TOGGLE_tab = useCallback((slug: string | undefined, val?: boolean) => {
    if (!slug) return;

    SET_openedTabs((prev) => {
      const isOpen = prev.includes(slug);

      // Handle explicitly provided boolean `val`
      if (typeof val === "boolean") {
        if (val && !isOpen) {
          return [...prev, slug]; // Add if not already open
        } else if (!val && isOpen) {
          return prev.filter((x) => x !== slug); // Remove if open
        }
        return prev; // No change
      }

      // Toggle if `val` is not provided
      return isOpen ? prev.filter((x) => x !== slug) : [...prev, slug];
    });
  }, []);

  const COLLAPSE_tabs = useCallback(() => SET_openedTabs([]), []);

  const OPEN_singleTab = useCallback((tab_SLUG: string) => {
    SET_openedTabs([tab_SLUG]);
    console.log(tab_SLUG);
  }, []);

  return { opened_TABS, TOGGLE_tab, COLLAPSE_tabs, OPEN_singleTab };
}

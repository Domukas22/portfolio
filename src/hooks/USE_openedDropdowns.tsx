//
//
//

import { useState, useCallback } from "react";

export default function USE_openedDropdowns() {
  const [opened_DDs, SET_openedDDs] = useState<string[]>([]);

  const TOGGLE_dd = useCallback((slug: string | undefined, val?: boolean) => {
    if (!slug) return;

    SET_openedDDs((prev) => {
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

  const COLLAPSE_dropdowns = useCallback(() => SET_openedDDs([]), []);

  const OPEN_singleDD = useCallback((tab_SLUG: string | undefined) => {
    if (tab_SLUG) SET_openedDDs([tab_SLUG]);
  }, []);

  return {
    opened_DDs,
    TOGGLE_dd,
    COLLAPSE_dropdowns,
    OPEN_singleDD,
  };
}

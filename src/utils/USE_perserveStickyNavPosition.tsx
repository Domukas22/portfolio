//
//
//

import { useEffect } from "react";

export default function USE_perserveStickyNavPosition({
  active,
  stickyEls,
}: {
  active: boolean;
  stickyEls: (HTMLElement | null)[];
}) {
  useEffect(() => {
    if (active) {
      stickyEls?.forEach((el) => {
        if (el?.style) el.style.top = "0";
      });
    } else {
      const scrolled = window.scrollY;

      stickyEls?.forEach((el) => {
        if (el?.style) el.style.top = `${scrolled}px`;
      });
    }
  }, [active, stickyEls]);
}

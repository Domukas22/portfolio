//
//
//

export default function HANDLE_stickyNavTop({
  stickyEls,
  IS_0,
}: {
  stickyEls: (HTMLElement | null)[];
  IS_0: boolean;
}) {
  if (IS_0) {
    stickyEls?.forEach((el) => {
      if (el?.style) el.style.top = "0";
    });
  } else {
    const scrolled = window.scrollY;

    stickyEls?.forEach((el) => {
      if (el?.style) el.style.top = `${scrolled}px`;
    });
  }
}

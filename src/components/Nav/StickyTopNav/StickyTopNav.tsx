//
//
//

import React from "react";
import css from "./StickyTopNav.module.css";

export default function StickyTopNav({
  children,
  targetClass,
  tiny = false,
  _ref,
}: {
  children: React.ReactNode;
  targetClass?: string;
  tiny?: boolean;
  _ref?: React.RefObject<HTMLElement>;
}) {
  return (
    <nav
      className={`${css.stickyNav} ${targetClass}`}
      data-tiny={tiny}
      ref={_ref}
    >
      <ul>{children}</ul>
    </nav>
  );
}

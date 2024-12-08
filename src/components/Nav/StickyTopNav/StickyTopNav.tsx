//
//
//

import React from "react";
import css from "./StickyTopNav.module.css";

export default function StickyTopNav({
  children,
  targetClass,
  tiny = false,
}: {
  children: React.ReactNode;
  targetClass?: string;
  tiny?: boolean;
}) {
  return (
    <nav className={`${css.stickyNav} ${targetClass}`} data-tiny={tiny}>
      <ul>{children}</ul>
    </nav>
  );
}

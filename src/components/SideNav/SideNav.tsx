//
//
//

import React from "react";
import css from "./SideNav.module.css";

export default function SideNav({
  children,
  _ref,
}: {
  children: React.ReactNode;
  _ref?: React.RefObject<HTMLElement>;
}) {
  return (
    <nav className={css.sidenav} ref={_ref}>
      <ul>{children}</ul>
    </nav>
  );
}

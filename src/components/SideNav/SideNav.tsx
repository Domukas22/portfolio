//
//
//

import React from "react";
import css from "./SideNav.module.css";

export default function SideNav({ children }: { children: React.ReactNode }) {
  return (
    <nav className={css.sidenav}>
      <ul>{children}</ul>
    </nav>
  );
}

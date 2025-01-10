//
//
//

import React from "react";
import css from "./SideNav.module.css";

export default function SideNav({
  children,

  extraElsAboveScrollable,
  extraElsUnderScrollable,
}: {
  children: React.ReactNode;
  extraElsAboveScrollable?: React.ReactNode;
  extraElsUnderScrollable?: React.ReactNode;
}) {
  return (
    <nav className={css.sidenav}>
      <ul className="h-full flex flex-col">
        {extraElsAboveScrollable}
        <div
          data-tiny-scrollbar-styles
          className="flex-1 overflow-y-auto pb-[4rem]"
        >
          {children}
        </div>
        {extraElsUnderScrollable}
      </ul>
    </nav>
  );
}

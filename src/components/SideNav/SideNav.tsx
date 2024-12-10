//
//
//

import React from "react";
import css from "./SideNav.module.css";
import LogoCorner_BTN from "../LogoCorner_BTN/LogoCorner_BTN";

export default function SideNav({
  children,
  _ref,
  extraElsAboveScrollable,
  extraElsUnderScrollable,
}: {
  children: React.ReactNode;
  extraElsAboveScrollable?: React.ReactNode;
  extraElsUnderScrollable?: React.ReactNode;
  _ref?: React.RefObject<HTMLElement>;
}) {
  return (
    <nav className={css.sidenav} ref={_ref}>
      <ul className="h-full flex flex-col">
        <LogoCorner_BTN />
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

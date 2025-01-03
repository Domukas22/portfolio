//
//
//

"use client";

import Link from "next/link";

import LogoCorner_BTN from "@/components/LogoCorner_BTN/LogoCorner_BTN";
import StickyTopNav from "../StickyTopNav/StickyTopNav";
import css from "./RegularMobileNav.module.css";
import MobileMenu_BTN from "@/components/MobileMenu_BTN";

interface RegularMobileNav_PROPS {
  OPEN_mobMenu: () => void;
}

export default function RegularMobileNav({
  OPEN_mobMenu = () => {},
}: RegularMobileNav_PROPS) {
  return (
    <StickyTopNav targetClass={css.regularMobileNav}>
      <LogoCorner_BTN flex={1} SHOW_bottomBorder={false} />

      <li data-btn-projects>
        <Link
          href="/"
          className="btn-square-light"
          data-light-left-border-color="true"
        >
          <span>My projects</span>
        </Link>
      </li>
      {/* <li data-btn-contact>
        <Link
          href="/"
          className="btn-square-light"
          data-light-left-border-color="true"
        >
          <span>Contact</span>
        </Link>
      </li> */}
      <MobileMenu_BTN {...{ OPEN_mobMenu }} />
    </StickyTopNav>
  );
}

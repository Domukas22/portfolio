//
//
//

"use client";

import Link from "next/link";
import css from "./MobileNav.module.css";
import Btn from "@/components/Btn/Btn";
import { ICON_dropDownArrow } from "@/components/Icons/Icons";

interface MobileNav_PROPS {
  TOGGLE_mobileMenu: () => void;
}

export default function MobileNav({
  TOGGLE_mobileMenu = () => {},
}: MobileNav_PROPS) {
  return (
    <nav className={css.mobileNav}>
      <ul>
        <Link href="/" className={css.logo}>
          <div className={css.logo_IMG} />
          <span className="weight-600 text-[var(--text-white)]">
            Domas Sirbike
          </span>
        </Link>

        <li data-btn-projects>
          <Link
            href="/"
            className="btn-square-light"
            data-native-reactions
            data-light-left-border-color
          >
            My projects
          </Link>
        </li>
        <li data-btn-contact>
          <Link
            href="/"
            className="btn-square-light"
            data-native-reactions
            data-light-left-border-color
          >
            React out to me
          </Link>
        </li>
        <li>
          <Btn
            text="Menu"
            onClick={TOGGLE_mobileMenu}
            btnType="btn-square-light"
            extraAttributes={[{ "data-light-left-border-color": "" }]}
            right_ICON={<ICON_dropDownArrow />}
            FIRE_clickEvent
          />
        </li>
      </ul>
    </nav>
  );
}

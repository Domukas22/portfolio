//
//
//

"use client";

import Link from "next/link";
import css from "./Nav.module.css";
import Btn from "../Btn/Btn";
import { ICON_dropDownArrow } from "../Icons/Icons";

interface Nav_PROPS {
  IS_projectPage?: boolean;
}

export default function Nav({ IS_projectPage = false }: Nav_PROPS) {
  return (
    <nav className={css.nav}>
      <div
        className="container !py-0 h-full items-center flex"
        data-project-page-container={IS_projectPage}
      >
        <Link href="/" className={css.logo}>
          <div className={css.logo_IMG} />
          <span className="size-h5 weight-600 text-[var(--text-white)]">
            Domas
          </span>
        </Link>
        {/* <ul className="flex flex-1 px-20">
          <Link href="/" className={css.navlink} data-project-btn data-p1>
            Localmore
          </Link>
          <Link href="/" className={css.navlink} data-project-btn data-p2>
            Swim Active
          </Link>
          <Link href="/" className={css.navlink} data-project-btn data-p3>
            Vocabs
          </Link>
          <Link href="/" className={css.navlink} data-project-btn data-p4>
            Sanfte Metzger
          </Link>
          <Link href="/" className={css.navlink} data-project-btn data-p5>
            Domas Swim School
          </Link>
        </ul> */}
        {/* <Link href="/" className={css.navlink}>
          My projects
        </Link> */}

        <ul className="flex ml-auto h-full gap-4">
          <li className="h-full flex items-center" data-not-menu-btn>
            <Link href="/" className="btn navlink">
              My projects
            </Link>
          </li>
          <li className="h-full flex items-center" data-not-menu-btn>
            <Link href="/" className="btn navlink">
              About me
            </Link>
          </li>
          <li className="h-full flex items-center" data-not-menu-btn>
            <Link href="/" className="btn navlink">
              Contact
            </Link>
          </li>
          <li className="h-full flex items-center" data-menu-btn>
            <Btn
              text="Menu"
              className="menuBtn"
              right_ICON={<ICON_dropDownArrow />}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

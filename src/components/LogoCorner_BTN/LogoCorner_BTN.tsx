//
//
//

import Link from "next/link";
import Btn from "../Btn/Btn";
import css from "./LogoCorner_BTN.module.css";
import { usePathname } from "next/navigation";
import React from "react";

export default function LogoCorner_BTN({
  SHOW_bottomBorder = true,
  flex = 0,
}: {
  SHOW_bottomBorder?: boolean;
  flex?: 0 | 1;
}) {
  const pathname = usePathname();

  return (
    <li
      style={{
        flex,
        display: "flex",
      }}
    >
      <Clickable IS_home={pathname === "/"} {...{ SHOW_bottomBorder }}>
        <div data-logo-img className={css.logo_IMG} />
        <span data-logo-text data-logo-text-long>
          Domas Sirbike
        </span>
        <span data-logo-text data-logo-text-short>
          Domas
        </span>
      </Clickable>
    </li>
  );
}

function Clickable({
  children,
  IS_home,
  SHOW_bottomBorder,
}: {
  children: React.ReactNode;
  IS_home: boolean;
  SHOW_bottomBorder: boolean;
}) {
  return IS_home ? (
    <Btn
      btnType="btn-square-light"
      className={css.logoBtn}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      data-light-bottom-border-color={SHOW_bottomBorder}
    >
      {children}
    </Btn>
  ) : (
    <Link
      className={`btn-square-light ${css.logoBtn}`}
      href="/"
      data-light-bottom-border-color={SHOW_bottomBorder}
    >
      {children}
    </Link>
  );
}

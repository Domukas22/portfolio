//
//
//

import Link from "next/link";
import Btn from "../Btn/Btn";
import css from "./LogoCorner_BTN.module.css";
import { usePathname } from "next/navigation";
import React from "react";

export default function LogoCorner_BTN({
  insideTinyNav = false,
}: {
  insideTinyNav?: boolean;
}) {
  const pathname = usePathname();

  return (
    <li
      style={{
        flex: insideTinyNav ? 1 : 0,
        display: "flex",
      }}
    >
      <Clickable IS_home={pathname === "/"} {...{ insideTinyNav }}>
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
  insideTinyNav,
}: {
  children: React.ReactNode;
  IS_home: boolean;
  insideTinyNav: boolean;
}) {
  return IS_home ? (
    <Btn
      btnType="btn-square-light"
      className={css.logoBtn}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      extraAttributes={[
        `data-light-bottom-border-color="${
          !IS_home ? true : !insideTinyNav ? false : false
        }"`,
      ]}
    >
      {children}
    </Btn>
  ) : (
    <Link
      className={`btn-square-light ${css.logoBtn}`}
      href="/"
      data-inside-tiny-nav={!IS_home ? true : !insideTinyNav ? false : false}
      data-light-bottom-border-color={
        !IS_home ? true : !insideTinyNav ? false : false
      }
    >
      {children}
    </Link>
  );
}

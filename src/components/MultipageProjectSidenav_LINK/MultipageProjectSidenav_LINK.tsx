//
//
//

import Link from "next/link";

import css from "./MultipageProjectSidenav_LINK.module.css";

interface MultipageProjectSidenav_LINK_PROPS {
  text: string;
  active: boolean;
  href: string;
  noBottomBorder?: boolean;
}

export default function MultipageProjectSidenav_LINK({
  text = "Btn text",
  href = "/",
  active = false,
  noBottomBorder = false,
}: MultipageProjectSidenav_LINK_PROPS) {
  return (
    <li
      className="w-full"
      style={{
        borderBottom: noBottomBorder ? "transparent" : "var(--border-light)",
      }}
    >
      <Link
        href={href || "/"}
        className={`btn-square ${css.MultipageProjectSidenav_LINK}`}
        data-active={active}
      >
        <span> {text}</span>
      </Link>
    </li>
  );
}

//
//
//

import Link from "next/link";

import css from "./MultipageNestedProjectSidenav_BTN.module.css";

interface MultipageNestedProjectSidenav_BTN_PROPS {
  text: string;
  active: boolean;
  href: string;
}

export default function MultipageNestedProjectSidenav_BTN({
  text = "Btn text",
  href = "/",
  active = false,
}: MultipageNestedProjectSidenav_BTN_PROPS) {
  return (
    <li>
      <Link
        href={href || "/"}
        className={`btn-square ${css.MultipageNestedProjectSidenav_BTN}`}
        data-active={active}
      >
        <span> {text}</span>
      </Link>
    </li>
  );
}

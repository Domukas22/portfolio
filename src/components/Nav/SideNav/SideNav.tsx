//
//
//

"use client";

import Link from "next/link";
import css from "./SideNav.module.css";
import { ICON_arrow } from "@/components/Icons/Icons";
import GET_allProjectIntros from "@/utils/GET_allProjectIntros";

// interface Nav_PROPS {
//   IS_projectPage?: boolean;
// }

export default function SideNav() {
  const projects = GET_allProjectIntros();

  return (
    <nav className={css.sidenav}>
      <div className={css.top}>
        <Link href="/" className={css.logo}>
          <div className={css.logo_IMG} />
          <span className="weight-600 text-[var(--text-white)]">
            Domas Sirbike
          </span>
        </Link>
      </div>

      <ul>
        {/* <li>
          <Link href="/">
            <div className={css.linkTextWrap}>
              <span data-link-span-title>Learn about me</span>
            </div>
            {<Arrow />}
          </Link>
        </li> */}
        <li>
          <Link href="/">
            <div className={css.linkTextWrap}>
              <span data-link-span-title>Reach out to me</span>
            </div>
            {<Arrow />}
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className={css.linkTextWrap}>
              <span data-link-span-title>See my projects</span>
              <span data-link-span-subtitle>
                {projects.length} projects total
              </span>
            </div>
            {<Arrow />}
          </Link>
        </li>
        {/* <li>
          <Link href="/">
            <div className={css.linkTextWrap}>
              <span data-link-span-title>Daily notes</span>
              <span data-link-span-subtitle>45 notes total</span>
            </div>
            {<Arrow />}
          </Link>
        </li> */}

        {projects.map((project) => (
          <li key={project.title}>
            <Link href="/">
              <div className={css.linkTextWrap}>
                <span data-link-span-title>
                  {project.emoji} {project.title}
                </span>
                <span data-link-span-subtitle>{project.shortSubtitle}</span>
              </div>
              {<Arrow />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Arrow() {
  return (
    <ICON_arrow
      direction="right"
      color="white-dimm"
      style={{ marginLeft: "auto" }}
    />
  );
}

//
//
//

"use client";

import Link from "next/link";
import css from "./Menu.module.css";
import GET_allProjectIntros from "@/utils/GET_allProjectIntros";
import { SideNav_BTN } from "./components/SideNav_BTN";

// interface Nav_PROPS {
//   IS_projectPage?: boolean;
// }

export default function Menu() {
  const projects = GET_allProjectIntros();

  return (
    <>
      <li>
        <SideNav_BTN title="Reach out to me" link="/" />
      </li>
      <li>
        <SideNav_BTN
          title="See my projects"
          subtitle={`${projects.length} projects total`}
          link="/"
        />
      </li>

      {projects.map((project) => (
        <li key={project.title}>
          <SideNav_BTN
            title={`${project.emoji} ${project.title}`}
            subtitle={project.shortSubtitle}
            link="/"
          />
        </li>
      ))}
    </>
  );
}

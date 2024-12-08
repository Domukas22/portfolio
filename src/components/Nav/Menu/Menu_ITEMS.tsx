//
//
//

"use client";

import { Projects } from "@/projects";
import { Menu_BTN } from "./components/Menu_BTN";

export default function Menu_ITEMS() {
  return (
    <>
      <li>
        <Menu_BTN title="Reach out to me" link="/" />
      </li>
      <li>
        <Menu_BTN
          title="See my projects"
          subtitle={`${Object.keys(Projects).length} projects total`}
          link="/"
        />
      </li>

      {Object.entries(Projects).map(([slug, project]) => (
        <li key={project.name}>
          <Menu_BTN
            title={`${project.emoji} ${project.name}`}
            subtitle={project.shortSubtitle}
            link={`/projects/${slug}`}
          />
        </li>
      ))}
    </>
  );
}

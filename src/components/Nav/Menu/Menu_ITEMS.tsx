//
//
//

"use client";

import { Projects } from "@/projects";
import { Menu_BTN } from "./components/Menu_BTN";

export default function Menu_ITEMS({ SHOW_homeBtn = false }) {
  return (
    <div
      data-tiny-scrollbar-styles
      className="flex-1 overflow-y-auto pb-[4rem]"
    >
      {SHOW_homeBtn && (
        <li>
          <Menu_BTN title="Home" link="/" />
        </li>
      )}
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
        <li key={slug + project.name}>
          <Menu_BTN
            title={`${project.emoji} ${project.name}`}
            subtitle={project.shortSubtitle}
            link={`/projects/${slug}`}
          />
        </li>
      ))}
    </div>
  );
}

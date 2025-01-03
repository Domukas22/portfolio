//
//
//

"use client";

import Project_INTROS from "@/projects/intros";
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
      {/* <li>
        <Menu_BTN title="Reach out to me" link="/" />
      </li> */}
      {/* <li>
        <Menu_BTN
          title="See my projects"
          subtitle={`${Object.keys(Project_INTROS)?.length} projects total`}
          link="/"
        />
      </li> */}

      {Object.entries(Project_INTROS).map(([slug, intro]) => (
        <li key={slug + intro.name}>
          <Menu_BTN
            title={`${intro.emoji} ${intro.name}`}
            subtitle={intro.shortSubtitle}
            link={
              intro?.nestedPages?.length
                ? `/projects/${slug}/${intro?.nestedPages?.[0]?.slug}`
                : `/projects/${slug}`
            }
          />
        </li>
      ))}
    </div>
  );
}

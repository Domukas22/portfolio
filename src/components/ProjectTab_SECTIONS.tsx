//
//
//

import { ProjectTabs_TYPE } from "@/projects";
import { MutableRefObject } from "react";

export function ProjectTab_SECTIONS({
  current_TAB,
  hideContent,
  sectionRefs,
}: {
  current_TAB: ProjectTabs_TYPE;
  hideContent: boolean;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
}) {
  return (
    <>
      {current_TAB?.sections?.map((section, index) => (
        <section
          key={section.slug}
          id={section.slug}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          // className={activeSectionIndex === index ? "bg-gray-700" : ""}
          className="pb-[100rem]"
        >
          <div
            className="container"
            style={{
              transition: "100ms",
              opacity: hideContent ? 0 : 1,
              pointerEvents: hideContent ? "none" : "auto",
            }}
          >
            <h1
              dangerouslySetInnerHTML={{
                __html: section.longTab_TITLE,
              }}
            />
          </div>
        </section>
      ))}
    </>
  );
}

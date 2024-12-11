//
//
//

import { Hero_SECTION } from "@/projects/projectSection_TYPES";
import Image from "next/image";
import { MutableRefObject } from "react";
import ProjectTag_LIST from "../ProjectTag_LIST/ProjectTag_LIST";

export default function Introduction_SECTION({
  section_CONTENT,
  index,
  sectionRefs,
  hideContent,
}: {
  section_CONTENT: Hero_SECTION;
  index: number;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  hideContent: boolean;
}) {
  const {
    headerImg_COLOR,
    headerImg_FILENAME,
    project_NAME,
    project_SUBTITLE,
    section_SLUG,
    tags,
  } = section_CONTENT;

  return (
    <section
      id={section_SLUG}
      ref={(el) => {
        sectionRefs.current[index] = el;
      }}
      className="tablet:p-0"
    >
      <div
        className="container"
        data-project-section-container
        data-hide={hideContent}
        style={{ borderBottom: "var(--border-light)" }}
      >
        <div
          className="h-[36rem] mobile:h-[26rem] w-full rounded-[1.6rem] tablet:rounded-none overflow-hidden"
          style={{ boxShadow: `${headerImg_COLOR} 0px 2px 30px 0px` }}
        >
          <Image
            width={1240}
            height={400}
            src={`/projects/headers/${headerImg_FILENAME}`}
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="pt-[2.2rem] pb-[3rem] tablet:px-[var(--mobile-padding)] tablet:pt-[var(--mobile-padding)] ">
          <h1>{project_NAME}</h1>
          <p className="mb-[2rem]">{project_SUBTITLE}</p>
          <ProjectTag_LIST {...{ tags }} />
        </div>
      </div>
    </section>
  );
}

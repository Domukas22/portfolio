//
//
//

import { ProjectSection_TYPE } from "@/projects/projectSection_TYPES";
import { ProjectTabs_TYPE } from "@/projects/projectTypes";
import { MutableRefObject } from "react";
import { Hero_SECTION } from "./heros/Hero_SECTION";
import { TitleParagraphImage_SECTION } from "./TitleParagraphImage_SECTION/TitleParagraphImage_SECTION";
import { UnevenRowImageGrid_SECTION } from "./UnevenRowImageGrid_SECTION/UnevenRowImageGrid_SECTION";
import { MultiPoint_SECTION } from "./MultiPoint_SECTION/MultiPoint_SECTION";
import { SwiperHero_SECTION } from "./heros/SwiperHero_SECTION";
import NextUp_SECTION from "../NextUp_SECTION";

export default function ProjectTab_SECTIONS({
  current_TAB,
  hideContent,
  sectionRefs,
  project_SLUG,
}: {
  current_TAB: ProjectTabs_TYPE;
  hideContent: boolean;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  project_SLUG: string;
}) {
  return (
    <>
      {current_TAB?.sections?.map(
        (section_CONTENT: ProjectSection_TYPE, index: number) => {
          switch (section_CONTENT.type) {
            case "hero":
              return (
                <Hero_SECTION
                  key={section_CONTENT.section_SLUG}
                  {...{
                    section_CONTENT,
                    index,
                    sectionRefs,
                    hideContent,
                    project_SLUG,
                  }}
                />
              );
            case "title-parapgraph-image":
              return (
                <TitleParagraphImage_SECTION
                  key={section_CONTENT.section_SLUG}
                  {...{
                    section_CONTENT,
                    index,
                    sectionRefs,
                    hideContent,
                    project_SLUG,
                  }}
                />
              );
            case "uneven-row-image-grid":
              return (
                <UnevenRowImageGrid_SECTION
                  key={section_CONTENT.section_SLUG}
                  {...{
                    section_CONTENT,
                    index,
                    sectionRefs,
                    hideContent,
                    project_SLUG,
                  }}
                />
              );
            case "swiper-hero":
              return (
                <SwiperHero_SECTION
                  key={section_CONTENT.section_SLUG}
                  {...{
                    section_CONTENT,
                    index,
                    sectionRefs,
                    hideContent,
                    project_SLUG,
                  }}
                />
              );
            case "multi-point-section":
              return (
                <MultiPoint_SECTION
                  key={section_CONTENT.section_SLUG}
                  {...{
                    section_CONTENT,
                    index,
                    sectionRefs,
                    hideContent,
                    project_SLUG,
                  }}
                />
              );
          }
        }
      )}
      <NextUp_SECTION {...{ hideContent }} />
    </>
  );
}

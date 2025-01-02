//
//
//

import { Hero_SECTION } from "./heros/Hero_SECTION";
import { TitleParagraphImage_SECTION } from "./TitleParagraphImage_SECTION/TitleParagraphImage_SECTION";
import { UnevenRowImageGrid_SECTION } from "./UnevenRowImageGrid_SECTION/UnevenRowImageGrid_SECTION";
import { MultiPoint_SECTION } from "./MultiPoint_SECTION/MultiPoint_SECTION";
import { LogoSwiper_SECTION } from "./heros/LogoSwiper_SECTION";
import NextUp_SECTION from "../NextUp_SECTION";
import { ProjectSection_TYPE } from "@/projects/types/sections";
import { TextOnly_SECTION } from "./TextOnly_SECTION/TextOnly_SECTION";
import { ExternalLinkGrid_SECTION } from "./ExternalLinkGrid_SECTION/ExternalLinkGrid_SECTION";
import { MutableRefObject } from "react";

export default function ProjectPage_SECTIONS({
  sections = [],
  project_SLUG,
  sectionRefs,
}: {
  sections: ProjectSection_TYPE[];
  project_SLUG: string;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
}) {
  return (
    <>
      {sections &&
        sections?.length &&
        sections.map((sections: ProjectSection_TYPE, index: number) => {
          switch (sections.type) {
            case "hero":
              return (
                <Hero_SECTION
                  key={sections.section_SLUG}
                  {...{
                    section_CONTENT: sections,
                    index,
                    sectionRefs,
                    project_SLUG,
                  }}
                />
              );
            case "title-paragraph-image":
              return (
                <TitleParagraphImage_SECTION
                  key={sections.section_SLUG}
                  {...{
                    section_CONTENT: sections,
                    index,
                    sectionRefs,
                    project_SLUG,
                  }}
                />
              );
            case "uneven-row-image-grid":
              return (
                <UnevenRowImageGrid_SECTION
                  key={sections.section_SLUG}
                  {...{
                    section_CONTENT: sections,
                    index,
                    sectionRefs,
                    project_SLUG,
                  }}
                />
              );
            case "logo-swiper":
              return (
                <LogoSwiper_SECTION
                  key={sections.section_SLUG}
                  {...{
                    section_CONTENT: sections,
                    index,
                    sectionRefs,
                    project_SLUG,
                  }}
                />
              );
            case "multi-point-section":
              return (
                <MultiPoint_SECTION
                  key={sections.section_SLUG}
                  {...{
                    section_CONTENT: sections,
                    index,
                    sectionRefs,
                    project_SLUG,
                  }}
                />
              );
            case "text-only-section":
              return (
                <TextOnly_SECTION
                  key={sections.section_SLUG}
                  {...{ section_CONTENT: sections, sectionRefs, index }}
                />
              );
            case "external-link-grid":
              return (
                <ExternalLinkGrid_SECTION
                  key={sections.section_SLUG}
                  {...{ section_CONTENT: sections, sectionRefs, index }}
                />
              );
          }
        })}
    </>
  );
}

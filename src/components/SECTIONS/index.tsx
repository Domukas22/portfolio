//
//
//

import { Hero_SECTION } from "./heros/HeroSection_CONTENT";
import { TitleParagraphImageSection_CONTENT } from "./TitleParagraphImage_SECTION/TitleParagraphImage_SECTION";
import { UnevenRowImageGridSection_CONTENT } from "./UnevenRowImageGrid_SECTION/UnevenRowImageGrid_SECTION";
import { MultiPointSection_CONTENT } from "./MultiPointSection_CONTENT/MultiPointSection_CONTENT";
import { LogoSwiperSection_CONTENT } from "./heros/LogoSwiperSection_CONTENT";
import { ProjectSection_TYPE } from "@/projects/types/sections";
import { TextOnlySection_CONTENT } from "./TextOnlySection_CONTENT/TextOnlySection_CONTENT";
import { ExternalLinkGridSection_CONTENT } from "./ExternalLinkGridSection_CONTENT/ExternalLinkGridSection_CONTENT";
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
                <TitleParagraphImageSection_CONTENT
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
                <UnevenRowImageGridSection_CONTENT
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
                <LogoSwiperSection_CONTENT
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
                <MultiPointSection_CONTENT
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
                <TextOnlySection_CONTENT
                  key={sections.section_SLUG}
                  {...{ section_CONTENT: sections, sectionRefs, index }}
                />
              );
            case "external-link-grid":
              return (
                <ExternalLinkGridSection_CONTENT
                  key={sections.section_SLUG}
                  {...{ section_CONTENT: sections, sectionRefs, index }}
                />
              );
          }
        })}
    </>
  );
}

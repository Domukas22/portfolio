//
//
//

import { SwiperHeroSection_TYPE } from "@/projects/projectSection_TYPES";
import { MutableRefObject } from "react";

import Wide_SWIPER from "@/components/Wide_SWIPER/Wide_SWIPER";
import HeroBottom_WRAP from "@/components/HeroBottom_WRAP/HeroBottom_WRAP";
import Container from "@/components/Container";
import Project_SECTION from "@/components/Project_SECTION";

export function SwiperHero_SECTION({
  section_CONTENT,
  index,
  sectionRefs,
  hideContent,
}: {
  section_CONTENT: SwiperHeroSection_TYPE;
  index: number;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  hideContent: boolean;
  project_SLUG: string;
}) {
  const {
    title,
    subtitle,
    section_SLUG,
    swiperImg_PATHS,
    customBackgroundColors,
    maxDesktopWidth,
  } = section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, index, sectionRefs }}>
      <Container {...{ hideContent }} hero>
        <Wide_SWIPER
          img_PATHS={swiperImg_PATHS}
          loop
          maxDeskImgWidth={maxDesktopWidth || 50}
          {...{ customBackgroundColors }}
        />

        <HeroBottom_WRAP {...{ title, subtitle }} />
      </Container>
    </Project_SECTION>
  );
}

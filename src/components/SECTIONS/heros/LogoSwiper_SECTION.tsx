//
//
//

import Wide_SWIPER from "@/components/Wide_SWIPER/Wide_SWIPER";
import HeroBottom_WRAP from "@/components/HeroBottom_WRAP/HeroBottom_WRAP";
import Container from "@/components/Container";
import Project_SECTION from "@/components/Project_SECTION";
import { SwiperHeroSection_TYPE } from "@/projects/types/sections";
import { MutableRefObject } from "react";

export function LogoSwiper_SECTION({
  section_CONTENT,
  sectionRefs,
  index,
}: {
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  index: number;

  section_CONTENT: SwiperHeroSection_TYPE;

  project_SLUG: string;
}) {
  const {
    title,

    section_SLUG,
    swiperImg_PATHS,
    customBackgroundColors,
    maxDesktopWidth,
  } = section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, sectionRefs, index }}>
      <Container hero>
        <h2 className="mb-[2rem]">{title}</h2>
        <Wide_SWIPER
          img_PATHS={swiperImg_PATHS}
          loop
          maxDeskImgWidth={maxDesktopWidth || 50}
          {...{ customBackgroundColors }}
        />
      </Container>
    </Project_SECTION>
  );
}

//
//
//

import Wide_SWIPER from "@/components/Wide_SWIPER/Wide_SWIPER";
import Container from "@/components/Container";
import { customBackgroundColors_TYPE } from "@/projects/types/other";

type SwiperHeroSection_TYPE = {
  title: string;
  subtitle?: string;
  swiperImg_PATHS: string[];
  ARE_imagesFull?: boolean; // is true, the image wont ave any padding and will span
  customBackgroundColors?: customBackgroundColors_TYPE[];
  maxDesktopWidth?: number;
};

export function LogoSwiperSection_CONTENT({
  title,
  swiperImg_PATHS,
  customBackgroundColors,
  maxDesktopWidth,
}: SwiperHeroSection_TYPE) {
  return (
    <Container hero>
      <h2 className="mb-[2rem]">{title}</h2>
      <Wide_SWIPER
        img_PATHS={swiperImg_PATHS}
        loop
        maxDeskImgWidth={maxDesktopWidth || 50}
        {...{ customBackgroundColors }}
      />
    </Container>
  );
}

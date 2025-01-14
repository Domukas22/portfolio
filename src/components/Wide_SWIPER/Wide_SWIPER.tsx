//
//
//

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";

import css from "./Wide_SWIPER.module.css";
import USE_swiperControls from "@/hooks/USE_swiperControls";
import HeroImg_WRAP from "../HeroImg_WRAP/HeroImg_WRAP";
import { customBackgroundColors_TYPE } from "@/projects/types/other";
import SwiperPagination_DOTS from "../SwiperPagination_DOTS/SwiperPagination_DOTS";
import SwiperSlidePagination_BTNS from "../SwiperSlidePagination_BTNS/SwiperSlidePagination_BTNS";

interface WideSwiper_TYPE {
  img_PATHS: string[];
  slidesPerView?: number;
  loop?: boolean;
  ARE_imagesFull?: boolean;
  maxDeskImgWidth?: number;
  customBackgroundColors?: customBackgroundColors_TYPE[];
  complexImages?: boolean;
}

export default function Wide_SWIPER({
  img_PATHS,
  slidesPerView = 1,
  loop = false,
  ARE_imagesFull = false,
  maxDeskImgWidth = undefined,
  customBackgroundColors,
  complexImages = false,
}: WideSwiper_TYPE) {
  const {
    slide,
    sliderRef,
    currentRealIndex,
    IS_leftArrowDisabled,
    IS_rightArrowDisabled,
  } = USE_swiperControls({ loop, img_COUNT: img_PATHS?.length });

  return (
    <HeroImg_WRAP shadow_COLOR="rgba(255, 247, 240, 0.5)">
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
        modules={[EffectFade]}
        navigation={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        loop={loop}
        className={css.wide_SWIPER}
      >
        <SwiperSlidePagination_BTNS
          {...{ IS_leftArrowDisabled, IS_rightArrowDisabled, slide }}
        />

        <SwiperPagination_DOTS
          count={img_PATHS?.length}
          current={currentRealIndex || 0}
          complexImages={complexImages}
        />

        {img_PATHS?.map((path, i) => (
          <SwiperSlide key={i}>
            <div
              data-single-image-wrap
              data-full={ARE_imagesFull}
              style={{
                backgroundColor:
                  customBackgroundColors &&
                  customBackgroundColors.some((c) => c.index === i)
                    ? customBackgroundColors.find((c) => c.index === i)?.color
                    : "white",
              }}
            >
              <Image
                width={1400}
                height={500}
                src={path}
                alt=""
                className="w-full h-full object-cover"
                style={{
                  maxWidth: maxDeskImgWidth ? `${maxDeskImgWidth}rem` : "100%",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroImg_WRAP>
  );
}

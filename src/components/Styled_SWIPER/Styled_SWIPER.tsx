//
//
//

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";

import css from "./Styled_SWIPER.module.css";
import USE_swiperControls from "@/hooks/USE_swiperControls";
import { customBackgroundColors_TYPE } from "@/projects/types/other";
import SwiperPagination_DOTS from "../SwiperPagination_DOTS/SwiperPagination_DOTS";
import SwiperSlidePagination_BTNS from "../SwiperSlidePagination_BTNS/SwiperSlidePagination_BTNS";

interface Styled_SWIPER_TYPE {
  img_PATHS: string[];
  slidesPerView?: number;
  loop?: boolean;
  ARE_imagesFull?: boolean;
  complexImages?: boolean;
  maxDeskImgWidth?: number;
  customBackgroundColors?: customBackgroundColors_TYPE[];
}

export default function Styled_SWIPER({
  img_PATHS,
  slidesPerView = 1,
  loop = false,
  ARE_imagesFull = false,
  maxDeskImgWidth = undefined,
  customBackgroundColors,
  complexImages = false,
  ...props
}: Styled_SWIPER_TYPE) {
  const {
    slide,
    sliderRef,
    currentRealIndex,
    IS_leftArrowDisabled,
    IS_rightArrowDisabled,
  } = USE_swiperControls({ loop, img_COUNT: img_PATHS?.length });

  return (
    <div className={css.Styled_SWIPER} {...props}>
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
        modules={[EffectFade]}
        navigation={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        loop={loop}
        className={css.swiper}
      >
        <SwiperSlidePagination_BTNS
          hide={img_PATHS?.length < 2}
          {...{ IS_leftArrowDisabled, IS_rightArrowDisabled, slide }}
        />

        <SwiperPagination_DOTS
          count={img_PATHS?.length}
          current={currentRealIndex}
          complexImages={complexImages}
        />

        {img_PATHS?.map((path, i) => (
          <SwiperSlide key={i}>
            <div
              data-single-image-wrap
              data-full={ARE_imagesFull}
              style={{
                backgroundColor:
                  customBackgroundColors?.find((c) => c.index === i)?.color ??
                  "white",
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
    </div>
  );
}

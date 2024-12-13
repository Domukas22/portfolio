//
//
//

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import css from "./Wide_SWIPER.module.css";
import USE_swiperSliderRef from "@/hooks/USE_swiperSliderRef";
import Btn from "../Btn/Btn";
import { ICON_arrow } from "../Icons/Icons";
import { useMemo } from "react";
import { customBackgroundColors_TYPE } from "@/projects/projectTypes";
import HeroImg_WRAP from "../HeroImg_WRAP/HeroImg_WRAP";

interface WideSwiper_TYPE {
  img_PATHS: string[];
  slidesPerView?: number;
  loop?: boolean;
  ARE_imagesFull?: boolean;
  maxDeskImgWidth?: number;
  customBackgroundColors?: customBackgroundColors_TYPE[];
}

export default function Wide_SWIPER({
  img_PATHS,
  slidesPerView = 1,
  loop = false,
  ARE_imagesFull = false,
  maxDeskImgWidth = undefined,
  customBackgroundColors,
}: WideSwiper_TYPE) {
  const { sliderRef, slide, currentRealIndex } = USE_swiperSliderRef();

  const IS_leftArrowDisabled = useMemo(
    () => !loop && currentRealIndex === 0,
    [loop, currentRealIndex]
  );
  const IS_rightArrowDisabled = useMemo(
    () => !loop && currentRealIndex === img_PATHS?.length - 1,
    [loop, currentRealIndex, img_PATHS]
  );

  console.log(currentRealIndex);
  console.log(img_PATHS?.length - 1);

  return (
    <HeroImg_WRAP shadow_COLOR="rgba(255, 247, 240, 0.5)">
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={0}
        loop={loop}
        className={css.wide_SWIPER}
      >
        <div data-btn-wrap>
          <Btn
            btnType="btn-pagination"
            right_ICON={<ICON_arrow direction="left" />}
            onClick={() => slide("prev")}
            data-disable={IS_leftArrowDisabled}
            excludeFromTabOrder={IS_leftArrowDisabled}
          />
          <Btn
            btnType="btn-pagination"
            right_ICON={<ICON_arrow direction="right" />}
            onClick={() => slide("next")}
            data-disable={IS_rightArrowDisabled}
            excludeFromTabOrder={IS_rightArrowDisabled}
          />
        </div>
        <div data-pagination-wrap>
          {img_PATHS?.map((x, i) => (
            <div
              data-pagination-dot
              data-active={i === currentRealIndex}
              key={x + i}
            />
          ))}
        </div>
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

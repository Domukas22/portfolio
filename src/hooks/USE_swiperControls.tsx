//
//
//

import { useRef, useCallback, useState, useEffect, useMemo } from "react";
import { SwiperRef } from "swiper/react";

export default function USE_swiperControls({
  loop = false,
  img_COUNT,
}: {
  loop: boolean;
  img_COUNT: number | undefined | null;
}) {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [currentRealIndex, setCurrentRealIndex] = useState<number | null>(0);
  const defaultImgCount = 2;

  const IS_leftArrowDisabled = useMemo(
    () => !loop && currentRealIndex === 0,
    [loop, currentRealIndex]
  );
  const IS_rightArrowDisabled = useMemo(
    () => !loop && currentRealIndex === (img_COUNT ?? defaultImgCount) - 1,
    [loop, currentRealIndex, img_COUNT]
  );

  // Navigate to the next or previous slide
  const slide = useCallback((direction: "prev" | "next") => {
    if (sliderRef.current) {
      if (direction === "next") {
        sliderRef.current.swiper.slideNext();
      } else {
        sliderRef.current.swiper.slidePrev();
      }
    }
  }, []);

  // Select a specific slide by index, accounting for loop
  const SELECT_slide = useCallback((index: number) => {
    if (sliderRef.current) {
      const swiper = sliderRef.current.swiper;

      if (swiper.params.loop) {
        const realIndex = index % swiper.slides.length; // Ensure index wraps around
        swiper.slideToLoop(realIndex); // Use slideToLoop for looping swipers
      } else {
        swiper.slideTo(index);
      }
    }
  }, []);

  useEffect(() => {
    const swiperInstance = sliderRef.current?.swiper;

    if (swiperInstance) {
      const updateRealIndex = () => {
        setCurrentRealIndex(swiperInstance.realIndex);
        console.log("Slide changed", swiperInstance.realIndex); // Consolidated logging
      };

      swiperInstance.on("slideChange", updateRealIndex);
      return () => swiperInstance.off("slideChange", updateRealIndex); // Clean up
    }
  }, [img_COUNT]);

  return {
    sliderRef,
    slide,
    SELECT_slide,
    currentRealIndex,
    IS_leftArrowDisabled,
    IS_rightArrowDisabled,
  };
}

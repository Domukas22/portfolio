//
//
//

import { useRef, useCallback, useState, useEffect } from "react";
import { SwiperRef } from "swiper/react";

export default function USE_swiperSliderRef() {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [currentRealIndex, setCurrentRealIndex] = useState<number | null>(0);

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
    if (sliderRef.current) {
      const swiper = sliderRef.current.swiper;

      const updateRealIndex = () => setCurrentRealIndex(swiper.realIndex);
      swiper.on("slideChange", updateRealIndex);

      return () => {
        swiper.off("slideChange", updateRealIndex); // Cleanup
      };
    }
  }, []);

  return { sliderRef, slide, SELECT_slide, currentRealIndex };
}

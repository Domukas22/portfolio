//
//

import css from "./MyUx_MODAL.module.css";
import { Dialog, Modal } from "react-aria-components";
import Modal_HEADER from "@/components/Modal_HEADER/Modal_HEADER";
import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import USE_swiperSliderRef from "@/hooks/USE_swiperSliderRef";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";
import { supabase } from "@/supabase";

interface props {
  IS_open: boolean;
  TOGGLE_open?: () => void;
  MyUX: MyUx_TYPE | undefined;
}

export default function MyUx_MODAL({
  TOGGLE_open = () => {},
  IS_open,
  MyUX,
}: props) {
  // const { sliderRef, slide, currentRealIndex } = USE_swiperSliderRef();
  const { sliderRef } = USE_swiperSliderRef();

  // const IS_leftArrowDisabled = useMemo(
  //   () => currentRealIndex === 0,
  //   [currentRealIndex]
  // );
  // const IS_rightArrowDisabled = useMemo(
  //   () =>
  //     MyUX?.paragraphs?.length &&
  //     currentRealIndex === MyUX?.paragraphs?.length - 1,
  //   [currentRealIndex, MyUX?.paragraphs?.length]
  // );

  const prefix =
    supabase.storage.from("my-ux-images").getPublicUrl(MyUX?.id || "").data
      .publicUrl + "/";

  return (
    <Modal
      isDismissable
      className={css.modal}
      isOpen={IS_open}
      onOpenChange={TOGGLE_open}
    >
      <Dialog className={css.dialog} aria-label="Modal" data-fullscreen={true}>
        <Modal_HEADER title="Menu" {...{ TOGGLE_open }} />
        <div data-content-wrap>
          <div data-text-wrap>
            <h2 className="mb-[1.2rem]">{MyUX?.title}</h2>
            {MyUX?.paragraphs?.length
              ? MyUX?.paragraphs.map((p, index) => (
                  <p key={p + index} className="mb-[0.6rem]">
                    {p}
                  </p>
                ))
              : null}
          </div>
          <div data-swiper-wrap>
            <Swiper
              ref={sliderRef}
              slidesPerView={1}
              modules={[EffectFade]}
              navigation={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={0}
              className={css.wide_SWIPER}
            >
              {/* <div data-btn-wrap>
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
                {MyUX?.images?.map((x, i) => (
                  <div
                    data-pagination-dot
                    data-active={i === currentRealIndex}
                    key={x + i}
                  />
                ))}
              </div> */}
              {MyUX?.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    width={1400}
                    height={500}
                    src={prefix + img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Dialog>
    </Modal>
  );
}

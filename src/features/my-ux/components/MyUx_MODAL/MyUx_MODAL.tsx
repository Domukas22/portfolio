//
//

"use client";

import css from "./MyUx_MODAL.module.css";
import { Dialog, Modal } from "react-aria-components";
import Modal_HEADER from "@/components/Modal_HEADER/Modal_HEADER";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";

import "swiper/css/effect-fade";
import { supabase } from "@/supabase";
import ModalMenu_UNDERLAY from "@/components/ModalMenu_UNDERLAY";
import Styled_SWIPER from "@/components/Styled_SWIPER/Styled_SWIPER";
import Image from "next/image";
import FORMAT_date from "@/utils/FORMAT_date";
import Spinner from "@/components/Spinners";
import Btn from "@/components/Btn/Btn";
import { ICON_x } from "@/components/Icons/Icons";
import { useRef } from "react";

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
  const textWrap_REF = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (!IS_open) {
  //     textWrap_REF?.current?.scrollTo(0, 0); // Alternatively, textWrap_REF.current.scrollTop = 0;
  //   }
  // }, [IS_open]);

  return (
    <Modal
      isDismissable
      className={css.modal}
      isOpen={IS_open}
      onOpenChange={TOGGLE_open}
      data-simple-modal-fade
    >
      <Dialog className={css.dialog} aria-label="Modal" data-fullscreen={true}>
        <Modal_HEADER
          title={FORMAT_date(MyUX?.created_at) || "Title"}
          {...{ TOGGLE_open }}
        />

        <div data-content-wrap>
          <_uxTextContent {...{ MyUX, TOGGLE_open }} _ref={textWrap_REF} />
          <_uxImgContent {...{ MyUX }} />
        </div>
      </Dialog>
      <ModalMenu_UNDERLAY open={true} onClick={TOGGLE_open} />
    </Modal>
  );
}

function _uxTextContent({
  MyUX,
  TOGGLE_open = () => {},
  _ref,
}: {
  MyUX: MyUx_TYPE | undefined;
  TOGGLE_open: () => void;
  _ref: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div data-text-wrap ref={_ref}>
      <p>{MyUX?.rating?.text}</p>
      <h2 className="mb-[1.2rem]">{MyUX?.title}</h2>
      {MyUX?.paragraphs.map((p, index) => (
        <p key={p + index} className="mb-[1rem]">
          {p}
        </p>
      ))}
      {MyUX?.paragraphs.map((p, index) => (
        <p key={p + index} className="mb-[1rem]">
          {p}
        </p>
      ))}
      {MyUX?.paragraphs.map((p, index) => (
        <p key={p + index} className="mb-[1rem]">
          {p}
        </p>
      ))}
      {MyUX?.paragraphs.map((p, index) => (
        <p key={p + index} className="mb-[1rem]">
          {p}
        </p>
      ))}
      <Btn
        text="Close"
        right_ICON={<ICON_x />}
        styles={{ marginTop: "2rem" }}
        text_STYLES={{ marginRight: "auto" }}
        onClick={TOGGLE_open}
        className="hidden tablet:flex"
      />
    </div>
  );
}
function _uxImgContent({ MyUX }: { MyUX: MyUx_TYPE | undefined }) {
  const prefix =
    supabase.storage.from("my-ux-images").getPublicUrl(MyUX?.id || "").data
      .publicUrl + "/";
  return (
    <div data-img-wrap>
      <Spinner
        className="absolute "
        style={{ top: "48%", left: "48%", zIndex: -1 }}
      />
      <Styled_SWIPER
        img_PATHS={MyUX?.images?.map((i) => prefix + i) || []}
        ARE_imagesFull={true}
        complexImages
        data-swiper
      />

      <div data-mobile-img-scroll>
        {MyUX?.images?.map((img, i) => (
          <Image
            key={img + i}
            width={1400}
            height={500}
            src={prefix + img}
            alt=""
            data-img
            data-single={MyUX?.images?.length === 1}
          />
        ))}
      </div>
    </div>
  );
}

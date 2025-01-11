//
//
//

import Btn from "./Btn/Btn";
import { ICON_arrow } from "./Icons/Icons";

export default function SwiperSlide_BTN({
  disabled = false,
  onClick = () => {},
  direction = "left",
}: {
  disabled: boolean;
  onClick: () => void;
  direction: "left" | "right";
}) {
  return (
    <Btn
      btnType="btn-pagination"
      right_ICON={<ICON_arrow direction={direction} size="big" />}
      onClick={onClick}
      data-disable={disabled}
      excludeFromTabOrder={disabled}
      className="px-[1.6rem]"
    />
  );
}

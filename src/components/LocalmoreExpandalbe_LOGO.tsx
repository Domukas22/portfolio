//
//
//

import { useState } from "react";
import LocalmoreLogoSvg_COMP from "./LocalmoreLogoSvg_COMP/LocalmoreLogoSvg_COMP";
import Btn from "./Btn/Btn";

export default function LocalmoreExpandable_LOGO({
  bg = "lm-background",
}: {
  bg?: "white" | "lm-background";
}) {
  const [shrink, SET_shrink] = useState(false);
  const [shrinkType, SET_shrinkType] = useState<"left" | "center">("center");

  return (
    <div className="flex flex-col gap-[2rem] ">
      <div
        className={`w-full rounded-[2rem] px-[4rem] pt-[5rem] pb-[6rem] relative flex items-center justify-center`}
        style={{
          backgroundColor: bg === "lm-background" ? "#FFF7F0" : "white",
        }}
        onClick={() => SET_shrink(!shrink)}
      >
        <LocalmoreLogoSvg_COMP
          svg_STYLES={{ maxWidth: "40rem", margin: "0 auto" }}
          {...{ shrink, bg, shrinkType }}
        />
        {/* <div className="absolute r w-[10rem] h-2 bg-red-700" /> */}
      </div>
      <Btn
        btnType="btn"
        onClick={() => SET_shrink(!shrink)}
        text={shrink ? "Expand logo" : "Shrink logo"}
        text_STYLES={{ margin: "0 auto" }}
      />
      <div>
        <p className="mb-[1rem]">Shrink direction:</p>

        <div className="flex">
          <Btn
            btnType="btn"
            onClick={() => SET_shrinkType("left")}
            text={"Left"}
            text_STYLES={{ margin: "0 auto" }}
            className="flex-1 rounded-tr-none rounded-br-none"
            data-active={shrinkType === "left"}
          />
          <Btn
            btnType="btn"
            onClick={() => SET_shrinkType("center")}
            text={"Center"}
            text_STYLES={{ margin: "0 auto" }}
            className="flex-1 rounded-tl-none rounded-bl-none"
            data-active={shrinkType === "center"}
          />
        </div>
      </div>
    </div>
  );
}

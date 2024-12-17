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
  const [shrink, SET_shrink] = useState(true);

  return (
    <div
      className="flex flex-col gap-[2rem] "
      onClick={() => SET_shrink(!shrink)}
    >
      <div
        className={`w-full rounded-[2rem] bg-[${
          bg === "lm-background" ? "#FFF7F0" : "white"
        }] px-[4rem] pt-[5rem] pb-[6rem] relative flex items-center justify-center`}
      >
        <LocalmoreLogoSvg_COMP
          svg_STYLES={{ maxWidth: "50rem", margin: "0 auto" }}
          {...{ shrink, bg }}
        />
        {/* <div className="absolute r w-[10rem] h-2 bg-red-700" /> */}
      </div>
      <Btn
        btnType="btn"
        onClick={() => SET_shrink(!shrink)}
        text={shrink ? "Shrink logo" : "Expand logo"}
        text_STYLES={{ margin: "0 auto" }}
      />
    </div>
  );
}

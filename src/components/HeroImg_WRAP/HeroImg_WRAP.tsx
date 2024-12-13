//
//
//

import React from "react";
import css from "./HeroImg_WRAP.module.css";

export default function HeroImg_WRAP({
  shadow_COLOR,
  backgorund_COLOR,
  children,
}: {
  shadow_COLOR: string;
  backgorund_COLOR?: string;
  children: React.ReactNode;
}) {
  const size = "0px 2px 30px 0px";

  return (
    <div
      className={css.heroImg_WRAP}
      style={{
        boxShadow: `${shadow_COLOR || "rgba(255, 247, 240, 0.5)"} ${size}`,
        backgroundColor: backgorund_COLOR || "white",
      }}
    >
      {children}
    </div>
  );
}

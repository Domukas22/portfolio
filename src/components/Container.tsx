//
//
//

import React from "react";

export default function Container({
  children,
  hero = false,
  hideContent = false,
  extraClass = "",
}: {
  children: React.ReactNode;
  hero?: boolean;
  hideContent?: boolean;
  extraClass?: string;
}) {
  return (
    <div
      className={`container ${hero ? "hero" : ""} ${extraClass}`}
      data-hide={hideContent}
    >
      {children}
    </div>
  );
}

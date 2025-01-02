//
//
//

import React from "react";

export default function Container({
  children,
  hero = false,
  extraClass = "",
}: {
  children: React.ReactNode;
  hero?: boolean;

  extraClass?: string;
}) {
  return (
    <div className={`container ${hero ? "hero" : ""} ${extraClass}`}>
      {children}
    </div>
  );
}

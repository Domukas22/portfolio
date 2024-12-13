//
//
//

import React from "react";
import css from "./HeroBottom_WRAP.module.css";

export default function HeroBottom_WRAP({
  title = "This is a title",
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={css.parent}>
      <div data-text-wrap>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

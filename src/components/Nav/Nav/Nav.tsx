//
//
//

import React from "react";
import css from "./Nav.module.css";

export default function Nav({
  children,
  targetClass,
  _ref,
  ...props
}: {
  children: React.ReactNode;
  targetClass?: string;

  _ref?: React.RefObject<HTMLElement>;
}) {
  return (
    <nav className={`${css.Nav} ${targetClass}`} ref={_ref} {...props}>
      <ul>{children}</ul>
    </nav>
  );
}

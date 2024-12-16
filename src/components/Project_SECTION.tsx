//
//
//

import React from "react";

export default function Project_SECTION({
  children,
  section_SLUG,
  last = false,
  hideContent = false,
}: {
  children: React.ReactNode;
  section_SLUG: string;

  last?: boolean;
  hideContent: boolean;
}) {
  return (
    <section id={section_SLUG} data-last={last} data-hide={hideContent}>
      {children}
    </section>
  );
}

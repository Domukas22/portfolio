//
//
//

import React, { MutableRefObject } from "react";

export default function Project_SECTION({
  children,
  section_SLUG,
  index,
  sectionRefs,
  last = false,
}: {
  children: React.ReactNode;
  section_SLUG: string;
  index: number;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  last?: boolean;
}) {
  return (
    <section
      id={section_SLUG}
      ref={(el) => {
        sectionRefs.current[index] = el;
      }}
      data-last={last}
    >
      {children}
    </section>
  );
}

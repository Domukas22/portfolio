//
//
//

import React, { MutableRefObject } from "react";

export default function Project_SECTION({
  children,
  section_SLUG,
  last = false,
  index,
  sectionRefs,
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
      data-last={last}
      ref={(el) => {
        if (sectionRefs?.current) {
          sectionRefs.current[index] = el;
        }
      }}
    >
      {children}
    </section>
  );
}

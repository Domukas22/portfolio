//
//
//

import { useMemo, useRef, useState, useEffect } from "react";

export default function USE_scrollSpy(slugs: string[]) {
  // Create an array of section IDs for the observer
  const sectionIds = useMemo(() => slugs, [slugs]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]); // Explicitly declare the type

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  // Scroll Spy Logic: IntersectionObserver
  useEffect(() => {
    // Check if IntersectionObserver is available
    if (!("IntersectionObserver" in window)) {
      console.warn("IntersectionObserver is not supported in this browser.");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const index = sectionIds?.indexOf(visibleSection.target.id);
          if (index !== -1) {
            setActiveSectionIndex(index); // Update active section index
          }
        }
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    // Capture a snapshot of the current refs to ensure cleanup uses a stable reference
    const currentRefs = sectionRefs.current;

    // Safely observe only valid elements
    currentRefs.forEach((section) => {
      if (section instanceof Element) {
        observer.observe(section);
      } else {
        console.warn("Skipping invalid section:", section);
      }
    });

    return () => {
      currentRefs.forEach((section) => {
        if (section instanceof Element) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionIds]);

  return { activeSectionIndex, sectionRefs };
}

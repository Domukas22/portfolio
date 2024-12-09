//
//
//

import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { RootEl } from "./RootEl";
import { RootWindow } from "./RootWindow";
import { RootFactory } from "./RootFactory";

export const USE_scrollSpy = ({
  sectionRefs,
  rootSelector,
  offset = 0,
}: {
  sectionRefs: RefObject<Element>[]; // Array of refs for each section
  rootSelector?: string;
  offset?: number;
}) => {
  const rootEl = useRef<RootWindow | RootEl | null>(null);

  // Effect to initialize root element (e.g., window or container for scrolling)
  useEffect(() => {
    rootEl.current = RootFactory.create(rootSelector);
    console.log("Root element:", rootEl.current);
  }, [rootSelector]);

  const isScrolledToBottom = useCallback(() => {
    if (!rootEl.current) {
      return false;
    }
    return rootEl.current.isScrolledToBottom();
  }, [rootEl]);

  const isElementInViewport = useCallback(
    (element: Element) => {
      if (!rootEl.current) {
        return false;
      }
      const innerScrollTop = rootEl.current.scrollTop;
      const innerScrollBottom = innerScrollTop + rootEl.current.outerHeight;
      const elementRect = element.getBoundingClientRect();
      const elementScrollTop =
        rootEl.current instanceof RootEl
          ? innerScrollTop + elementRect.top - rootEl.current.top + offset
          : innerScrollTop + elementRect.top + offset;
      const elementScrollBottom = elementScrollTop + elementRect.height;

      return [
        elementScrollTop < innerScrollBottom,
        elementScrollBottom > innerScrollTop,
      ].every((v) => v);
    },
    [rootEl, offset]
  );

  const getElementsStatusInViewport = useCallback(() => {
    console.log("Checking which sections are in viewport..."); // Log at the start
    return sectionRefs.map((sectionRef) => {
      if (sectionRef.current) {
        const inViewport = isElementInViewport(sectionRef.current);
        console.log(
          `Section ${sectionRef.current.id} in viewport: ${inViewport}`
        ); // Log each section's status
        return inViewport;
      }
      return false;
    });
  }, [isElementInViewport, sectionRefs]);

  const [elementsStatusInViewport, updateElementsStatusInViewport] = useState<
    boolean[]
  >([]);

  const currentElementIndexInViewport = useMemo(
    () => elementsStatusInViewport.findIndex((status) => status),
    [elementsStatusInViewport]
  );

  const spy = useCallback(() => {
    console.log("Scroll event triggered"); // Check if the scroll event is firing
    const sectionCount = sectionRefs?.length || 0;

    const newElementsStatusInViewport = isScrolledToBottom()
      ? [
          ...new Array(Math.max(0, sectionCount - 1)) // Ensure no negative length
            .fill(false)
            .map((v) => v),
          true, // Mark last section as in view
        ]
      : getElementsStatusInViewport();

    console.log("Updated elements in viewport:", newElementsStatusInViewport);
    updateElementsStatusInViewport(newElementsStatusInViewport);
  }, [getElementsStatusInViewport, isScrolledToBottom, sectionRefs]);

  useEffect(() => {
    spy();
    if (rootEl.current) {
      rootEl.current.registerScrollEvent(spy);
    }

    return () => {
      if (rootEl.current) {
        rootEl.current.unregisterScrollEvent(spy);
      }
    };
  }, [spy]);

  return {
    elementsStatusInViewport,
    currentElementIndexInViewport,
  };
};

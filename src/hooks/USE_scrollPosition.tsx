//
//
//

import { useState, useEffect } from "react";

export default function USE_scrollPosition() {
  const [scrollPosition, SET_scrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      SET_scrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize position on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

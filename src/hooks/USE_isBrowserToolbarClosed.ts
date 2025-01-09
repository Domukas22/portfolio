//
//

import { useEffect, useState } from "react";

export default function USE_isBrowserToolbarClosed() {
  const [closed, SET_closed] = useState(false);

  useEffect(() => {
    function handleResize() {
      const innerHeight = window.innerHeight;
      const clientHeight = document.documentElement.clientHeight;
      SET_closed(innerHeight > clientHeight);
    }

    // Initial check
    handleResize();

    // Event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return closed;
}

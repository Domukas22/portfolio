//
//
//

export default function SCROLL_to({
  instant = false,
  target_ID,
}: {
  instant?: boolean;
  target_ID?: string;
}) {
  const behavior = instant ? "instant" : "smooth";

  if (target_ID) {
    const targetElement = document.getElementById(target_ID);
    if (targetElement) {
      // Calculate the distance from the top of the page
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      // Convert 10vh to pixels
      const offset = -10 * (window.innerHeight / 100);

      // Scroll to the element position plus the offset
      window.scrollTo({
        top: elementPosition + offset,
        behavior,
      });
    } else {
      console.warn(`Element with ID "${target_ID}" not found.`);
    }
  } else {
    window.scrollTo({ top: 0, behavior });
  }
}

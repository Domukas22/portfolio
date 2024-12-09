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
    document.getElementById(target_ID)?.scrollIntoView({
      behavior,
      block: "start",
    });
  } else {
    window.scrollTo({ top: 0, behavior });
  }
}

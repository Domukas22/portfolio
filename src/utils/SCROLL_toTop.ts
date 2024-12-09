//
//
//

export default function SCROLL_toTop({
  instant = false,
}: {
  instant?: boolean;
}) {
  window.scrollTo({ top: 0, behavior: instant ? "instant" : "smooth" });
}

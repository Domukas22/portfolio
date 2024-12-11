//
//
//

export default function ModalMenu_UNDERLAY({
  open = false,
}: {
  open: boolean;
}) {
  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-[#0000009f] z-50"
      style={{
        transition: "150ms ease-in",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
      }}
    />
  );
}

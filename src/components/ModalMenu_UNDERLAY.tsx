//
//
//

export default function ModalMenu_UNDERLAY({
  open = false,
  onClick = () => {},
}: {
  open: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-[#000000bd] backdrop-blur z-30"
      style={{
        transition: "150ms ease-in",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
      }}
      onClick={onClick}
    />
  );
}

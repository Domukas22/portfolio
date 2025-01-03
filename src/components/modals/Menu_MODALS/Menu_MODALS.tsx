//
//
//

import ModalMenu_UNDERLAY from "@/components/ModalMenu_UNDERLAY";
import DesktopMenu_MODAL from "./components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import MobileMenu_MODAL from "./components/MobileMenu_MODAL";

export default function Menu_MODALS({
  IS_mobileMenuOpen,
  IS_deskMenuOpen,
  CLOSE_mob,
  CLOSE_desk,
}: {
  IS_mobileMenuOpen: boolean;
  IS_deskMenuOpen: boolean;
  CLOSE_mob: () => void;
  CLOSE_desk: () => void;
}) {
  return (
    <>
      <MobileMenu_MODAL IS_open={IS_mobileMenuOpen} CLOSE_modal={CLOSE_mob} />

      <DesktopMenu_MODAL
        IS_open={IS_deskMenuOpen}
        TOGGLE_open={CLOSE_desk}
        SHOW_homeBtn={true}
      />

      {/* Darkening for desktop side menu modal */}
      <ModalMenu_UNDERLAY open={IS_deskMenuOpen} />
    </>
  );
}

//
//
//

import USE_Toggle from "./USE_toggle";

export default function USE_projectMenuStates() {
  const { state: IS_deskMenuOpen, set: SET_deskMenuOpen } = USE_Toggle(false);
  const { state: IS_mobMenuOpen, set: SET_mobMenuOpen } = USE_Toggle(false);
  const { state: IS_mobProjectOpen, set: SET_mobProjectMenuOpen } =
    USE_Toggle(false);

  return {
    IS_deskMenuOpen,
    IS_mobMenuOpen,
    IS_mobProjectOpen,
    SET_deskMenuOpen,
    SET_mobMenuOpen,
    SET_mobProjectMenuOpen,
  };
}

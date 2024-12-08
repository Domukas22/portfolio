//
//
//

import { useState } from "react";

interface props {
  state: boolean;
  toggle: () => void;
  SET_state: (value: boolean) => void;
}

export default function USE_Toggle(initialState: boolean = false): props {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = () => setState((prev) => !prev);
  const SET_state = (value: boolean) => setState(Boolean(value));

  return {
    state,
    toggle,
    SET_state,
  };
}

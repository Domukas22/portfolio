//
//
//

import { useState } from "react";

interface props {
  state: boolean;
  toggle: () => void;
  set: (value: boolean) => void;
}

export default function USE_Toggle(initialState: boolean = false): props {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = () => setState((prev) => !prev);
  const set = (value: boolean) => setState(Boolean(value));

  return {
    state,
    toggle,
    set,
  };
}

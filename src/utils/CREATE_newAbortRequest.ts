//
//
//

import { MutableRefObject } from "react";

export default function CREATE_newAbortRequest(
  abortControllerRef: MutableRefObject<AbortController | null>
) {
  if (abortControllerRef.current) {
    abortControllerRef.current.abort();
  }
  const newAbortController = new AbortController();
  abortControllerRef.current = newAbortController;
}

//
//
//

export default function IS_abortError(error_MSG: string | undefined) {
  return error_MSG === "AbortError: Aborted" ? true : false;
}

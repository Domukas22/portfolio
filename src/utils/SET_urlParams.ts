//
//
//

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface SetUrlParams_TYPE {
  params: URLSearchParams;
  router: AppRouterInstance;
  toAdd_ARR?: [string, string][];
  toDelete_ARR?: string[];
}

export default function SET_urlParams({
  params,
  toAdd_ARR,
  toDelete_ARR,
}: SetUrlParams_TYPE) {
  const newParams = new URLSearchParams(params.toString());
  if (toDelete_ARR) {
    toDelete_ARR.forEach((var_NAME) => {
      newParams.delete(var_NAME);
    });
  }
  if (toAdd_ARR) {
    toAdd_ARR.forEach(([var_NAME, value]) => {
      newParams.append(var_NAME, value);
    });
  }

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${newParams.toString()}`
  );
}

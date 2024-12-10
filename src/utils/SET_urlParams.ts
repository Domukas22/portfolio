//
//
//

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface SetUrlParams_TYPE {
  params: URLSearchParams;
  router: AppRouterInstance;
  toAdd_ARR?: [string, string][];
  toDelete_ARR?: string[];
  clearAll?: boolean;
}

export default function SET_urlParams({
  params,
  toAdd_ARR,
  toDelete_ARR,
  clearAll,
}: SetUrlParams_TYPE) {
  let newParams = new URLSearchParams();

  if (!clearAll) {
    // If clearAll is false or undefined, start with existing params
    newParams = new URLSearchParams(params.toString());

    // Handle toDelete_ARR
    if (toDelete_ARR) {
      toDelete_ARR.forEach((var_NAME) => {
        newParams.delete(var_NAME);
      });
    }
  }

  // Handle toAdd_ARR
  if (toAdd_ARR) {
    toAdd_ARR.forEach(([var_NAME, value]) => {
      newParams.append(var_NAME, value);
    });
  }

  // Update the URL
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${newParams.toString()}`
  );
}

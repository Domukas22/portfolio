//
//
//

//
//
//

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function SET_urlParams({
  params,
  toAdd_ARR,
  toDelete_ARR,
}: {
  params: URLSearchParams;
  router: AppRouterInstance;
  toAdd_ARR?: [string, string][];
  toDelete_ARR?: string[];
}) {
  const newParams = new URLSearchParams(params.toString());
  // const deffered = useDeferredValue(searchParams);
  if (toDelete_ARR) {
    toDelete_ARR.forEach((var_NAME) => {
      newParams.delete(var_NAME);
    });
  }
  if (toAdd_ARR) {
    toAdd_ARR.forEach(([var_NAME, value]) => {
      // newParams.set(var_NAME, value); // used in all tags page
      newParams.append(var_NAME, value);
    });
  }

  // console.log(toDelete_ARR, toAdd_ARR);

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${newParams.toString()}`
  );
}

///
//
//

import { Oval } from "react-loader-spinner";

export function Dark_SPINNER() {
  return (
    <Oval
      visible={true}
      height="2.2rem"
      width="2.2rem"
      strokeWidth="6"
      secondaryColor="transparent"
      color="black"
      ariaLabel="oval-loading"
    />
  );
}
export function Grey_SPINNER() {
  return (
    <Oval
      visible={true}
      height="2.2rem"
      width="2.2rem"
      strokeWidth="6"
      secondaryColor="transparent"
      color="grey"
      ariaLabel="oval-loading"
    />
  );
}
export function White_SPINNER() {
  return (
    <Oval
      visible={true}
      height="2.2rem"
      width="2.2rem"
      strokeWidth="6"
      secondaryColor="transparent"
      color="white"
      ariaLabel="oval-loading"
    />
  );
}

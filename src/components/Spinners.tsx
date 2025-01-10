///
//
//

import { Oval } from "react-loader-spinner";

export default function Spinner({
  color = "grey",
  ...props
}: {
  color?: "grey" | "white";
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Oval
        visible={true}
        height="2.2rem"
        width="2.2rem"
        strokeWidth="6"
        secondaryColor="transparent"
        color={color}
        ariaLabel="oval-loading"
      />
    </div>
  );
}

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

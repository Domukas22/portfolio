//
//
//

import { Grey_SPINNER } from "./Spinners";

export default function TextSpinnerLoading_BOX({
  text,
  remHeight,
}: {
  text: string;
  remHeight?: number;
}) {
  return (
    <div
      className="w-full rounded-[1.2rem] flex flex-col items-center justify-center pb-[1.4rem] pt-[2rem] gap-[1rem]"
      style={{
        border: "var(--border-light)",
        height: remHeight ? remHeight + "rem" : "",
      }}
    >
      <Grey_SPINNER />
      <p>{text ?? "Loading..."}</p>
    </div>
  );
}

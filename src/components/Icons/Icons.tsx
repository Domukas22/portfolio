//
//
//

import MERGE_htmlElementAttributes from "@/utils/MERGE_htmlElementAttributes";
import css from "./Icons.module.css";

export function ICON_dropDownArrow({
  color = "white",
  extraAttributes,
  ...props
}: {
  color?: "white";
  extraAttributes?: string[];
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={css.ICON_dropDownArrow}
      data-color={color}
      {...props}
      {...MERGE_htmlElementAttributes(extraAttributes)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7 6"
        fill="none"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <path d="M4.36602 5.5C3.98112 6.16667 3.01888 6.16667 2.63397 5.5L0.46891 1.75C0.0840102 1.08333 0.565136 0.25 1.33494 0.25L5.66506 0.249999C6.43487 0.249999 6.91599 1.08333 6.53109 1.75L4.36602 5.5Z" />
      </svg>
    </div>
  );
}
export function ICON_x({
  color = "dark",
  big = false,
  extraAttributes,
  ...props
}: {
  color?: "dark";
  big?: boolean;
  extraAttributes?: string[];
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={css.ICON_x}
      data-color={color}
      data-big={big}
      {...props}
      {...MERGE_htmlElementAttributes(extraAttributes)}
    ></div>
  );
}
export function ICON_arrow({
  direction = "right",
  color = "white",
  extraAttributes,
  ...props
}: {
  direction: "up" | "right" | "down" | "left";
  color?: "white" | "white-dimm";
  extraAttributes?: string[];
} & React.HTMLAttributes<HTMLDivElement>) {
  const rotationAngle = {
    right: "0deg",
    left: "180deg",
    down: "90deg",
    up: "-90deg",
  }[direction];

  return (
    <div {...props} {...MERGE_htmlElementAttributes(extraAttributes)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="14"
        viewBox="0 0 18 12"
        fill="none"
        style={{ rotate: rotationAngle }}
        className={css.ICON_arrow}
      >
        <path
          d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75L17 6.75L17 5.25L1 5.25L1 6.75Z"
          className={css.path_FILL}
          data-color={color}
        />
      </svg>
    </div>
  );
}

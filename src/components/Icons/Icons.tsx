//
//
//

import css from "./Icons.module.css";

type size = "small" | "medium" | "big";

export function ICON_dropDownArrow({
  color = "white",
  size = "small",
  ...props
}: {
  color?: "white" | "main";
  size?: size;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={css.ICON_dropDownArrow}
      data-color={color}
      {...props}
      data-size={size}
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
  color = "white",
  size = "small",
  ...props
}: {
  color?: "white" | "main";
  size?: size;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={css.ICON_x}
      data-color={color}
      data-size={size}
      {...props}
    />
  );
}
export function ICON_arrow({
  direction = "right",
  color = "white",
  size = "medium",
  ...props
}: {
  direction: "up" | "right" | "down" | "left";
  color?: "white" | "light";
  size?: size;
} & React.HTMLAttributes<HTMLDivElement>) {
  const rotationAngle = {
    right: "0deg",
    left: "180deg",
    down: "90deg",
    up: "-90deg",
  }[direction];

  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="14"
        viewBox="0 0 18 12"
        fill="none"
        style={{ rotate: rotationAngle }}
        className={css.ICON_arrow}
        data-size={size}
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
export function ICON_error({
  size = "medium",
  ...props
}: {
  size?: size;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 19"
        fill="none"
        className={css.ICON_error}
        data-size={size}
      >
        <path
          d="M10.8849 0.4905C10.5389 -0.1635 9.46294 -0.1635 9.11694 0.4905L0.116935 17.4905C0.0359187 17.6429 -0.00424573 17.8136 0.00035519 17.9861C0.00495611 18.1586 0.0541655 18.327 0.143189 18.4749C0.232212 18.6227 0.358012 18.7449 0.508333 18.8297C0.658653 18.9145 0.828366 18.9588 1.00094 18.9585H19.0009C19.1734 18.9589 19.343 18.9145 19.4932 18.8298C19.6434 18.7451 19.7691 18.6229 19.8581 18.4752C19.947 18.3274 19.9961 18.1591 20.0007 17.9867C20.0052 17.8144 19.965 17.6437 19.8839 17.4915L10.8849 0.4905ZM11.0009 15.9585H9.00094V13.9585H11.0009V15.9585ZM9.00094 11.9585V6.9585H11.0009L11.0019 11.9585H9.00094Z"
          className={css.path_FILL}
        />
      </svg>
    </div>
  );
}

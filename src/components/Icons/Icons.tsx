//
//
//

import css from "./Icons.module.css";

export function ICON_dropDownArrow() {
  return (
    <div className={css.ICON_dropDownArrow} data-color="white">
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
export function ICON_x({ color = "dark", big = false }) {
  return <div className={css.ICON_x} data-color={color} data-big={big}></div>;
}

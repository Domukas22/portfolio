//
//
//

import move from "lodash-move";

export default function MOVE_itemInArray(
  array: any[],
  index: number,
  direction: "prev" | "next"
) {
  const newArray = [...array];
  if (direction === "prev" && index > 0) {
    return move(newArray, index, index - 1);
  } else if (direction === "next" && index < array.length - 1) {
    return move(newArray, index, index + 1);
  }
  return newArray;
}

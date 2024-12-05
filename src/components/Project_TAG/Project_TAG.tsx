//
//
//

import { ProjectTag_TYPE } from "@/projects/types";
import css from "./style.module.css";

export default function Project_TAG({ tag }: { tag: ProjectTag_TYPE }) {
  let text = "Tag";

  switch (tag) {
    case "app":
      text = "App design";
      break;
    case "coding":
      text = "Writing code";
      break;
    case "images":
      text = "Taking images";
      break;
    case "logo":
      text = "Logo design";
      break;
    case "video":
      text = "Creating a video";
      break;
    case "website":
      text = "Website design";
      break;
    case "in-progress":
      text = "In progress...";
      break;
  }

  return (
    <p className={css.tag} data-tag-type={tag}>
      {text}
    </p>
  );
}

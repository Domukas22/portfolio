//
//
//

import { UxRating_TYPE } from "./features/my-ux/ux-ratings/FETCH_myUxRatings/types";

export type submittableUx_TYPE = {
  id: string | undefined;
  title: string | undefined;
  rating: UxRating_TYPE | undefined;
  paragraphs: string[] | undefined;
  image_FILES: File[] | undefined;
};

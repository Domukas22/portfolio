//
//
//

import Error_BOX from "@/components/Error_BOX/Error_BOX";
import Radio_INPUTS from "@/components/Radio_INPUTS/Radio_INPUTS";
import { Grey_SPINNER } from "@/components/Spinners";
import { myUx_EMOJIS } from "@/globals";
import {
  FETCH_myUxRatings_ERRPROPS,
  UxRating_TYPE,
} from "@/features/my-ux/ux-ratings/FETCH_myUxRatings/types";
import React from "react";

export default function MyUxRating_INPUTS({
  ratings,
  rating,
  SET_rating,
  ARE_ratingsLoading,
  ratings_ERROR,
}: {
  ratings: UxRating_TYPE[] | undefined;
  rating: string;
  SET_rating: React.Dispatch<React.SetStateAction<string>>;
  ARE_ratingsLoading: boolean;
  ratings_ERROR: FETCH_myUxRatings_ERRPROPS | undefined;
}) {
  return ARE_ratingsLoading ? (
    <Grey_SPINNER />
  ) : ratings && ratings?.length ? (
    <Radio_INPUTS
      label="Rating"
      radios={ratings?.map((x) => ({
        value: x.id,
        displayText: myUx_EMOJIS[x.rating] + " " + x.rating,
      }))}
      value={rating}
      SET_value={SET_rating}
    />
  ) : ratings_ERROR ? (
    <Error_BOX text={ratings_ERROR?.user_MSG} />
  ) : null;
}

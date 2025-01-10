//
//
//

import Error_BOX from "@/components/Error_BOX/Error_BOX";
import Radio_INPUTS from "@/components/Radio_INPUTS/Radio_INPUTS";
import { Grey_SPINNER } from "@/components/Spinners";

import {
  FETCH_myUxRatings_ERRPROPS,
  UxRating_TYPE,
} from "@/features/my-ux/ux-ratings/radioOptions/FETCH_myUxRatings/types";

import React from "react";

export default function MyUxRating_INPUTS({
  ratings,
  rating,
  SET_rating,
  ARE_ratingsLoading,
  ratings_ERROR,
}: {
  ratings: UxRating_TYPE[] | undefined;
  rating: UxRating_TYPE | undefined;
  SET_rating: (id: string) => void;
  ARE_ratingsLoading: boolean;
  ratings_ERROR: FETCH_myUxRatings_ERRPROPS | undefined;
}) {
  return ARE_ratingsLoading ? (
    <Grey_SPINNER />
  ) : ratings && ratings?.length ? (
    <Radio_INPUTS
      label="Rating"
      radios={ratings?.map((rating) => ({
        value: rating.id,
        displayText: rating.text,
      }))}
      value={rating?.id || ""}
      SET_value={SET_rating}
    />
  ) : ratings_ERROR ? (
    <Error_BOX text={ratings_ERROR?.user_MSG} />
  ) : null;
}

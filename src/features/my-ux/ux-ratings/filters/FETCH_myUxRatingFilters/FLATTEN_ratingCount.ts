//
//
//

import { RawUxRating_TYPE } from "./types";

export default function FLATTEN_ratingCount(
  ratings: RawUxRating_TYPE[] | null
) {
  return ratings?.map((r) => ({
    ...r,
    count: r.count?.[0]?.count ?? 0, // Accessing the first object in count array and safely extracting count
  }));
}

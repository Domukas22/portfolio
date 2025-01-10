//
//
//

import Error_BOX from "@/components/Error_BOX/Error_BOX";
import Radio_INPUTS from "@/components/Radio_INPUTS/Radio_INPUTS";
import TextSpinnerLoading_BOX from "@/components/TextSpinnerLoading_BOX";
import {
  FETCH_myUxRatingFilters_ERRPROPS,
  UxFilter_TYPE,
} from "@/features/my-ux/ux-ratings/filters/FETCH_myUxRatingFilters/types";

export default function MyUxFilter_RADIOS({
  options,
  current,
  select,
  loading,
  error,
  hideLabel = false,
}: {
  options: UxFilter_TYPE[] | undefined;
  current: UxFilter_TYPE | undefined;
  select: (id: string) => void;
  loading: boolean;
  hideLabel?: boolean;
  error: FETCH_myUxRatingFilters_ERRPROPS | undefined;
}) {
  if (error)
    return <Error_BOX text={error?.user_MSG} light iconPosition="top" />;
  if (loading) return <TextSpinnerLoading_BOX text="Loading filters..." />;
  if (options && options?.length)
    return (
      <Radio_INPUTS
        label="Filter by rating"
        radios={options?.map((f) => ({
          value: f.id,
          displayText: f.text,
          count: f.count,
        }))}
        value={current?.id || ""}
        SET_value={select}
        hideLabel={hideLabel}
      />
    );

  return null;
}

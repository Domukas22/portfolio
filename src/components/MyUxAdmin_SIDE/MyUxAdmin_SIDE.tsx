//
//
//

import MyUxImages_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxImages_INPUTS";
import MyUxParagraph_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxParagraph_INPUTS";
import MyUxRating_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxRating_INPUTS";
import MyUxFromTitle_INPUT from "@/components/MyUxAdmin_SIDE/components/MyUxTitle_INPUT";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";

import css from "./MyUxAdmin_SIDE.module.css";
import USE_handleUx from "./hooks/USE_handleUx";
import USE_uxRatings from "@/features/my-ux/ux-ratings/radioOptions/USE_uxRatings/USE_uxRatings";
import MyUxBottom_BTNS from "./components/MyUxBottom_BTNS";

import USE_isBrowserToolbarClosed from "@/hooks/USE_isBrowserToolbarClosed";
import { useMemo } from "react";
import { submittableUx_TYPE } from "@/globals";

export default function MyUxAdmin_SIDE({
  target_UX,
  UNSELECT_ux = () => {},
  OPEN_deleteModal = () => {},
  status,
  mobile = false,
  id,
  action,
}: {
  target_UX: MyUx_TYPE | undefined;
  UNSELECT_ux: () => void;
  OPEN_deleteModal: () => void;
  action: {
    fn: (edited_UX: submittableUx_TYPE) => void;
    type: "Update" | "Create";
  };
  mobile?: boolean;
  status: string;

  id: string; // we need the id for the file input. It's created without react aria comps, so we need a native id
}) {
  const {
    title,
    rating,
    paragraphs,
    image_FILES,
    MOVE_image,
    DELETE_image,
    UPLOAD_images,
    SET_title,
    SET_rating,
    SET_paragraphs,
    ADD_parag,
    REMOVE_parag,
    POPULATE_form,
  } = USE_handleUx({ ux: target_UX });

  const {
    ratings,
    IS_loading: ARE_ratingsLoading,
    error: ratings_ERROR,
  } = USE_uxRatings();

  const IS_mobibeBrowserToolbarClosed = USE_isBrowserToolbarClosed();
  const submittable_UX = useMemo(
    (): submittableUx_TYPE => ({
      id: target_UX?.id || "",
      image_FILES,
      paragraphs,
      rating,
      title,
    }),
    [target_UX, image_FILES, paragraphs, rating, title]
  );

  return (
    <div
      className={css.MyUxAdmin_SIDE}
      data-hide={!target_UX?.id}
      data-desk={!mobile}
      key={id + "side"}
    >
      {!status ? <h4 data-title>{target_UX?.title}</h4> : null}

      {status ? <p data-title>{status}</p> : null}

      <div data-content-wrap>
        <MyUxFromTitle_INPUT {...{ title, SET_title }} />
        <MyUxImages_INPUTS
          {...{
            image_FILES,
            DELETE_image,
            MOVE_image,
            UPLOAD_images,
            id,
          }}
        />
        <MyUxRating_INPUTS
          {...{
            rating,
            SET_rating: (id: string) => {
              SET_rating(ratings?.find((r) => r.id === id));
            },
            ratings,
            ARE_ratingsLoading,
            ratings_ERROR,
          }}
        />
        <MyUxParagraph_INPUTS
          {...{ paragraphs, REMOVE_parag, SET_paragraphs, ADD_parag }}
        />
      </div>

      <MyUxBottom_BTNS
        {...{ action, UNSELECT_ux, POPULATE_form, status, OPEN_deleteModal }}
        action={{ type: action?.type, fn: () => action?.fn(submittable_UX) }}
        paddingBottom={IS_mobibeBrowserToolbarClosed}
      />
      <p data-no-ux-selected-text>No UX selected</p>
    </div>
  );
}

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
import USE_uxRatings from "@/features/my-ux/ux-ratings/USE_uxRatings/USE_uxRatings";
import MyUxBottom_BTNS from "./components/MyUxBottom_BTNS";

import USE_isBrowserToolbarClosed from "@/hooks/USE_isBrowserToolbarClosed";

export default function MyUxAdmin_SIDE({
  ux,
  UNSELECT_ux = () => {},
  EDIT_displayedUx = () => {},
  mobile = false,
}: {
  ux: MyUx_TYPE | undefined;
  UNSELECT_ux: () => void;
  EDIT_displayedUx: (ux: MyUx_TYPE) => void;
  mobile?: boolean;
}) {
  const {
    ratings,
    IS_loading: ARE_ratingsLoading,
    error: ratings_ERROR,
  } = USE_uxRatings();

  const {
    title,
    rating,
    paragraphs,
    image_FILES,
    MOVE_image,
    DELETE_images,
    UPLOAD_images,
    SET_title,
    SET_rating,
    SET_paragraphs,
    ADD_parag,
    REMOVE_parag,
    status,
    UPDATE_ux,
    POPULATE_form,
  } = USE_handleUx({ ux, EDIT_displayedUx });

  const IS_mobibeBrowserToolbarClosed = USE_isBrowserToolbarClosed();

  return (
    <div className={css.MyUxAdmin_SIDE} data-hide={!ux?.id} data-desk={!mobile}>
      {!status ? <h4 data-title>{ux?.title}</h4> : null}

      {status ? <p data-title>{status}</p> : null}

      <div data-content-wrap>
        <MyUxFromTitle_INPUT {...{ title, SET_title }} />
        <MyUxImages_INPUTS
          {...{
            image_FILES,

            DELETE_images,
            MOVE_image,
            UPLOAD_images,
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
        {...{ submit: () => UPDATE_ux(), UNSELECT_ux, POPULATE_form, status }}
        paddingBottom={IS_mobibeBrowserToolbarClosed}
      />
      <p data-no-ux-selected>No UX selected</p>
    </div>
  );
}

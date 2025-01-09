//
//
//

import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import { useState, useCallback, useEffect } from "react";

import UPDATE_myUx from "../utils/UPDATE_myUx";
import USE_handleUxImages from "./USE_handleUxImages";
import USE_handleUxParagraphs from "./USE_handleUxParagraphs";
import { UxRating_TYPE } from "@/features/my-ux/ux-ratings/FETCH_myUxRatings/types";

export default function USE_handleUx({
  ux,
  EDIT_displayedUx = () => {},
}: {
  ux: MyUx_TYPE | undefined;
  EDIT_displayedUx: (ux: MyUx_TYPE) => void;
  IS_mobileModalOpen?: boolean;
}) {
  const [title, SET_title] = useState<string | undefined>(ux?.title || "");
  const [paragraphs, SET_paragraphs] = useState<string[]>(ux?.paragraphs || []);
  const [rating, SET_rating] = useState<UxRating_TYPE | undefined>(
    ux?.rating || undefined
  );
  const [image_FILES, SET_imageFiles] = useState<File[]>([]);
  const [status, SET_status] = useState("");

  const { ADD_parag, REMOVE_parag } = USE_handleUxParagraphs({
    SET_paragraphs,
  });

  const { DELETE_images, MOVE_image, PLACE_images, UPLOAD_images } =
    USE_handleUxImages({ ux, SET_imageFiles });

  useEffect(() => {
    PLACE_images();
  }, [ux, SET_imageFiles, PLACE_images]);

  const UPDATE_ux = () => {
    UPDATE_myUx({
      ux: {
        id: ux?.id,
        image_FILES,
        paragraphs,
        rating,
        title,
      },
      SET_status,
      EDIT_displayedUx: (ux: MyUx_TYPE) => {
        EDIT_displayedUx({
          ...ux,
        });
      },
    });
  };

  const POPULATE_form = useCallback(() => {
    SET_title(ux?.title || undefined);
    SET_paragraphs(ux?.paragraphs || []);
    SET_rating(ux?.rating || undefined);
    PLACE_images();
  }, [ux, SET_paragraphs, SET_rating, SET_title, PLACE_images]);

  useEffect(() => {
    POPULATE_form();
  }, [ux, POPULATE_form]);

  return {
    title,
    rating,
    paragraphs,
    image_FILES,
    UPLOAD_images,
    DELETE_images,
    MOVE_image,
    SET_title,
    SET_rating,
    SET_paragraphs,
    REMOVE_parag,
    ADD_parag,
    status,
    UPDATE_ux,
    POPULATE_form,
  };
}

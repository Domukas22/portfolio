//
//
//

import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import {
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

import USE_handleUxImages from "./USE_handleUxImages";
import USE_handleUxParagraphs from "./USE_handleUxParagraphs";
import { UxRating_TYPE } from "@/features/my-ux/ux-ratings/radioOptions/FETCH_myUxRatings/types";

export type USE_handleUx_RETURNTYPE = {
  title: string | undefined;
  rating: UxRating_TYPE | undefined;
  paragraphs: string[] | undefined;
  image_FILES: File[] | undefined;
  UPLOAD_images: (e: React.ChangeEvent<HTMLInputElement>) => void;
  DELETE_image: (index: number) => void;
  MOVE_image: (index: number, direction: "prev" | "next") => void;
  SET_title: Dispatch<SetStateAction<string | undefined>>;
  SET_rating: Dispatch<SetStateAction<UxRating_TYPE | undefined>>;
  SET_paragraphs: Dispatch<SetStateAction<string[]>>;
  REMOVE_parag: (index: number) => void;
  ADD_parag: () => void;
  POPULATE_form: () => void;
};

export default function USE_handleUx({
  ux,
}: {
  ux: MyUx_TYPE | undefined;
}): USE_handleUx_RETURNTYPE {
  const [title, SET_title] = useState<string | undefined>(ux?.title || "");
  const [paragraphs, SET_paragraphs] = useState<string[]>(ux?.paragraphs || []);
  const [rating, SET_rating] = useState<UxRating_TYPE | undefined>(
    ux?.rating || undefined
  );
  const [image_FILES, SET_imageFiles] = useState<File[]>([]);

  const { ADD_parag, REMOVE_parag } = USE_handleUxParagraphs({
    SET_paragraphs,
  });

  const { DELETE_image, MOVE_image, PLACE_images, UPLOAD_images } =
    USE_handleUxImages({ ux, SET_imageFiles });

  useEffect(() => {
    PLACE_images();
  }, [ux, SET_imageFiles, PLACE_images]);

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
    DELETE_image,
    MOVE_image,
    SET_title,
    SET_rating,
    SET_paragraphs,
    REMOVE_parag,
    ADD_parag,
    POPULATE_form,
  };
}

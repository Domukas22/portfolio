//
//
//

import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import { useEffect, useState } from "react";

export default function USE_myUxInputs({ ux }: { ux: MyUx_TYPE | undefined }) {
  const [title, SET_title] = useState<string>(ux?.title || "");
  const [paragraphs, SET_paragraphs] = useState<string[]>(ux?.paragraphs || []);

  const [rating, SET_rating] = useState<string>(ux?.rating || "");

  useEffect(() => {
    SET_title(ux?.title || "");
    SET_paragraphs(ux?.paragraphs || []);
  }, [ux]);

  const REMOVE_parag = (index: number) => {
    SET_paragraphs((prev) => prev.filter((_, i) => i !== index));
  };
  const ADD_parag = () => {
    SET_paragraphs((prev) => [...prev, ""]);
  };

  return {
    title,
    rating,
    paragraphs,
    SET_title,
    SET_rating,
    SET_paragraphs,
    REMOVE_parag,
    ADD_parag,
  };
}

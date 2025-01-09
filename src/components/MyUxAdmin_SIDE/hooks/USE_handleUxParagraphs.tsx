//
//
//

import { SetStateAction, useCallback } from "react";

export default function USE_handleUxParagraphs({
  SET_paragraphs,
}: {
  SET_paragraphs: React.Dispatch<SetStateAction<string[]>>;
}) {
  const REMOVE_parag = useCallback(
    (index: number) => {
      SET_paragraphs((prev) => prev.filter((_, i) => i !== index));
    },
    [SET_paragraphs]
  );
  const ADD_parag = useCallback(() => {
    SET_paragraphs((prev) => [...prev, ""]);
  }, [SET_paragraphs]);

  return { ADD_parag, REMOVE_parag };
}

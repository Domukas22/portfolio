//
//
//

import Container from "@/components/Container";

import { CSSProperties } from "react";

export type TextOnly_SECTION_TYPE = {
  texts_ARR: {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
    text: string;
    style?: CSSProperties;
  }[];
};

export function TextOnlySection_CONTENT({ texts_ARR }: TextOnly_SECTION_TYPE) {
  return (
    <Container>
      {texts_ARR?.map((text_OBJ, i) => {
        const Tag = text_OBJ.type || "p"; // Use the specified type or default to <p>

        return (
          <Tag
            key={text_OBJ.text + i}
            style={{ ...text_OBJ.style }}
            dangerouslySetInnerHTML={{ __html: text_OBJ.text }} // Insert HTML content
          />
        );
      })}
    </Container>
  );
}

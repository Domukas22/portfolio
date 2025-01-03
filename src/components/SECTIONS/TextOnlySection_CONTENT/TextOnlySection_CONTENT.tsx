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
        switch (text_OBJ.type) {
          case "h1":
            return (
              <h1 key={text_OBJ.text + i} style={{ ...text_OBJ.style }}>
                {text_OBJ.text}
              </h1>
            );
          case "h2":
            return (
              <h2 key={text_OBJ.text + i} style={{ ...text_OBJ.style }}>
                {text_OBJ.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={text_OBJ.text + i} style={{ ...text_OBJ.style }}>
                {text_OBJ.text}
              </h3>
            );
          case "h4":
            return (
              <h4 key={text_OBJ.text + i} style={{ ...text_OBJ.style }}>
                {text_OBJ.text}
              </h4>
            );
          case "h5":
            return (
              <h5 key={text_OBJ.text + i} style={{ ...text_OBJ.style }}>
                {text_OBJ.text}
              </h5>
            );
          default:
            return (
              <p key={text_OBJ.text + i} style={{ ...text_OBJ.style }}>
                {text_OBJ.text}
              </p>
            );
        }
      })}
    </Container>
  );
}

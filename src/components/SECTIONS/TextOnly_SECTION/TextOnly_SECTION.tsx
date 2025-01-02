//
//
//

import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";
import { TextOnlySection_TYPE } from "@/projects/types/sections";
import { MutableRefObject } from "react";

export function TextOnly_SECTION({
  section_CONTENT,
  sectionRefs,
  index,
}: {
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  index: number;
  section_CONTENT: TextOnlySection_TYPE;
}) {
  const { section_SLUG, texts_ARR } = section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, sectionRefs, index }}>
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
    </Project_SECTION>
  );
}

//
//
//

import Btn from "@/components/Btn/Btn";
import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";

export default function MyUxParagraph_INPUTS({
  paragraphs,
  REMOVE_parag,
  SET_paragraphs,
  ADD_parag,
}) {
  return (
    <>
      {paragraphs.length > 0 &&
        paragraphs.map((p, index) => (
          <div key={index} className="relative">
            <Text_INPUT
              label={`Paragraph ${index + 1}`}
              name={`paragraph-${index}`}
              type="text"
              isRequired={true}
              onChange={(val) => {
                // Update the paragraph at the specific index
                SET_paragraphs((prev) => {
                  const updatedParagraphs = [...prev];
                  updatedParagraphs[index] = val;
                  return updatedParagraphs;
                });
              }}
              value={p}
              // ref={(el) => (inputRefs.current[index] = el)} // Assign the ref for each input
              IS_textArea
            />
            <Btn
              btnType="btn"
              text="Remove"
              onClick={() => REMOVE_parag(index)}
              className="absolute right-0 top-0 p-0"
            />
          </div>
        ))}
      <Btn btnType="btn" text="Add parag" onClick={() => ADD_parag()} />
    </>
  );
}
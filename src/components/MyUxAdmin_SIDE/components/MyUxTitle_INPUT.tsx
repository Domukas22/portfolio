//
//
//

import Text_FIELD from "@/components/Text_FIELD/Text_FIELD";

export default function MyUxFromTitle_INPUT({ title, SET_title }) {
  return (
    <Text_FIELD
      label="Title"
      name="title"
      type="text"
      isRequired={true}
      onChange={SET_title}
      value={title}
    />
  );
}

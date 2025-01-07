//
//
//

import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";

export default function MyUxFromTitle_INPUT({ title, SET_title }) {
  return (
    <Text_INPUT
      label="Title"
      name="title"
      type="text"
      isRequired={true}
      onChange={SET_title}
      value={title}
    />
  );
}

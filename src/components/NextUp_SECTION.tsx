//
//
//

import Container from "./Container";
import Project_SECTION from "./Project_SECTION";

export default function NextUp_SECTION({
  hideContent,
}: {
  hideContent: boolean;
}) {
  return (
    <Project_SECTION
      section_SLUG="next-up"
      index={9999}
      sectionRefs={{ current: [] }}
      last
    >
      <Container {...{ hideContent }} hero>
        <h2>Next up:</h2>
        <p>Hello</p>
      </Container>
    </Project_SECTION>
  );
}

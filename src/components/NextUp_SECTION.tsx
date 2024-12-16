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
    <Project_SECTION section_SLUG="next-up" last {...{ hideContent }}>
      <Container hero>
        <h2>Next up:</h2>
        <p>Hello</p>
      </Container>
    </Project_SECTION>
  );
}

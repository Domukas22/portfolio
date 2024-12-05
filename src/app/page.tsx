//
//
//

import Btn from "@/components/Btn/Btn";
import Project_CARD from "@/components/Project_CARD/Project_CARD";
import Project_LIST from "@/components/Project_LIST/Project_LIST";
import GET_allProjectIntros from "@/utils/GET_allProjectIntros";

const intros = GET_allProjectIntros();

export default async function Home_PAGE() {
  return (
    <>
      <Btn text="Hello" />
      <Project_LIST />
    </>
  );
}

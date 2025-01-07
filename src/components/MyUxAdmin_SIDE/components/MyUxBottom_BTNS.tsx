//
//
//

import Btn from "@/components/Btn/Btn";

export default function MyUxBottom_BTNS({
  submit = () => {},
  UNSELECT_ux = () => {},
  POPULATE_form = () => {},
}: {
  submit: () => void;
  UNSELECT_ux: () => void;
  POPULATE_form: () => void;
}) {
  return (
    <div className="flex">
      <Btn
        btnType="btn"
        text="Cancel"
        onClick={() => UNSELECT_ux()}
        className="flex-1 rounded-none justify-center"
      />
      <Btn
        btnType="btn"
        text="Reset"
        onClick={() => POPULATE_form()}
        className="flex-1 rounded-none justify-center"
      />
      <Btn
        btnType="btn"
        text="Submit"
        onClick={() => submit()}
        className="flex-1 rounded-none justify-center"
      />
    </div>
  );
}

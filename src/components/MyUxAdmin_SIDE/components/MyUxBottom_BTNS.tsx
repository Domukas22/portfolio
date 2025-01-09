//
//
//

import Btn from "@/components/Btn/Btn";

export default function MyUxBottom_BTNS({
  UNSELECT_ux = () => {},
  POPULATE_form = () => {},
  OPEN_deleteModal = () => {},
  paddingBottom = false,
  action,
}: {
  UNSELECT_ux: () => void;
  POPULATE_form: () => void;
  OPEN_deleteModal: () => void;
  paddingBottom: boolean;
  action: {
    fn: () => void;
    type: "Update" | "Create";
  };
}) {
  return (
    <div className="flex">
      {action?.type !== "Create" ? (
        <>
          <Btn
            btnType="btn"
            text="Delete"
            text_STYLES={{ color: "var(--red)" }}
            onClick={() => OPEN_deleteModal()}
            className="flex-1 rounded-none justify-center"
            styles={paddingBottom ? { paddingBottom: "10dvh" } : {}}
          />
          <Btn
            btnType="btn"
            text="Cancel"
            onClick={() => UNSELECT_ux()}
            className="flex-1 rounded-none justify-center"
            styles={paddingBottom ? { paddingBottom: "10dvh" } : {}}
          />
        </>
      ) : null}

      {action?.type === "Update" ? (
        <Btn
          btnType="btn"
          text="Reset"
          onClick={() => POPULATE_form()}
          className="flex-1 rounded-none justify-center"
          styles={paddingBottom ? { paddingBottom: "10dvh" } : {}}
        />
      ) : null}
      <Btn
        btnType="btn"
        text={action?.type}
        onClick={() => action?.fn()}
        className={`flex-1 rounded-none justify-center`}
        styles={paddingBottom ? { paddingBottom: "10dvh" } : {}}
      />
    </div>
  );
}

//
//
//

import DELETE_myUxImages from "@/features/my-ux/ux-images/delete/DELETE_myUxImages/DELETE_myUxImages";
import FETCH_myUxImages from "@/features/my-ux/ux-images/fetch/FETCH_myUxImages/FETCH_myUxImages";
import { supabase } from "@/supabase";

interface USE_updateMyUx_PROPS {
  id: string;
  SET_status: React.Dispatch<React.SetStateAction<string>>;
  REMOVE_displayedUx: (id: string) => void;
  ADD_hiddenId: (id: string) => void;
}

export default async function DELETE_myUx({
  id,
  SET_status,
  REMOVE_displayedUx,
  ADD_hiddenId,
}: USE_updateMyUx_PROPS) {
  SET_status("Fetching old images...");
  const { data: { images } = {}, error: img_ERR } = await FETCH_myUxImages({
    id,
  });

  if (img_ERR) {
    return SET_status(
      img_ERR.internal_MSG || "Something went wrong with fetching old ux images"
    );
  }

  SET_status("Deleting old images...");
  const { error: delete_ERR } = await DELETE_myUxImages({
    id,
    image_NAMES:
      images
        ?.map((file) => file?.name)
        .filter((name): name is string => name !== undefined) || [],
  });

  if (delete_ERR) {
    return SET_status(
      delete_ERR.internal_MSG ||
        "Something went wrong with deleting old ux images"
    );
  }

  SET_status("Deleting ux...");

  const { error } = await supabase.from("my-ux").delete().eq("id", id);

  if (error) {
    console.error(error);
    return SET_status("Error updating ux");
  }
  SET_status("Deleted ✅");

  REMOVE_displayedUx(id || "");
  ADD_hiddenId(id || "");

  setTimeout(() => {
    SET_status("");
  }, 2000);
}

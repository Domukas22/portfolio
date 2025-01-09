//
//
//

import DELETE_myUxImages from "@/features/my-ux/ux-images/delete/DELETE_myUxImages/DELETE_myUxImages";
import FETCH_myUxImages from "@/features/my-ux/ux-images/fetch/FETCH_myUxImages/FETCH_myUxImages";
import UPLOAD_myUxImages from "@/features/my-ux/ux-images/upload/UPLOAD_myUxImages/UPLOAD_myUxImages";
import { UxRating_TYPE } from "@/features/my-ux/ux-ratings/FETCH_myUxRatings/types";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import { supabase } from "@/supabase";

interface USE_updateMyUx_PROPS {
  ux: {
    id: string | undefined;
    title: string | undefined;
    rating: UxRating_TYPE | undefined;
    paragraphs: string[] | undefined;
    image_FILES: File[] | undefined;
  };
  SET_status: React.Dispatch<React.SetStateAction<string>>;
  EDIT_displayedUx: (ux: MyUx_TYPE) => void;
}

export default async function UPDATE_myUx({
  ux,
  SET_status,
  EDIT_displayedUx,
}: USE_updateMyUx_PROPS) {
  const { id, image_FILES, paragraphs, rating, title } = ux;

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

  SET_status("Uploading new images...");
  const { error: upload_ERR } = await UPLOAD_myUxImages({
    id,
    image_FILES,
  });

  if (upload_ERR) {
    return SET_status(
      upload_ERR.internal_MSG ||
        "Something went wrong with uploading new ux images"
    );
  }

  SET_status("Updating ux...");

  const { data: updated_UX, error } = await supabase
    .from("my-ux")
    .update({
      title,
      rating: rating?.id,
      paragraphs,
      images: image_FILES?.map((file) => file?.name) || [],
    })
    .eq("id", id)
    .select(`*, rating:ux-ratings(id, text)`);

  if (error) {
    console.error(error);
    return SET_status("Error updating ux");
  }
  SET_status("Updated ✅");

  EDIT_displayedUx(updated_UX?.[0] as any);

  setTimeout(() => {
    SET_status("");
  }, 2000);
}

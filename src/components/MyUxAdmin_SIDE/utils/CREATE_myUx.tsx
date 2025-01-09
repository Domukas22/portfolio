//
//
//

import UPLOAD_myUxImages from "@/features/my-ux/ux-images/upload/UPLOAD_myUxImages/UPLOAD_myUxImages";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import { submittableUx_TYPE } from "@/globals";
import { supabase } from "@/supabase";

interface USE_updateMyUx_PROPS {
  ux: submittableUx_TYPE;
  SET_status: React.Dispatch<React.SetStateAction<string>>;
  INSERT_newUx: (ux: MyUx_TYPE) => void;
}

export default async function CREATE_myUx({
  ux,
  SET_status,
  INSERT_newUx,
}: USE_updateMyUx_PROPS) {
  const { image_FILES, paragraphs, rating, title } = ux;

  SET_status("Creating ux...");

  const { data: new_UX, error: create_ERR } = await supabase
    .from("my-ux")
    .insert([
      {
        title,
        rating: rating?.id,
        paragraphs,
        images: image_FILES?.map((file) => file?.name) || [],
      },
    ])
    .select(`*, rating:ux-ratings(id, text)`)
    .single();

  if (create_ERR) {
    console.error(create_ERR);
    return SET_status("Error creating ux");
  }

  SET_status("Uploading images...");
  const { error: upload_ERR } = await UPLOAD_myUxImages({
    id: (new_UX as any)?.id,
    image_FILES,
  });

  if (upload_ERR) {
    return SET_status(
      upload_ERR.internal_MSG ||
        "Something went wrong with uploading new ux images"
    );
  }

  SET_status("Created ✅");

  INSERT_newUx(new_UX as any);

  setTimeout(() => {
    SET_status("");
  }, 2000);
}

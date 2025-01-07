//
//
//

import MyUxImages_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxImages_INPUTS";
import MyUxParagraph_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxParagraph_INPUTS";
import MyUxRating_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxRating_INPUTS";
import MyUxFromTitle_INPUT from "@/components/MyUxAdmin_SIDE/components/MyUxTitle_INPUT";
import { supabase } from "@/supabase";
import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import { useCallback, useEffect } from "react";

import css from "./MyUxAdmin_SIDE.module.css";
import USE_myUxInputs from "./hooks/USE_myUxInputs";
import USE_myUxImages from "./hooks/USE_myUxImages";
import USE_uxRatings from "@/supabase/my-ux/ratings/USE_uxRatings/USE_uxRatings";
import MyUxBottom_BTNS from "./components/MyUxBottom_BTNS";

export default function MyUxAdmin_SIDE({
  ux,
  UNSELECT_ux = () => {},
}: {
  ux: MyUx_TYPE | undefined;
  UNSELECT_ux: () => void;
}) {
  const {
    title,
    rating,
    paragraphs,
    SET_title,
    SET_rating,
    SET_paragraphs,
    ADD_parag,
    REMOVE_parag,
  } = USE_myUxInputs({ ux });

  const {
    images,
    img_URLs,
    MOVE_image,
    DELETE_images,
    UPLOAD_images,
    PLACE_images,
  } = USE_myUxImages({ ux });

  const {
    ratings,
    IS_loading: ARE_ratingsLoading,
    error: ratings_ERROR,
  } = USE_uxRatings();

  const POPULATE_form = useCallback(() => {
    SET_title(ux?.title || "");
    SET_paragraphs(ux?.paragraphs || []);
    SET_rating(ratings?.find((x) => x.rating === ux?.rating)?.id || "");
    PLACE_images();
  }, [ux, ratings, SET_paragraphs, SET_rating, SET_title, PLACE_images]);

  useEffect(() => {
    POPULATE_form();
  }, [ux, ratings, SET_paragraphs, SET_rating, SET_title, POPULATE_form]);

  const submit = async () => {
    await UPDATE_myUx({ id: ux?.id, title, rating, paragraphs, images });
  };
  return (
    <div className={css.MyUxAdmin_SIDE} data-hide={!ux?.id}>
      <h4 data-title>{ux?.title}</h4>

      <div data-content-wrap>
        <MyUxImages_INPUTS
          {...{
            images,
            img_URLs,
            DELETE_images,
            MOVE_image,
            UPLOAD_images,
          }}
        />
        <MyUxFromTitle_INPUT {...{ title, SET_title }} />
        <MyUxRating_INPUTS
          {...{
            rating,
            SET_rating,
            ratings,
            ARE_ratingsLoading,
            ratings_ERROR,
          }}
        />
        <MyUxParagraph_INPUTS
          {...{ paragraphs, REMOVE_parag, SET_paragraphs, ADD_parag }}
        />
      </div>

      <MyUxBottom_BTNS {...{ submit, UNSELECT_ux, POPULATE_form }} />
      <p data-no-ux-selected>No UX selected</p>
    </div>
  );
}

const deleteFolderFiles = async (id: string) => {
  // List all files in the folder (bucket with item id as the folder)
  const { data: files, error: listError } = await supabase.storage
    .from("my-ux-images")
    .list(id);

  console.log(files);

  if (listError) {
    console.error("Error listing files:", listError.message);
    return;
  }

  // Delete each file in the folder
  for (const file of files) {
    const { error: deleteError } = await supabase.storage
      .from("my-ux-images")
      .remove([`${id}/${file.name}`]);

    if (deleteError) {
      console.error(`Error deleting file ${file.name}:`, deleteError.message);
    } else {
      console.log(`File ${file.name} deleted successfully.`);
    }
  }
};

const uploadImagesToFolder = async (id: string, files: File[]) => {
  const uploadedImageNames: string[] = [];

  // Upload new images to the folder (bucket with item id as folder)
  for (const file of files) {
    const filePath = `${id}/${file.name}`;
    const { error } = await supabase.storage
      .from("my-ux-images")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      continue;
    }

    uploadedImageNames.push(file.name);
  }

  return uploadedImageNames;
};

const UPDATE_myUx = async ({ id, title, rating, paragraphs, images }: any) => {
  try {
    // Step 1: Delete all old files in the folder
    await deleteFolderFiles(id);

    // Step 2: Upload new images to the folder
    const uploadedImageNames = await uploadImagesToFolder(id, images);

    // Step 3: Update the item record with the new images
    const { data, error } = await supabase
      .from("my-ux")
      .update({ title, rating, paragraphs, images: uploadedImageNames })
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
    console.log("Updated successfully", data);
  } catch (error) {
    console.error("Error updating record:", error);
  }
};

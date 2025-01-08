//
//
//

import MyUxImages_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxImages_INPUTS";
import MyUxParagraph_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxParagraph_INPUTS";
import MyUxRating_INPUTS from "@/components/MyUxAdmin_SIDE/components/MyUxRating_INPUTS";
import MyUxFromTitle_INPUT from "@/components/MyUxAdmin_SIDE/components/MyUxTitle_INPUT";
import { supabase } from "@/supabase";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import React, { useCallback, useEffect, useState } from "react";

import css from "./MyUxAdmin_SIDE.module.css";
import USE_myUxInputs from "./hooks/USE_myUxInputs";
import USE_myUxImages from "./hooks/USE_myUxImages";
import USE_uxRatings from "@/features/my-ux/ux-ratings/USE_uxRatings/USE_uxRatings";
import MyUxBottom_BTNS from "./components/MyUxBottom_BTNS";
import Btn from "../Btn/Btn";
import FETCH_myUxImages from "@/features/my-ux/ux-images/fetch/FETCH_myUxImages/FETCH_myUxImages";
import DELETE_myUxImages from "@/features/my-ux/ux-images/delete/DELETE_myUxImages/DELETE_myUxImages";
import UPLOAD_myUxImages from "@/features/my-ux/ux-images/upload/UPLOAD_myUxImages/UPLOAD_myUxImages";

export default function MyUxAdmin_SIDE({
  ux,
  UNSELECT_ux = () => {},
  EDIT_displayedUx = () => {},
}: {
  ux: MyUx_TYPE | undefined;
  UNSELECT_ux: () => void;
  EDIT_displayedUx: (ux: MyUx_TYPE) => void;
}) {
  // const {
  //   images: ux_IMAGES,
  //   error: uxImages_ERROR,
  //   IS_loading: ARE_uxImagesLoading,
  // } = USE_uxImages({ id: ux?.id });
  const [status, SET_status] = useState("");
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
    image_FILES,
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

  const update = () => {
    UPDATE_myUx({
      ux: {
        id: ux?.id,
        image_FILES,
        paragraphs,
        rating,
        title,
      },
      SET_status,
      // EDIT_displayedUx,
      EDIT_displayedUx: (ux: MyUx_TYPE) => {
        const updatedRating = ratings.find((r) => r.id === ux.rating)?.rating; // Adjust if using a different structure
        EDIT_displayedUx({
          ...ux,
          rating: updatedRating, // Keep original if no match found
        });
      },
    });
  };

  const POPULATE_form = useCallback(() => {
    SET_title(ux?.title || "");
    SET_paragraphs(ux?.paragraphs || []);
    SET_rating(ratings?.find((x) => x.rating === ux?.rating)?.id || "");
    PLACE_images();
  }, [ux, ratings, SET_paragraphs, SET_rating, SET_title, PLACE_images]);

  useEffect(() => {
    POPULATE_form();
  }, [ux, ratings, SET_paragraphs, SET_rating, SET_title, POPULATE_form]);

  return (
    <div className={css.MyUxAdmin_SIDE} data-hide={!ux?.id}>
      <h4 data-title>{ux?.title}</h4>
      <Btn text="Update" btnType="btn" onClick={() => update()} />
      <p>{status}</p>

      <div data-content-wrap>
        <MyUxFromTitle_INPUT {...{ title, SET_title }} />
        <MyUxImages_INPUTS
          {...{
            images: image_FILES,
            img_URLs,
            DELETE_images,
            MOVE_image,
            UPLOAD_images,
          }}
        />
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

      <MyUxBottom_BTNS
        {...{ submit: () => update(), UNSELECT_ux, POPULATE_form }}
      />
      <p data-no-ux-selected>No UX selected</p>
    </div>
  );
}

interface USE_updateMyUx_PROPS {
  ux: {
    id: string | undefined;
    title: string | undefined;
    rating: string | undefined;
    paragraphs: string[] | undefined;
    image_FILES: File[] | undefined;
  };
  SET_status: React.Dispatch<React.SetStateAction<string>>;
  EDIT_displayedUx: (ux: MyUx_TYPE) => void;
}

async function UPDATE_myUx({
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
    image_NAMES: images?.map((file) => file?.name) || [],
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
      rating,
      paragraphs,
      images: image_FILES?.map((file) => file?.name) || [],
    })
    .eq("id", id)
    .select();

  if (error) {
    return SET_status("Error updating ux");
  }
  SET_status("Updated ✅");

  EDIT_displayedUx(updated_UX?.[0]);
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// const DELETE_folderImages = async (id: string) => {
//   // List all files in the folder (bucket with item id as the folder)
//   const { data: files, error: listError } = await supabase.storage
//     .from("my-ux-images")
//     .list(id);

//   console.log(files);
//   console.log(typeof files?.[0]);

//   if (listError) {
//     console.error("Error listing files:", listError.message);
//     return;
//   }

//   // Delete each file in the folder
//   for (const file of files) {
//     const { error: deleteError } = await supabase.storage
//       .from("my-ux-images")
//       .remove([`${id}/${file.name}`]);

//     if (deleteError) {
//       console.error(`Error deleting file ${file.name}:`, deleteError.message);
//     } else {
//       console.log(`File ${file.name} deleted successfully.`);
//     }
//   }
// };

// const UPLOAD_folderImages = async (id: string, files: File[]) => {
//   const uploadedImageNames: string[] = [];

//   // Upload new images to the folder (bucket with item id as folder)
//   for (const file of files) {
//     const filePath = `${id}/${file.name}`;
//     const { error } = await supabase.storage
//       .from("my-ux-images")
//       .upload(filePath, file);

//     if (error) {
//       console.error("Error uploading image:", error.message);
//       continue;
//     }

//     uploadedImageNames.push(file.name);
//   }

//   return uploadedImageNames;
// };

// const UPDATE_myUx = async ({
//   id,
//   title,
//   rating,
//   paragraphs,
//   image_FILES,
// }: any) => {
//   try {
//     // Step 1: Delete all old files in the folder
//     await DELETE_folderImages(id);

//     // Step 2: Upload new images to the folder
//     const uploadedImageNames = await UPLOAD_folderImages(id, image_FILES);

//     // Step 3: Update the item record with the new images
//     const { data, error } = await supabase
//       .from("my-ux")
//       .update({ title, rating, paragraphs, images: uploadedImageNames })
//       .eq("id", id);

//     if (error) {
//       throw new Error(error.message);
//     }
//     console.log("Updated successfully", data);
//   } catch (error) {
//     console.error("Error updating record:", error);
//   }
// };

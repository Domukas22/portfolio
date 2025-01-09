//
//
//

import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import MOVE_itemInArray from "@/utils/MOVE_itemInArray";
import { useCallback } from "react";
import FETCH_myUxImages from "../utils/FETCH_myUxImages";

export default function USE_handleUxImages({
  ux,
  SET_imageFiles,
}: {
  ux: MyUx_TYPE | undefined;
  SET_imageFiles: React.Dispatch<React.SetStateAction<File[]>>;
}) {
  const DELETE_images = useCallback(
    (index: number) => {
      SET_imageFiles((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove image at index
      // SET_imgUrls((prevUrls) => prevUrls.filter((_, i) => i !== index)); // Remove corresponding URL
    },
    [SET_imageFiles]
  );

  const MOVE_image = useCallback(
    (index: number, direction: "prev" | "next") => {
      SET_imageFiles((prev) => MOVE_itemInArray(prev, index, direction));
    },
    [SET_imageFiles]
  );

  const UPLOAD_images = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files);
        const validFiles = selectedFiles.filter((file) =>
          /image\/(jpeg|png|gif|webp|heic|heif)/.test(file.type)
        );

        SET_imageFiles((prevImages) => [...prevImages, ...validFiles]);
      }
    },
    [SET_imageFiles]
  );

  const PLACE_images = useCallback(() => {
    if (ux?.images && ux.images.length > 0) {
      FETCH_myUxImages(ux.images, ux.id)
        .then((fetchedImages) => {
          SET_imageFiles(fetchedImages);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
          // Handle error, you could also set a state to show an error message to the user
        });
    } else {
      SET_imageFiles([]);
    }
  }, [ux, SET_imageFiles]);

  return {
    DELETE_images,
    MOVE_image,
    UPLOAD_images,
    PLACE_images,
  };
}

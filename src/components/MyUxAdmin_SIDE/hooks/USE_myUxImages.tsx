//
//
//

import { supabase } from "@/supabase";
import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import { useState, useCallback, useEffect } from "react";

export default function USE_myUxImages({ ux }: { ux: MyUx_TYPE | undefined }) {
  const [images, SET_images] = useState<File[]>([]);
  const [img_URLs, SET_imgUrls] = useState<string[]>([]);

  const UPLOAD_images = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newImageUrls = selectedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      SET_images((prevImages) => [...prevImages, ...selectedFiles]); // Add selected images to state
      SET_imgUrls((prevUrls) => [...prevUrls, ...newImageUrls]); // Add URLs for preview
    }
  };

  const DELETE_images = useCallback(
    (index: number) => {
      SET_images((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove image at index
      SET_imgUrls((prevUrls) => prevUrls.filter((_, i) => i !== index)); // Remove corresponding URL
    },
    [SET_images]
  );

  const MOVE_image = useCallback(
    (index: number, direction: "prev" | "next") => {
      SET_images((prevImages) => {
        const updatedImages = [...prevImages];
        if (direction === "prev" && index > 0) {
          [updatedImages[index - 1], updatedImages[index]] = [
            updatedImages[index],
            updatedImages[index - 1],
          ];
        } else if (direction === "next" && index < updatedImages.length - 1) {
          [updatedImages[index], updatedImages[index + 1]] = [
            updatedImages[index + 1],
            updatedImages[index],
          ];
        }
        return updatedImages; // Correctly return the new array
      });

      SET_imgUrls((prevUrls) => {
        const updatedUrls = [...prevUrls];
        if (direction === "prev" && index > 0) {
          [updatedUrls[index - 1], updatedUrls[index]] = [
            updatedUrls[index],
            updatedUrls[index - 1],
          ];
        } else if (direction === "next" && index < updatedUrls.length - 1) {
          [updatedUrls[index], updatedUrls[index + 1]] = [
            updatedUrls[index + 1],
            updatedUrls[index],
          ];
        }
        return updatedUrls; // Correctly return the new array
      });
    },
    []
  );

  const PLACE_images = useCallback(() => {
    if (ux?.images && ux.images.length > 0) {
      // Initialize an empty array to store the image files
      const fetchImages = async () => {
        const fetchedImages: File[] = [];

        // Iterate over each image URL
        for (const imageName of ux.images) {
          const imageUrl =
            supabase.storage.from("my-ux-images").getPublicUrl(ux?.id).data
              .publicUrl +
            "/" +
            imageName;

          // Fetch image data
          const response = await fetch(imageUrl);
          const blob = await response.blob(); // Convert the response to a Blob (binary data)

          // Convert Blob to File object
          const file = new File([blob], imageName, { type: blob.type });
          fetchedImages.push(file); // Add the file to the array
        }

        // Update the images state with the fetched File objects
        SET_images(fetchedImages);
        SET_imgUrls(fetchedImages?.map((img) => URL.createObjectURL(img)));
      };

      fetchImages();
    } else {
      SET_images([]);
      SET_imgUrls([]);
    }
  }, [ux, SET_images, SET_imgUrls]);

  useEffect(() => {
    SET_imgUrls(images.map((img) => URL.createObjectURL(img)));
  }, [images]);

  useEffect(() => {
    PLACE_images();
  }, [ux, SET_images, SET_imgUrls, PLACE_images]);

  return {
    images,
    img_URLs,
    UPLOAD_images,
    DELETE_images,
    MOVE_image,
    PLACE_images,
  };
}

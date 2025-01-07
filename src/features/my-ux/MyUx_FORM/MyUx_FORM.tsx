//
//
//

import Btn from "@/components/Btn/Btn";
import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";
import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/supabase";
import Radio_INPUTS from "@/components/Radio_INPUTS/Radio_INPUTS";
import { myUx_EMOJIS } from "@/globals";
import { ICON_arrow, ICON_x } from "@/components/Icons/Icons";

export default function MyUx_FORM({ ux }: { ux: MyUx_TYPE | undefined }) {
  const [title, SET_title] = useState(ux?.title || "");
  const [paragraphs, SET_paragraphs] = useState<string[]>(ux?.paragraphs || []);
  // const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Create a ref for each input
  const [images, setImages] = useState<File[]>([]); // State for storing image files
  const [rating, SET_rating] = useState(ux?.rating || "");

  const [img_URLs, SET_imgUrls] = useState<string[]>([]);

  const [possibleRatings, SET_possbileRatings] = useState<any>();
  useEffect(() => {
    (async () => {
      const ratings = await FETCH_uxRatings();
      if (ratings) {
        SET_possbileRatings(ratings);
      }
    })();
  }, []);

  useEffect(() => {
    SET_title(ux?.title || "");
    SET_paragraphs(ux?.paragraphs || []);
    SET_rating(possibleRatings?.find((x) => x.rating === ux?.rating)?.id || "");
  }, [ux, possibleRatings]);

  const REMOVE_parag = useCallback((index: number) => {
    SET_paragraphs((prev) => prev.filter((_, i) => i !== index));
  }, []);
  const ADD_parag = useCallback(() => {
    SET_paragraphs((prev) => [...prev, ""]);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newImageUrls = selectedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...selectedFiles]); // Add selected images to state
      SET_imgUrls((prevUrls) => [...prevUrls, ...newImageUrls]); // Add URLs for preview
    }
  };

  const handleDeleteImage = useCallback((index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove image at index
    SET_imgUrls((prevUrls) => prevUrls.filter((_, i) => i !== index)); // Remove corresponding URL
  }, []);

  useEffect(() => {
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
        setImages(fetchedImages);
        SET_imgUrls(fetchedImages?.map((img) => URL.createObjectURL(img)));
      };

      fetchImages();
    }
  }, [ux]);

  const MOVE_image = (direction: "prev" | "next") => {
    setImages((prevImages) => {
      if (prevImages.length < 2) return prevImages; // No movement needed for less than 2 images

      const updatedImages = [...prevImages];
      const currentIndex = updatedImages.findIndex(
        (_, idx) => idx === updatedImages.length - 1
      ); // Assume the last image is the current one

      if (direction === "prev" && currentIndex === 0) {
        // Do nothing if it's the first image
        return updatedImages;
      } else if (direction === "prev") {
        // Move the image one step up in the list
        const movedImage = updatedImages.splice(currentIndex, 1)[0];
        updatedImages.unshift(movedImage);
      } else if (
        direction === "next" &&
        currentIndex === updatedImages.length - 1
      ) {
        // Do nothing if it's the last image
        return updatedImages;
      } else if (direction === "next") {
        // Move the image one step down in the list
        const movedImage = updatedImages.splice(currentIndex, 1)[0];
        updatedImages.push(movedImage);
      }

      return updatedImages;
    });

    SET_imgUrls((prevUrls) => {
      if (prevUrls.length < 2) return prevUrls;

      const updatedUrls = [...prevUrls];
      const currentIndex = updatedUrls.findIndex(
        (_, idx) => idx === updatedUrls.length - 1
      ); // Assume the last image URL is the current one

      if (direction === "prev" && currentIndex === 0) {
        return updatedUrls;
      } else if (direction === "prev") {
        const movedUrl = updatedUrls.splice(currentIndex, 1)[0];
        updatedUrls.unshift(movedUrl);
      } else if (
        direction === "next" &&
        currentIndex === updatedUrls.length - 1
      ) {
        return updatedUrls;
      } else if (direction === "next") {
        const movedUrl = updatedUrls.splice(currentIndex, 1)[0];
        updatedUrls.push(movedUrl);
      }

      return updatedUrls;
    });
  };

  const submit = async () => {
    await UPDATE_myUx({ id: ux?.id, title, rating, paragraphs, images });
  };

  return (
    <div
      className="flex flex-col flex-1 h-[10px]"
      style={{
        height: "10px",
      }} /* the 10px height fixes height issues*/
    >
      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          overflowY: "auto",
          padding: "2rem",
          msOverflowStyle: "none" /* IE and Edge */,
          scrollbarWidth: "none",
        }}
      >
        <Btn
          btnType="btn"
          text="Fetch images"
          onClick={() => {
            (async () => {
              console.log("Fetching images from folder:", `${ux?.id}`); // Debug log to verify folderPath

              const { data: files, error: listError } = await supabase.storage
                .from("my-ux-images")
                .list(ux?.id);
              // .list("2bcfb2dd-a0bd-4994-bf25-fd22487021be");

              if (listError) {
                console.error("Error fetching images:", listError); // Log the error if there is one
              } else {
                console.log("Fetched files:", files); // Log the files to see if any are returned
              }
            })();
          }}
        />
        <Images
          {...{
            images,
            img_URLs,
            handleDeleteImage,
            MOVE_image,
            handleFileChange,
          }}
        />
        <Title_INPUT {...{ title, SET_title }} />
        <Rating_INPUTS {...{ rating, SET_rating, possibleRatings }} />
        <Paragraph_INPUTS {...{ paragraphs, REMOVE_parag, SET_paragraphs }} />

        <Btn btnType="btn" text="Add parag" onClick={() => ADD_parag()} />
      </div>
      <Btn btnType="btn" text="Submit" onClick={() => submit()} />
    </div>
  );
}

export const FETCH_uxRatings = async () => {
  const { data, error } = await supabase
    .from("ux-ratings")
    .select("*")
    .order("order", { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

function Rating_INPUTS({ possibleRatings, rating, SET_rating }) {
  return (
    <Radio_INPUTS
      label="Rating"
      radios={possibleRatings?.map((x) => ({
        value: x.id,
        displayText: myUx_EMOJIS[x.rating] + " " + x.rating,
      }))}
      value={rating}
      SET_value={SET_rating}
    />
  );
}
function Title_INPUT({ title, SET_title }) {
  return (
    <Text_INPUT
      label="Title"
      name="title"
      type="text"
      isRequired={true}
      onChange={SET_title}
      value={title}
    />
  );
}
function Paragraph_INPUTS({ paragraphs, REMOVE_parag, SET_paragraphs }) {
  return (
    paragraphs.length > 0 &&
    paragraphs.map((p, index) => (
      <div key={index} className="relative">
        <Text_INPUT
          label={`Paragraph ${index + 1}`}
          name={`paragraph-${index}`}
          type="text"
          isRequired={true}
          onChange={(val) => {
            // Update the paragraph at the specific index
            SET_paragraphs((prev) => {
              const updatedParagraphs = [...prev];
              updatedParagraphs[index] = val;
              return updatedParagraphs;
            });
          }}
          value={p}
          // ref={(el) => (inputRefs.current[index] = el)} // Assign the ref for each input
          IS_textArea
        />
        <Btn
          btnType="btn"
          text="Remove"
          onClick={() => REMOVE_parag(index)}
          className="absolute right-0 top-0 p-0"
        />
      </div>
    ))
  );
}
function Images({
  images,
  img_URLs,
  handleDeleteImage,
  MOVE_image,
  handleFileChange,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {images.length > 0 &&
        images.map((image, index) => (
          <div key={index + image.name} className="relative flex">
            {img_URLs[index] && (
              <div style={{ width: "12rem", height: "12rem" }}>
                <Image
                  src={img_URLs[index]} // Check if img_URLs[index] exists
                  alt={`Image ${index}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[1.2rem]"
                  style={{ border: "var(--border-light)" }}
                />
              </div>
            )}
            <div className="flex gap-2">
              <Btn
                btnType="btn"
                left_ICON={<ICON_arrow direction="up" />}
                onClick={() => MOVE_image("prev")}
              />
              <Btn
                btnType="btn"
                left_ICON={<ICON_arrow direction="down" />}
                onClick={() => MOVE_image("next")}
              />
              <Btn
                btnType="btn"
                left_ICON={<ICON_x color="white" />}
                onClick={() => handleDeleteImage(index)}
              />
            </div>
          </div>
        ))}
      <label
        htmlFor="file-upload"
        className="btn"
        style={{ justifyContent: "center" }}
      >
        Upload Images
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default input
      />
    </div>
  );
}
///////////////
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

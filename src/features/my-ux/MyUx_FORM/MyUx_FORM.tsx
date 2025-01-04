//
//
//

import Btn from "@/components/Btn/Btn";
import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";
import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "react-aria-components";
import { Reorder } from "motion/react";
import Image from "next/image";
import { supabase } from "@/supabase";
import Radio_INPUTS from "@/components/Radio_INPUTS/Radio_INPUTS";
import { myUx_EMOJIS } from "@/globals";
import { ICON_x } from "@/components/Icons/Icons";

export default function MyUx_FORM({ ux }: { ux: MyUx_TYPE | undefined }) {
  const [title, SET_title] = useState(ux?.title || "");
  const [paragraphs, SET_paragraphs] = useState<string[]>(ux?.paragraphs || []);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Create a ref for each input
  const [images, setImages] = useState<File[]>([]); // State for storing image files
  const [rating, SET_rating] = useState(ux?.rating || "");

  const [img_URLs, SET_imgUrls] = useState<string[]>([]);

  const [possibleRatings, SET_possbileRatings] = useState();
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

  const [items, setItems] = useState(["1", "2", "3"]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...selectedFiles]); // Add selected images to state
    }
  };

  const handleDeleteImage = useCallback((index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove image at index
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

  const submit = () => {
    const result = { title, rating, paragraphs, images };
    console.log(result);
  };

  return (
    <>
      <Radio_INPUTS
        label="Rating"
        radios={possibleRatings?.map((x) => ({
          value: x.id,
          displayText: myUx_EMOJIS[x.rating] + " " + x.rating,
        }))}
        value={rating}
        SET_value={SET_rating}
      />
      <div>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange} // Handle file input change
        />
      </div>
      <div>
        {images.length > 0 && (
          <Reorder.Group axis="y" values={items} onReorder={setItems}>
            {images.map((image, index) => (
              <Reorder.Item
                key={index} // Use index as the key for simplicity
                value={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  padding: "5px",

                  borderRadius: "4px",
                  position: "relative",
                }}
              >
                <Image
                  src={img_URLs[index]} // Preview the image
                  alt={`Image ${index}`}
                  width={500}
                  height={500}
                  style={{ maxWidth: "100px", marginRight: "10px" }}
                />
                {/* <span>{image.name}</span> */}
                <Btn
                  btnType="btn"
                  left_ICON={<ICON_x color="white" />}
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-0 right-0"
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}
      </div>

      {/* <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((x) => (
          <Reorder.Item
            key={x}
            value={x}
            style={{
              height: "2rem",
              background: "white",
              marginBottom: "10px",
              color: "black",
            }}
          >
            {x}
          </Reorder.Item>
        ))}
      </Reorder.Group> */}
      <Text_INPUT
        label="Title"
        name="title"
        type="text"
        isRequired={true}
        onChange={SET_title}
        value={title}
      />
      {paragraphs.length > 0 &&
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
              ref={(el) => (inputRefs.current[index] = el)} // Assign the ref for each input
              IS_textArea
            />
            <Btn
              btnType="btn"
              text="Remove"
              onClick={() => REMOVE_parag(index)}
              className="absolute right-0 top-0 p-0"
            />
          </div>
        ))}
      <Btn btnType="btn" text="Add parag" onClick={() => ADD_parag()} />
      <Btn btnType="btn" text="Submit" onClick={() => submit()} />
    </>
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

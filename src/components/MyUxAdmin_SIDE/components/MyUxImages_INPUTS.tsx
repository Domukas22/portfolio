//
//
//

import Btn from "@/components/Btn/Btn";
import { ICON_arrow, ICON_x } from "@/components/Icons/Icons";
import Image from "next/image";

export default function MyUxImages_INPUTS({
  images,
  img_URLs,
  DELETE_images,
  MOVE_image,
  UPLOAD_images,
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
                onClick={() => DELETE_images(index)}
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
        onChange={UPLOAD_images}
        style={{ display: "none" }} // Hide the default input
      />
    </div>
  );
}

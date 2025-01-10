//
//
//

import Btn from "@/components/Btn/Btn";
import { ICON_arrow, ICON_x } from "@/components/Icons/Icons";
import Image from "next/image";

export default function MyUxImages_INPUTS({
  image_FILES,
  id,
  DELETE_image,
  MOVE_image,
  UPLOAD_images,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      <p>Images</p>
      {image_FILES.length > 0 &&
        image_FILES.map((image, index) => (
          <div
            key={index + image.name}
            className="relative flex rounded-[1.2rem] overflow-hidden"
          >
            {image_FILES[index] && (
              <div style={{ width: "14rem", height: "14rem" }}>
                <Image
                  src={URL.createObjectURL(image_FILES[index])} // Check if img_URLs[index] exists
                  alt={`Image ${index}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover "
                  style={{ border: "var(--border-light)" }}
                />
              </div>
            )}
            <div className="flex flex-1">
              <Btn
                btnType="btn"
                left_ICON={<ICON_arrow direction="up" size="big" />}
                onClick={() => MOVE_image(index, "prev")}
                className="flex-1 justify-center rounded-none"
              />
              <Btn
                btnType="btn"
                left_ICON={<ICON_arrow direction="down" size="big" />}
                onClick={() => MOVE_image(index, "next")}
                className="flex-1 justify-center rounded-none"
              />
              <Btn
                btnType="btn"
                left_ICON={<ICON_x color="red" size="big" />}
                onClick={() => DELETE_image(index)}
                className="flex-1 justify-center rounded-none"
              />
            </div>
          </div>
        ))}
      <label
        htmlFor={"file-upload" + id}
        className="btn"
        style={{ justifyContent: "center" }}
      >
        Upload Images
      </label>
      <input
        id={"file-upload" + id}
        type="file"
        accept="image/*"
        multiple
        onChange={UPLOAD_images}
        style={{ display: "none" }} // Hide the default input
      />
    </div>
  );
}

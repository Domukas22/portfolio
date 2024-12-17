//
//
//

import Image from "next/image";

import React from "react";

interface CustomImg_TYPE {
  img_PATH: string;
  imgWrap_STYLES?: React.CSSProperties;
  img_STYLES?: React.CSSProperties;
  resolution: { width: number; height: number };
  alt?: string;
}

export default function Custom_IMG({
  img_PATH,
  resolution,
  alt,
  imgWrap_STYLES,
  img_STYLES,
}: CustomImg_TYPE) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "2rem",
        backgroundColor: "white",
        ...imgWrap_STYLES,
      }}
    >
      <Image
        width={resolution?.width || 500}
        height={resolution?.height || 500}
        src={img_PATH}
        alt={alt || ""}
        style={{ margin: "0 auto", ...img_STYLES }}
      />
    </div>
  );
}

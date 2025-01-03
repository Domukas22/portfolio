//
//
//

import Image from "next/image";
import css from "./UnevenRowImageGrid_SECTION.module.css";
import Container from "@/components/Container";

export type UnevenRowImageGridSection_TYPE = {
  title?: string;
  subtitle?: string;
  firstWideImg_PATH?: string;
  leftImages_PATHS: string[];
  rightImages_PATHS: string[];
  mobImg_PATHS?: string[];
};

export function UnevenRowImageGridSection_CONTENT({
  title,
  subtitle,
  leftImages_PATHS,
  rightImages_PATHS,
  firstWideImg_PATH,
  mobImg_PATHS,
}: UnevenRowImageGridSection_TYPE) {
  return (
    <Container
      extraClass={css.unevenRowImageGrid_CONTAINER}
      data-has-mob-images={mobImg_PATHS?.length}
    >
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      {firstWideImg_PATH && (
        <Image
          key={firstWideImg_PATH + "first"}
          width={2000}
          height={700}
          src={firstWideImg_PATH}
          alt=""
          className="w-full rounded-[1.6rem]"
        />
      )}
      <div data-uneven-row-image-grid>
        <div data-img-col data-left>
          {leftImages_PATHS?.map((img_PATH, index) => (
            <Image
              key={img_PATH + index}
              width={500}
              height={400}
              src={img_PATH}
              alt=""
            />
          ))}
        </div>
        <div data-img-col data-right>
          {rightImages_PATHS?.map((img_PATH, index) => (
            <Image
              key={img_PATH + index}
              width={500}
              height={400}
              src={img_PATH}
              alt=""
            />
          ))}
        </div>
        <div data-img-col data-mobile>
          {mobImg_PATHS?.map((img_PATH, index) => (
            <Image
              key={img_PATH + index}
              width={500}
              height={400}
              src={img_PATH}
              alt=""
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

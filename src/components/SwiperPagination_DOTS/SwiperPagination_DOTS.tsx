//
//
//

import css from "./SwiperPagination_DOTS.module.css";

export default function SwiperPagination_DOTS({
  count = 0,
  current = 0,
  complexImages = false,
}: {
  count: number | undefined | null;
  current: number | undefined | null;
  complexImages?: boolean;
}) {
  return (
    <div
      className={css.SwiperPagination_DOTS}
      data-hide={!count || (count && count < 2) || count === undefined}
    >
      {count && count > 0
        ? Array.from({ length: count }, (_, i) => (
            <div
              data-pagination-dot
              data-active={i === current}
              key={i}
              data-complex-images={complexImages}
            />
          ))
        : null}
    </div>
  );
}

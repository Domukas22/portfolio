//
//
//

import Btn from "../Btn/Btn";
import css from "./LogoCorner_BTN.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function LogoCorner_BTN() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Btn
      btnType="btn-square-light"
      className={css.logoBtn}
      onClick={() =>
        pathname === "/"
          ? window.scrollTo({ top: 0, behavior: "smooth" })
          : router.push("/")
      }
    >
      <div data-logo-img className={css.logo_IMG} />
      <span data-logo-text>Domas Sirbike</span>
    </Btn>
  );
}

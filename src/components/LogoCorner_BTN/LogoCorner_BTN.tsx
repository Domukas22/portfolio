//
//
//

import Link from "next/link";
import Btn from "../Btn/Btn";
import css from "./LogoCorner_BTN.module.css";
import { usePathname } from "next/navigation";

export default function LogoCorner_BTN({ flex = false }: { flex?: boolean }) {
  const pathname = usePathname();

  return pathname === "/" ? (
    <Btn
      btnType="btn-square-light"
      className={css.logoBtn}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      extraAttributes={[`data-flex="${flex}"`]}
    >
      <div data-logo-img className={css.logo_IMG} />
      <span data-logo-text>Domas Sirbike</span>
    </Btn>
  ) : (
    <Link
      className={`btn-square-light ${css.logoBtn}`}
      id="logo-btn"
      href="/"
      style={{ flex: flex ? 1 : 0 }}
      data-native-reactions
    >
      <div data-logo-img className={css.logo_IMG} />
      <span data-logo-text>Domas Sirbike</span>
    </Link>
  );
}

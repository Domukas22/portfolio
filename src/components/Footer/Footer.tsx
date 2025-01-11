//
//
//
import Link from "next/link";
import css from "./Footer.module.css";
import NavDomas_IMG from "../NavDomas_IMG/NavDomas_IMG";

export default function Footer() {
  return (
    <footer className={css.footer} style={{ borderTop: "var(--border-light)" }}>
      <div className="container" data-container>
        <NavDomas_IMG
          style={{ width: "8rem", height: "8rem", marginBottom: "2rem" }}
        />
        <div data-grid>
          <div className="flex flex-col gap-[0.8rem] small_deskop:col-span-3 tablet:col-span-1">
            <div className="flex flex-col gap-[1.4rem] ">
              <h3>Domas Sirbike</h3>
            </div>
            <div className="flex flex-col ">
              <p>Website designer</p>
              <p>domassirbike@gmail.com</p>
              <p className="mt-[0.3rem]">0 157 5825 9215</p>
            </div>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <_link path="/" text="Home" />
            <_link path="/contact" text="Contact" />
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <_link path="/projects/localmore" text="Localmore" />
            <_link path="/projects/vocabs" text="Vocabs" />
            <_link path="/projects/swim-active" text="Swim Active" />
            <_link path="/projects/sanfte-metzger" text="Sanfte Metzger" />
            <_link
              path="/projects/domas-swim-school-logo"
              text="Swim School Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function _link({ path, text }: { path: string; text: string }) {
  return (
    <Link href={path} style={{ fontSize: "1.8rem", fontWeight: 600 }}>
      {text}
    </Link>
  );
}

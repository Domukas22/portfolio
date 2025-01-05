//
//
//

"use client";

import Project_LIST from "@/components/Project_LIST/Project_LIST";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import { useState } from "react";
import RegularMobileNav from "@/components/Nav/RegularMobileNav/RegularMobileNav";
import SideNav from "@/components/SideNav/SideNav";
import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import Image from "next/image";

export default function HomePage_CONTENT() {
  const [IS_mobileMenuOpen, SET_mobileMenuOpen] = useState(false);

  return (
    <div data-sidenav-padding>
      <SideNav>
        <Menu_ITEMS SHOW_homeBtn={false} />
      </SideNav>

      <div className="flex-1">
        <RegularMobileNav
          OPEN_mobMenu={() => SET_mobileMenuOpen(!IS_mobileMenuOpen)}
        />

        <section style={{ borderBottom: "var(--border-light)" }}>
          <div className="container flex items-center gap-[4rem]  tablet:flex-col">
            <div className="flex flex-col mr-auto">
              <h1 style={{ fontSize: "4rem" }}>Hi, I&apos;m Domas 👋</h1>
              <p className="size-h3">An aspiring creator</p>
            </div>
            <Image
              width={500}
              height={500}
              src={"/domas.jpg"}
              alt={"Domas Sirbike, Website designer"}
              className="rounded-full h-[24rem] w-[24rem] object-cover ml-auto"
              style={{
                boxShadow: "0px 2px 17px 4px rgba(138, 138, 138, 0.2)",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        </section>

        <Project_LIST />
      </div>

      {/* Mobile menu modal */}
      <Mobile_MODAL
        IS_open={IS_mobileMenuOpen}
        CLOSE_modal={() => SET_mobileMenuOpen(false)}
        animate_LI
        title="Menu"
      >
        <Menu_ITEMS SHOW_homeBtn={false} />
      </Mobile_MODAL>
    </div>
  );
}

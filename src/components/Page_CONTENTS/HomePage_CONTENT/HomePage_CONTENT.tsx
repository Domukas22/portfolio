//
//
//

"use client";

import Project_LIST from "@/components/Project_LIST/Project_LIST";
import Menu from "@/components/Nav/Menu/Menu";
import { useState } from "react";
import Custom_MODAL from "@/components/Modal/Custom_MODAL";
import MobileNav from "@/components/Nav/MobileNav/MobileNav";
import Btn from "@/components/Btn/Btn";
import SideNav from "@/components/SideNav/SideNav";
import LogoCorner_BTN from "@/components/LogoCorner_BTN/LogoCorner_BTN";
import ProjectCorner_BTN from "@/components/ProjectCorner_BTN/ProjectCorner_BTN";
import Link from "next/link";

export default function HomePage_CONTENT() {
  const [IS_mobileMenuOpen, SET_mobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex">
      <SideNav>
        <LogoCorner_BTN />
        <ProjectCorner_BTN
          project={"Proj name Proj name Proj name"}
          tab={"Tab name Tab name Tab name Tab name"}
        />
        <Menu />
      </SideNav>
      <div className="flex-1 relative">
        <MobileNav
          TOGGLE_mobileMenu={() => SET_mobileMenuOpen(!IS_mobileMenuOpen)}
        />

        <Btn text="btn" btnType="btn" />
        <Btn text="btn-square" btnType="btn-square" />
        <Btn text="btn-square-light" btnType="btn-square-light" />
        <Link className={`btn-square`} href="/" data-native-reactions>
          Link btn-square
        </Link>
        <Link className={`btn`} href="/" data-native-reactions>
          Link btn
        </Link>

        <Project_LIST />
      </div>

      <Custom_MODAL
        IS_open={IS_mobileMenuOpen}
        TOGGLE_open={() => SET_mobileMenuOpen(false)}
        withHeader
        title="Menu"
      >
        <ul className="overflow-y-auto pb-[6rem]">
          <Menu />
        </ul>
      </Custom_MODAL>
    </div>
  );
}

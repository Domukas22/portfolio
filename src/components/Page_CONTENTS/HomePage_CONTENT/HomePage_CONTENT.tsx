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

export default function HomePage_CONTENT() {
  const [IS_mobileMenuOpen, SET_mobileMenuOpen] = useState(false);
  const x = () => console.log("x");

  return (
    <div className="w-full flex">
      <SideNav>
        <LogoCorner_BTN />
        <ProjectCorner_BTN
          project={"Proj name Proj name Proj name"}
          tab={"Tab name Tab name Tab name Tab name"}
          // TOGGLE_menu={x}
        />
        <Menu />
      </SideNav>
      <div className="flex-1 relative">
        <MobileNav
          TOGGLE_mobileMenu={() => SET_mobileMenuOpen(!IS_mobileMenuOpen)}
        />
        <Btn text="Btn" onClick={() => console.log("ss")} />
        <Project_LIST />
      </div>

      <Custom_MODAL
        IS_open={IS_mobileMenuOpen}
        TOGGLE_open={() => SET_mobileMenuOpen(false)}
        withHeader
        title="Menu"
      >
        <Menu />
      </Custom_MODAL>
    </div>
  );
}

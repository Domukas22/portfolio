//
//
//

"use client";

import Project_LIST from "@/components/Project_LIST/Project_LIST";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import { useState } from "react";
import RegularMobileNav from "@/components/Nav/RegularMobileNav/RegularMobileNav";
import SideNav from "@/components/SideNav/SideNav";
import LogoCorner_BTN from "@/components/LogoCorner_BTN/LogoCorner_BTN";
import MobileMenu_MODAL from "@/components/MobileMenu_MODAL/MobileMenu_MODAL";

export default function HomePage_CONTENT() {
  const [IS_mobileMenuOpen, SET_mobileMenuOpen] = useState(false);

  return (
    <>
      <SideNav>
        <LogoCorner_BTN />
        <Menu_ITEMS />
      </SideNav>

      <div className="flex-1">
        <RegularMobileNav
          OPEN_mobileMenu={() => SET_mobileMenuOpen(!IS_mobileMenuOpen)}
        />
        <Project_LIST />
      </div>

      <MobileMenu_MODAL
        IS_open={IS_mobileMenuOpen}
        CLOSE_modal={() => SET_mobileMenuOpen(false)}
      />
    </>
  );
}

//
//
//

"use client";

import Project_LIST from "@/components/Project_LIST/Project_LIST";
import SideNav from "@/components/Nav/SideNav/SideNav";
import { useState } from "react";
import Custom_MODAL from "@/components/Modal/Custom_MODAL";
import MobileNav from "@/components/Nav/MobileNav/MobileNav";

export default function HomePage_CONTENT() {
  const [IS_mobileMenuOpen, SET_mobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex">
      <SideNav />
      <div className="flex-1 relative">
        <MobileNav
          TOGGLE_mobileMenu={() => SET_mobileMenuOpen(!IS_mobileMenuOpen)}
        />
        <Project_LIST />
      </div>

      <Custom_MODAL
        IS_open={IS_mobileMenuOpen}
        TOGGLE_open={() => SET_mobileMenuOpen(false)}
        withHeader
        title="Menu"
      >
        <SideNav />
      </Custom_MODAL>
    </div>
  );
}

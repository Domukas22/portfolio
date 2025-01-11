//
//
//

"use client";

import Btn from "@/components/Btn/Btn";
import Footer from "@/components/Footer/Footer";
import { ICON_arrow } from "@/components/Icons/Icons";
import LogoCorner_BTN from "@/components/LogoCorner_BTN/LogoCorner_BTN";
import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import ModalMenu_UNDERLAY from "@/components/ModalMenu_UNDERLAY";
import DesktopMenu_MODAL from "@/components/modals/Menu_MODALS/components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import Nav from "@/components/Nav/Nav/Nav";
import { TinyDeskNav_SEPARATOR } from "@/components/Nav/ProjectDesk_NAV/ProjectDesk_NAV";
import RegularMobileNav from "@/components/Nav/RegularMobileNav/RegularMobileNav";
import SideNav from "@/components/SideNav/SideNav";
import TopNav_ADJUSTMENT from "@/components/TopNav_ADJUSTMENT";

import { useState } from "react";
import { Link } from "react-aria-components";

export default function Contact_PAGE() {
  const [IS_deskMenuOpen, SET_deskMenuOpen] = useState<boolean>(false);
  const [IS_mobileMenuOpen, SET_mobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <SideNav extraElsAboveScrollable={<LogoCorner_BTN />}>
        <Menu_ITEMS />
      </SideNav>
      <Nav data-tiny data-next-to-sidenav data-hide-on-tablet>
        <li data-tiny-desk-nav-li>
          <Link className="btn-tiny-desk-round" href="/">
            Home
          </Link>
        </li>
        <TinyDeskNav_SEPARATOR />
        <li data-tiny-desk-nav-li>
          <Btn btnType="btn-tiny-desk-round" text="Contact" data-last />
        </li>

        {/* Menu btn */}
        <li
          data-tiny-desk-nav-li
          className="fixed top-0 !h-[var(--tiny-nav-height)]"
          style={{
            padding: 0,
            right: IS_deskMenuOpen ? "var(--scrollbar-width)" : "0px",
          }}
        >
          <Btn
            btnType="btn-square-light"
            text="Menu"
            right_ICON={<ICON_arrow direction="right" />}
            data-light-left-border-color="true"
            onClick={() => SET_deskMenuOpen(true)}
          />
        </li>
      </Nav>
      <section className="pl-[var(--side-nav-width)] tablet:pl-0">
        <TopNav_ADJUSTMENT />
        <div className="container" style={{ marginBottom: "10rem" }}>
          <h1
            style={{
              borderBottom: "var(--border-light)",
              paddingBottom: "1.4rem",
              marginBottom: "3rem",
            }}
          >
            Reach out to me
          </h1>
          <div className="flex flex-col mt-[2rem]">
            <p className="text-[2.2rem]">Email</p>
            <h3>domassirbike@gmail.com</h3>
          </div>
          <div className="flex flex-col mt-[2rem]">
            <p className="text-[2.2rem]">Phone</p>
            <h3>0 157 5825 9215</h3>
          </div>
        </div>
        <Footer />
      </section>
      <Mobile_MODAL
        IS_open={IS_mobileMenuOpen}
        CLOSE_modal={() => SET_mobileMenuOpen(false)}
        animate_LI
        title="Menu"
      >
        <Menu_ITEMS SHOW_homeBtn={true} />
      </Mobile_MODAL>
      <DesktopMenu_MODAL
        IS_open={IS_deskMenuOpen}
        TOGGLE_open={() => SET_deskMenuOpen(false)}
        SHOW_homeBtn={true}
      />
      <RegularMobileNav
        OPEN_mobMenu={() => SET_mobileMenuOpen(!IS_mobileMenuOpen)}
      />
      <ModalMenu_UNDERLAY open={IS_deskMenuOpen} />
    </>
  );
}

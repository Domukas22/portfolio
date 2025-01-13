//
//
//

"use client";

import Btn from "@/components/Btn/Btn";
import MyUx_MODAL from "@/features/my-ux/components/MyUx_MODAL/MyUx_MODAL";
import MyUxCard_GRID from "@/features/my-ux/components/MyUxCard_GRID/MyUxCard_GRID";
import USE_Toggle from "@/hooks/USE_toggle";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import USE_myUxs from "@/features/my-ux/ux/fetch/USE_myUxs/USE_myUxs";
import { useState } from "react";
import SideNav from "@/components/SideNav/SideNav";
import LogoCorner_BTN from "@/components/LogoCorner_BTN/LogoCorner_BTN";
import Nav from "@/components/Nav/Nav/Nav";
import Link from "next/link";
import { TinyDeskNav_SEPARATOR } from "@/components/Nav/ProjectDesk_NAV/ProjectDesk_NAV";
import { ICON_arrow, ICON_dropDownArrow } from "@/components/Icons/Icons";

import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import Menu_ITEMS from "@/components/Nav/Menu/Menu_ITEMS";
import DesktopMenu_MODAL from "@/components/modals/Menu_MODALS/components/DesktopMenu_MODAL/DesktopMenu_MODAL";
import ModalMenu_UNDERLAY from "@/components/ModalMenu_UNDERLAY";
import TopNav_ADJUSTMENT from "@/components/TopNav_ADJUSTMENT";
import USE_myUxFilters from "@/features/my-ux/ux-ratings/filters/USE_myUxFilters/USE_myUxFilters";
import MyUxFilter_RADIOS from "@/components/MyUxAdmin_SIDE/components/MyUxFilter_RADIOS";
import SearchBar from "@/components/SearchBar/SearchBar";
import Spinner from "@/components/Spinners";
import MobileMenu_BTN from "@/components/MobileMenu_BTN";
import SCROLL_to from "@/utils/SCROLL_to";
import MobileFilter_MODAL from "@/components/MobileFilter_MODAL/MobileFilter_MODAL";
import ScrollUp_BTN from "@/components/ScrollUp_BTN/ScrollUp_BTN";
import Footer from "@/components/Footer/Footer";
import USE_debounceSearch from "@/hooks/USE_debounceSearch/USE_debounceSearch";

export default function MyUx_PAGE() {
  const {
    state: IS_uxModalOpen,
    toggle: TOGGLE_uxModal,
    set: SET_uxModal,
  } = USE_Toggle();
  const [target_UX, SET_targetUX] = useState<MyUx_TYPE | undefined>();
  const [IS_deskMenuOpen, SET_deskMenuOpen] = useState<boolean>(false);
  const [IS_mobileMenuOpen, SET_mobileMenuOpen] = useState<boolean>(false);
  const [IS_mobilefilterMenuOpen, SET_mobileFilterMenuOpen] = useState(false);

  const [filter, SET_filter] = useState<string>("All");

  const { debouncedSearch, search, SET_search, IS_debouncing } =
    USE_debounceSearch();

  const {
    myUXs,
    error,
    IS_loading,
    unpaginated_COUNT,
    LOAD_more,
    IS_loadingMore,
  } = USE_myUxs({
    search: debouncedSearch,
    rating_ID: filter,
  });
  const { filters, IS_fetchingFilters, fetchFitlers_ERR } = USE_myUxFilters();

  return (
    <>
      <Nav data-tiny data-next-to-sidenav data-hide-on-tablet>
        <li data-tiny-desk-nav-li>
          <Link className="btn-tiny-desk-round" href="/">
            Home
          </Link>
        </li>
        <TinyDeskNav_SEPARATOR />
        <li data-tiny-desk-nav-li>
          <Btn
            btnType="btn-tiny-desk-round"
            text="My user experiences"
            data-last
          />
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
      <Nav data-hide-on-desktop>
        <Btn
          btnType="btn-square-light"
          text="My user experiences"
          className="flex-1"
          text_STYLES={{ fontWeight: 600, textAlign: "left" }}
          onClick={() => SCROLL_to({})}
        />
        {/* <div className="flex-1 flex items-center pl-[1.6rem]">
          <h4>My user experiences</h4>
        </div> */}

        <MobileMenu_BTN OPEN_mobMenu={() => SET_mobileMenuOpen(true)} />
      </Nav>
      <SideNav extraElsAboveScrollable={<LogoCorner_BTN />}>
        <div className="p-[1.6rem]  ">
          <SearchBar
            label="Search experiences"
            onChange={SET_search}
            value={search}
            placeholder="Enter a title..."
          />
        </div>

        <div className="p-[1.6rem]">
          <MyUxFilter_RADIOS
            options={filters}
            current={filters?.find((r) => r.id === filter)}
            select={(id: string) => SET_filter(id)}
            loading={IS_fetchingFilters}
            error={fetchFitlers_ERR}
          />
        </div>
      </SideNav>
      <section className="pl-[var(--side-nav-width)] tablet:pl-0">
        <TopNav_ADJUSTMENT />
        <div className="container">
          <div
            className="mb-[1.4rem] pb-[1rem]"
            style={{ borderBottom: "var(--border-light)" }}
          >
            <h1>My user experiences</h1>
            <p>Explore my various encounters with products and services</p>
          </div>

          <div className="hidden tablet:flex gap-[1rem] mb-[2rem] 400:flex-col">
            <SearchBar
              label="Search experiences"
              onChange={SET_search}
              value={search}
              placeholder="Enter a title..."
              hideLabel
            />
            <Btn
              btnType="btn"
              text={filters?.find((r) => r.id === filter)?.emoji}
              right_ICON={<ICON_dropDownArrow />}
              className="h-[5rem] self-end 400:w-full justify-between"
              onClick={() => SET_mobileFilterMenuOpen(true)}
            />
          </div>

          <h3
            className="flex mb-[1rem]"
            style={{ color: "var(--text-white-light)" }}
          >
            {IS_debouncing ? <Spinner className="mr-[1rem]" /> : null}
            {IS_debouncing
              ? "Searching..."
              : search
              ? `${unpaginated_COUNT} search results for '${search}'`
              : error
              ? "Uh oh..."
              : `Showing ${unpaginated_COUNT} results`}
          </h3>

          <MyUxCard_GRID
            myUXs={myUXs}
            SELECT_ux={(myUX: MyUx_TYPE) => {
              SET_uxModal(true);
              SET_targetUX(myUX);
            }}
            SELECT_mobileUx={() => {}}
            loading={IS_loading || IS_debouncing}
            error={error}
            search={search}
            CLEAR_search={() => SET_search("")}
            FILTER_byAll={() => SET_filter("All")}
            current_ID={filter}
          />

          <Btn
            btnType="btn"
            text={!IS_loadingMore ? "Load more" : ""}
            left_ICON={IS_loadingMore ? <Spinner /> : null}
            onClick={() => LOAD_more()}
            className="w-full justify-center mt-[3rem]"
            text_STYLES={{
              fontSize: "2rem",
            }}
            styles={{
              display: unpaginated_COUNT === myUXs?.length ? "none" : "flex",
            }}
          />
        </div>
        <Footer />
      </section>

      <MyUx_MODAL
        IS_open={IS_uxModalOpen}
        TOGGLE_open={TOGGLE_uxModal}
        MyUX={target_UX}
      />

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

      <MobileFilter_MODAL
        IS_open={IS_mobilefilterMenuOpen}
        CLOSE_modal={() => SET_mobileFilterMenuOpen(false)}
        animate_LI
        title="Filter by rating"
      >
        <div className="p-[1.6rem]">
          <MyUxFilter_RADIOS
            options={filters}
            current={filters?.find((r) => r.id === filter)}
            select={(id: string) => {
              SET_filter(id);
              SET_mobileFilterMenuOpen(false);
            }}
            loading={IS_fetchingFilters}
            error={fetchFitlers_ERR}
            hideLabel
          />
        </div>
      </MobileFilter_MODAL>
      <ScrollUp_BTN />

      <ModalMenu_UNDERLAY open={IS_deskMenuOpen} />
      <ModalMenu_UNDERLAY open={IS_mobilefilterMenuOpen} />
    </>
  );
}

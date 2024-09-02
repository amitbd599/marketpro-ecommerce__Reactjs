import React, { useEffect } from 'react'
import $ from 'jquery';
const HeaderTwo = () => {
    useEffect(() => {
        $('.js-example-basic-single').select2();
        return () => {
            $('.js-example-basic-single').select2('destroy');
        };
    }, []);
    return (
        <>
            {/* ==================== Search Box Start Here ==================== */}
            <form action="#" className="search-box">
                <button
                    type="button"
                    className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
                >
                    <i className="ph ph-x" />
                </button>
                <div className="container">
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control py-16 px-24 text-xl rounded-pill pe-64"
                            placeholder="Search for a product or brand"
                        />
                        <button
                            type="submit"
                            className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                        >
                            <i className="ph ph-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </form>
            {/* ==================== Search Box End Here ==================== */}
            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className="mobile-menu scroll-sm d-lg-none d-block">
                <button type="button" className="close-button">
                    {" "}
                    <i className="ph ph-x" />{" "}
                </button>
                <div className="mobile-menu__inner">
                    <a href="index.html" className="mobile-menu__logo">
                        <img src="assets/images/logo/logo.png" alt="Logo" />
                    </a>
                    <div className="mobile-menu__menu">
                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">
                            <li className="on-hover-item nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">
                                    Home
                                </a>
                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="index.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Home One
                                        </a>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="index-two.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Home Two
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">
                                    Shop
                                </a>
                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="shop.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop
                                        </a>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="product-details.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop Details
                                        </a>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="product-details-two.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop Details Two
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item nav-menu__item has-submenu">
                                <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                    New
                                </span>
                                <a href="javascript:void(0)" className="nav-menu__link">
                                    Pages
                                </a>
                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="cart.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Cart
                                        </a>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="checkout.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Checkout{" "}
                                        </a>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="account.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Account
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">
                                    Blog
                                </a>
                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="blog.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Blog
                                        </a>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <a
                                            href="blog-details.html"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Blog Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <a href="contact.html" className="nav-menu__link">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}
            {/* ======================= Middle Header Two Start ========================= */}
            <header className="header-middle style-two bg-color-neutral">
                <div className="container container-lg">
                    <nav className="header-inner flex-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <a href="index.html" className="link">
                                <img src="assets/images/logo/logo-two.png" alt="Logo" />
                            </a>
                        </div>
                        {/* Logo End  */}
                        {/* form Category Start */}
                        <div className="flex-align gap-16">
                            <div className="select-dropdown-for-home-two d-lg-none d-block">
                                {/* Dropdown Select Start */}
                                <ul className="header-top__right style-two flex-align flex-wrap">
                                    <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                        <a
                                            href="javascript:void(0)"
                                            className="selected-text text-heading text-sm py-8"
                                        >
                                            Eng
                                        </a>
                                        <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag1.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    English
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag2.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Japan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag3.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    French
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag4.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Germany
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag6.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Bangladesh
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag5.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    South Korea
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                        <a
                                            href="javascript:void(0)"
                                            className="selected-text text-heading text-sm py-8"
                                        >
                                            USD
                                        </a>
                                        <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag1.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    USD
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag2.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Yen
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag3.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Franc
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag4.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    EURO
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag6.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    BDT
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag5.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    WON
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* Dropdown Select End */}
                            </div>
                            <form
                                action="#"
                                className="flex-align flex-wrap form-location-wrapper"
                            >
                                <div className="search-category style-two d-flex h-48 search-form d-sm-flex d-none">
                                    <select
                                        className="js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0"
                                        name="state"
                                    >
                                        <option value={1} selected="" disabled="">
                                            All Categories
                                        </option>
                                        <option value={1}>Grocery</option>
                                        <option value={1}>Breakfast &amp; Dairy</option>
                                        <option value={1}>Vegetables</option>
                                        <option value={1}>Milks and Dairies</option>
                                        <option value={1}>Pet Foods &amp; Toy</option>
                                        <option value={1}>Breads &amp; Bakery</option>
                                        <option value={1}>Fresh Seafood</option>
                                        <option value={1}>Fronzen Foods</option>
                                        <option value={1}>Noodles &amp; Rice</option>
                                        <option value={1}>Ice Cream</option>
                                    </select>
                                    <div className="search-form__wrapper position-relative">
                                        <input
                                            type="text"
                                            className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"
                                            placeholder="Search for a product or brand"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                                    >
                                        <i className="ph ph-magnifying-glass" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* form Category start */}
                        {/* Header Middle Right start */}
                        <div className="header-right flex-align d-lg-block d-none">
                            <div className="header-two-activities flex-align flex-wrap gap-32">
                                <button
                                    type="button"
                                    className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>
                                <a
                                    href="account.html"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                        <i className="ph ph-user" />
                                    </span>
                                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                        Profile
                                    </span>
                                </a>
                                <a
                                    href="cart.html"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-heart" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                        Wishlist
                                    </span>
                                </a>
                                <a
                                    href="cart.html"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph-fill ph-shuffle" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                        Compare
                                    </span>
                                </a>
                                <a
                                    href="cart.html"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-shopping-cart-simple" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                        Cart
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* Header Middle Right End  */}
                    </nav>
                </div>
            </header>
            {/* ======================= Middle Header Two End ========================= */}
            {/* ==================== Header Two Start Here ==================== */}
            <header className="header bg-white border-bottom border-gray-100">
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-between gap-8">
                        <div className="flex-align menu-category-wrapper">
                            {/* Category Dropdown Start */}
                            <div className="category-two d-block">
                                <button
                                    type="button"
                                    className="category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white"
                                >
                                    <span className="icon text-2xl d-xs-flex d-none">
                                        <i className="ph ph-dots-nine" />
                                    </span>
                                    <span className="d-sm-flex d-none">All</span> Categories
                                    <span className="arrow-icon text-xl d-flex">
                                        <i className="ph ph-caret-down" />
                                    </span>
                                </button>
                                <div className="responsive-dropdown common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100">
                                    <button
                                        type="button"
                                        className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                                    >
                                        <i className="ph ph-x" />{" "}
                                    </button>
                                    <div className="logo px-16 d-lg-none d-block">
                                        <a href="index.html" className="link">
                                            <img src="assets/images/logo/logo.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <ul className="scroll-sm p-0 py-8 overflow-y-auto">
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Cell Phone</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Cell Phone
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Wear</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Wear
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Computer</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Computer
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Headphone</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Headphone
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Smart Screen</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Smart Screen
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Smart Home</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Smart Home
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Digital Accessories</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Digital Accessories
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span> Value Added Services</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    {" "}
                                                    Value Added Services
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Car Products</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Car Products
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Ecological Products</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Ecological Products
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Flat</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Flat
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Commercial Terminal</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Commercial Terminal
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Headphone</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Headphone
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Smart Screen</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Smart Screen
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Iphone</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vivo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Oppo</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Itel</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Realme</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="category d-none on-hover-item bg-main-600 text-white">
                                <button
                                    type="button"
                                    className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-white"
                                >
                                    <span className="icon text-2xl d-xs-flex d-none">
                                        <i className="ph ph-dots-nine" />
                                    </span>
                                    <span className="d-sm-flex d-none">All</span> Categories
                                    <span className="arrow-icon text-xl d-flex">
                                        <i className="ph ph-caret-down" />
                                    </span>
                                </button>
                                <div className="responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper">
                                    <button
                                        type="button"
                                        className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                                    >
                                        <i className="ph ph-x" />{" "}
                                    </button>
                                    <div className="logo px-16 d-lg-none d-block">
                                        <a href="index.html" className="link">
                                            <img src="assets/images/logo/logo.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-carrot" />
                                                </span>
                                                <span>Vegetables &amp; Fruit</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Vegetables &amp; Fruit
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Potato &amp; Tomato</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Cucumber &amp; Capsicum</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Leafy Vegetables</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Root Vegetables</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Beans &amp; Okra</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Cabbage &amp; Cauliflower</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Gourd &amp; Drumstick</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Specialty</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Beverages</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Beverages
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html">Soda &amp; Cocktail Mix </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Sports &amp; Energy Drinks</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Non Alcoholic Drinks</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Packaged Water </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Spring Water</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Flavoured Water </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Meats &amp; Seafood</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Meats &amp; Seafood
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html"> Fresh Meat </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Frozen Meat</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Marinated Meat</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Fresh &amp; Frozen Meat</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Breakfast &amp; Dairy</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Breakfast &amp; Dairy
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html"> Oats &amp; Porridge</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Kids Cereal</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Muesli</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Flakes</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Granola &amp; Cereal Bars</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Instant Noodles</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Frozen Foods</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Frozen Foods
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html"> Instant Noodles </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Hakka Noodles</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Cup Noodles</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Vermicelli</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Instant Pasta</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Biscuits &amp; Snacks</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Biscuits &amp; Snacks
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html"> Salted Biscuits </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Marie, Health, Digestive</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Cream Biscuits &amp; Wafers </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Glucose &amp; Milk biscuits</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Cookies</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Grocery &amp; Staples</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </a>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Grocery &amp; Staples
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <a href="shop.html"> Lemon, Ginger &amp; Garlic </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Indian &amp; Exotic Herbs</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Orangic Vegetables</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Orangic Fruits </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Orangic Dry Fruits</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Orangic Dals &amp; pulses</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html"> Orangic Millet &amp; Flours</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Category Dropdown End  */}
                            {/* Menu Start  */}
                            <div className="header-menu d-lg-block d-none">
                                {/* Nav Menu Start */}
                                <ul className="nav-menu flex-align ">
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <a href="javascript:void(0)" className="nav-menu__link">
                                            Home
                                        </a>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="index.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Home One
                                                </a>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="index-two.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Home Two
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <a href="javascript:void(0)" className="nav-menu__link">
                                            Shop
                                        </a>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="shop.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    Shop
                                                </a>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="product-details.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Shop Details
                                                </a>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="product-details-two.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Shop Details Two
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                            New
                                        </span>
                                        <a href="javascript:void(0)" className="nav-menu__link">
                                            Pages
                                        </a>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="cart.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    Cart
                                                </a>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="checkout.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    Checkout{" "}
                                                </a>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="account.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    Account
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <a href="javascript:void(0)" className="nav-menu__link">
                                            Blog
                                        </a>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="blog.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <a
                                                    href="blog-details.html"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Blog Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-menu__item">
                                        <a href="contact.html" className="nav-menu__link">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                                {/* Nav Menu End */}
                            </div>
                            {/* Menu End  */}
                        </div>
                        {/* Header Right start */}
                        <div className="header-right flex-align">
                            <div className="select-dropdown-for-home-two d-lg-block d-none">
                                {/* Dropdown Select Start */}
                                <ul className="header-top__right style-two flex-align flex-wrap">
                                    <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                        <a
                                            href="javascript:void(0)"
                                            className="selected-text text-heading text-sm py-8"
                                        >
                                            Eng
                                        </a>
                                        <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag1.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    English
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag2.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Japan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag3.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    French
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag4.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Germany
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag6.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Bangladesh
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag5.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    South Korea
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                        <a
                                            href="javascript:void(0)"
                                            className="selected-text text-heading text-sm py-8"
                                        >
                                            USD
                                        </a>
                                        <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag1.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    USD
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag2.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Yen
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag3.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Franc
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag4.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    EURO
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag6.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    BDT
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag5.png"
                                                        alt=""
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    WON
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* Dropdown Select End */}
                            </div>
                            <div className="me-8 d-lg-none d-block">
                                <div className="header-two-activities flex-align flex-wrap gap-32">
                                    <button
                                        type="button"
                                        className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                                    >
                                        <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                            <i className="ph ph-magnifying-glass" />
                                        </span>
                                    </button>
                                    <a
                                        href="account.html"
                                        className="flex-align flex-column gap-8 item-hover-two"
                                    >
                                        <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                            <i className="ph ph-user" />
                                        </span>
                                        <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                            Profile
                                        </span>
                                    </a>
                                    <a
                                        href="cart.html"
                                        className="flex-align flex-column gap-8 item-hover-two"
                                    >
                                        <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-heart" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                            Wishlist
                                        </span>
                                    </a>
                                    <a
                                        href="cart.html"
                                        className="flex-align flex-column gap-8 item-hover-two"
                                    >
                                        <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph-fill ph-shuffle" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                            Compare
                                        </span>
                                    </a>
                                    <a
                                        href="cart.html"
                                        className="flex-align flex-column gap-8 item-hover-two"
                                    >
                                        <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-shopping-cart-simple" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                            Cart
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
                            >
                                {" "}
                                <i className="ph ph-list" />{" "}
                            </button>
                        </div>
                        {/* Header Right End  */}
                    </nav>
                </div>
            </header>
            {/* ==================== Header End Here ==================== */}
        </>

    )
}

export default HeaderTwo
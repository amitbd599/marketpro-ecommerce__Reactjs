import React, { useEffect } from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';

const HeaderOne = () => {
    useEffect(() => {
        const $selectElement = $('.js-example-basic-single');
        $selectElement.select2();

        return () => {
            if ($selectElement.data('select2')) {
                $selectElement.select2('destroy');
            }
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
                    <Link to="/" className="mobile-menu__logo">
                        <img src="assets/images/logo/logo.png" alt="Logo" />
                    </Link>
                    <div className="mobile-menu__menu">
                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">
                            <li className="on-hover-item nav-menu__item has-submenu">
                                <Link to="#" className="nav-menu__link">
                                    Home
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Home One
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/index-two"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Home Two
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item nav-menu__item has-submenu">
                                <Link to="#" className="nav-menu__link">
                                    Shop
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/shop"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/product-details"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop Details
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/product-details-two"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop Details Two
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item nav-menu__item has-submenu">
                                <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                    New
                                </span>
                                <Link to="#" className="nav-menu__link">
                                    Pages
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/cart"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Cart
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/checkout"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Checkout{" "}
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/account"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Account
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item nav-menu__item has-submenu">
                                <Link to="#" className="nav-menu__link">
                                    Blog
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/blog"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/blog-details"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Blog Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <Link to="/contact" className="nav-menu__link">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}
            {/* ======================= Middle Top Start ========================= */}
            <div className="header-top bg-main-600 flex-between">
                <div className="container container-lg">
                    <div className="flex-between flex-wrap gap-8">
                        <ul className="flex-align flex-wrap d-none d-md-flex">
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Become A Seller
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    About us
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Free Delivery
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Returns Policy
                                </Link>
                            </li>
                        </ul>
                        <ul className="header-top__right flex-align flex-wrap">
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                <Link to="#" className="text-white text-sm py-8">
                                    Help Center
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <span className="text-sm d-flex">
                                                <i className="ph ph-headset" />
                                            </span>
                                            Call Center
                                        </Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <span className="text-sm d-flex">
                                                <i className="ph ph-chat-circle-dots" />
                                            </span>
                                            Live Chat
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                <Link
                                    to="#"
                                    className="selected-text text-white text-sm py-8"
                                >
                                    Eng
                                </Link>
                                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag1.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            English
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag2.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Japan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag3.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            French
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag4.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Germany
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag6.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Bangladesh
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag5.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            South Korea
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                <Link
                                    to="#"
                                    className="selected-text text-white text-sm py-8"
                                >
                                    USD
                                </Link>
                                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag1.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            USD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag2.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Yen
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag3.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Franc
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag4.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            EURO
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag6.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            BDT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <img
                                                src="assets/images/thumbs/flag5.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            WON
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="/account"
                                    className="text-white text-sm py-8 flex-align gap-6"
                                >
                                    <span className="icon text-md d-flex">
                                        {" "}
                                        <i className="ph ph-user-circle" />{" "}
                                    </span>
                                    <span className="hover-text-decoration-underline">
                                        My Account
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ======================= Middle Top End ========================= */}
            {/* ======================= Middle Header Start ========================= */}
            <header className="header-middle bg-color-one border-bottom border-gray-100">
                <div className="container container-lg">
                    <nav className="header-inner flex-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <Link to="/" className="link">
                                <img src="assets/images/logo/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        {/* Logo End  */}
                        {/* form location Start */}
                        <form action="#" className="flex-align flex-wrap form-location-wrapper">
                            <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
                                <select defaultValue={1}
                                    className="js-example-basic-single border border-gray-200 border-end-0"
                                    name="state"
                                >
                                    <option value={1}>
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
                                        className="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44"
                                        placeholder="Search for a product or brand"
                                    />
                                    <button
                                        type="submit"
                                        className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                                    >
                                        <i className="ph ph-magnifying-glass" />
                                    </button>
                                </div>
                            </div>
                            <div className="location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100">
                                <span className="text-gray-900 text-xl d-xs-flex d-none">
                                    <i className="ph ph-map-pin" />
                                </span>
                                <div className="line-height-1">
                                    <span className="text-gray-600 text-xs">Your Location</span>
                                    <div className="line-height-1">
                                        <select defaultValue={1}
                                            className="js-example-basic-single border border-gray-200 border-end-0"
                                            name="state"
                                        >
                                            <option value={1}>Alabama</option>
                                            <option value={1}>Alaska</option>
                                            <option value={1}>Arizona</option>
                                            <option value={1}>Delaware</option>
                                            <option value={1}>Florida</option>
                                            <option value={1}>Georgia</option>
                                            <option value={1}>Hawaii</option>
                                            <option value={1}>Indiana</option>
                                            <option value={1}>Marzland</option>
                                            <option value={1}>Nevada</option>
                                            <option value={1}>New Jersey</option>
                                            <option value={1}>New Mexico</option>
                                            <option value={1}>New York</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* form location start */}
                        {/* Header Middle Right start */}
                        <div className="header-right flex-align d-lg-block d-none">
                            <div className="flex-align flex-wrap gap-12">
                                <button
                                    type="button"
                                    className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                >
                                    <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>
                                <Link to="/cart" className="flex-align gap-4 item-hover">
                                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-heart" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        Wishlist
                                    </span>
                                </Link>
                                <Link to="/cart" className="flex-align gap-4 item-hover">
                                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-shopping-cart-simple" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        Cart
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* Header Middle Right End  */}
                    </nav>
                </div>
            </header>
            {/* ======================= Middle Header End ========================= */}
            {/* ==================== Header Start Here ==================== */}
            <header className="header bg-white border-bottom border-gray-100">
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-between gap-8">
                        <div className="flex-align menu-category-wrapper">
                            {/* Category Dropdown Start */}
                            <div className="category on-hover-item">
                                <button
                                    type="button"
                                    className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading"
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
                                        {" "}
                                        <i className="ph ph-x" />{" "}
                                    </button>
                                    {/* Logo Start */}
                                    <div className="logo px-16 d-lg-none d-block">
                                        <Link to="/" className="link">
                                            <img src="assets/images/logo/logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    {/* Logo End */}
                                    <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                                        <li className="has-submenus-submenu">
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-carrot" />
                                                </span>
                                                <span>Vegetables &amp; Fruit</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Vegetables &amp; Fruit
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <Link to="/shop">Potato &amp; Tomato</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">Cucumber &amp; Capsicum</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">Leafy Vegetables</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">Root Vegetables</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">Beans &amp; Okra</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">Cabbage &amp; Cauliflower</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">Gourd &amp; Drumstick</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">Specialty</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Beverages</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Beverages
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <Link to="/shop">Soda &amp; Cocktail Mix </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Sports &amp; Energy Drinks</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Non Alcoholic Drinks</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Packaged Water </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Spring Water</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Flavoured Water </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Meats &amp; Seafood</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Meats &amp; Seafood
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <Link to="/shop"> Fresh Meat </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Frozen Meat</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Marinated Meat</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Fresh &amp; Frozen Meat</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Breakfast &amp; Dairy</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Breakfast &amp; Dairy
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <Link to="/shop"> Oats &amp; Porridge</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Kids Cereal</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Muesli</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Flakes</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Granola &amp; Cereal Bars</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Instant Noodles</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Frozen Foods</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Frozen Foods
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <Link to="/shop"> Instant Noodles </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Hakka Noodles</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Cup Noodles</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Vermicelli</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Instant Pasta</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Biscuits &amp; Snacks</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Biscuits &amp; Snacks
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <Link to="/shop"> Salted Biscuits </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Marie, Health, Digestive</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Cream Biscuits &amp; Wafers </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Glucose &amp; Milk biscuits</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Cookies</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-submenus-submenu">
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span className="text-xl d-flex">
                                                    <i className="ph ph-brandy" />
                                                </span>
                                                <span>Grocery &amp; Staples</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className="submenus-submenu py-16">
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Grocery &amp; Staples
                                                </h6>
                                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                    <li>
                                                        <Link to="/shop"> Lemon, Ginger &amp; Garlic </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Indian &amp; Exotic Herbs</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Orangic Vegetables</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">Orangic Fruits </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Orangic Dry Fruits</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Orangic Dals &amp; pulses</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop"> Orangic Millet &amp; Flours</Link>
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
                                        <Link to="#" className="nav-menu__link">
                                            Home
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Home One
                                                </Link>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/index-two"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Home Two
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="#" className="nav-menu__link">
                                            Shop
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/shop"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Shop
                                                </Link>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/product-details"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Shop Details
                                                </Link>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/product-details-two"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Shop Details Two
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                            New
                                        </span>
                                        <Link to="#" className="nav-menu__link">
                                            Pages
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/cart"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Cart
                                                </Link>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/checkout"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Checkout{" "}
                                                </Link>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/account"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="#" className="nav-menu__link">
                                            Blog
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/blog"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Blog
                                                </Link>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="/blog-details"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                >
                                                    {" "}
                                                    Blog Details
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-menu__item">
                                        <Link to="/contact" className="nav-menu__link">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                                {/* Nav Menu End */}
                            </div>
                            {/* Menu End  */}
                        </div>
                        {/* Header Right start */}
                        <div className="header-right flex-align">
                            <Link
                                to="/tel:01234567890"
                                className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
                            >
                                <div className="d-flex text-32">
                                    <i className="ph ph-phone-call" />
                                </div>
                                01- 234 567 890
                            </Link>
                            <div className="me-16 d-lg-none d-block">
                                <div className="flex-align flex-wrap gap-12">
                                    <button
                                        type="button"
                                        className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                    >
                                        <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                            <i className="ph ph-magnifying-glass" />
                                        </span>
                                    </button>
                                    <Link to="/cart" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-heart" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                            Wishlist
                                        </span>
                                    </Link>
                                    <Link to="/cart" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-shopping-cart-simple" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                            Cart
                                        </span>
                                    </Link>
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

export default HeaderOne
import React from 'react'

const FooterOne = () => {
    return (
        <footer className="footer py-120">
            <img
                src="assets/images/bg/body-bottom-bg.png"
                alt="BG"
                className="body-bottom-bg"
            />
            <div className="container container-lg">
                <div className="footer-item-wrapper d-flex align-items-start flex-wrap">
                    <div className="footer-item">
                        <div className="footer-item__logo">
                            <a href="index.html">
                                {" "}
                                <img src="assets/images/logo/logo.png" alt="" />
                            </a>
                        </div>
                        <p className="mb-24">
                            We're Grocery Shop, an innovative team of food supliers.
                        </p>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-map-pin" />
                            </span>
                            <span className="text-md text-gray-900 ">
                                789 Inner Lane, Biyes park, California, USA
                            </span>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-phone-call" />
                            </span>
                            <div className="flex-align gap-16 flex-wrap">
                                <a
                                    href="tel:+00123456789"
                                    className="text-md text-gray-900 hover-text-main-600"
                                >
                                    +00 123 456 789
                                </a>
                                <span className="text-md text-main-600 ">or</span>
                                <a
                                    href="tel:+00987654012"
                                    className="text-md text-gray-900 hover-text-main-600"
                                >
                                    +00 987 654 012
                                </a>
                            </div>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-envelope" />
                            </span>
                            <a
                                href="mailto:support24@marketpro.com"
                                className="text-md text-gray-900 hover-text-main-600"
                            >
                                support24@marketpro.com
                            </a>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Information</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Become a Vendor
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Affiliate Program
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Our Suppliers
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Extended Plan
                                </a>
                            </li>
                            <li className="">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Customer Support</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Help Center
                                </a>
                            </li>
                            <li className="mb-16">
                                <a
                                    href="contact.html"
                                    className="text-gray-600 hover-text-main-600"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Report Abuse
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Submit and Dispute
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Policies &amp; Rules
                                </a>
                            </li>
                            <li className="">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Online Shopping
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">My Account</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    My Account
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Order History
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Shoping Cart
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Compare
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Help Ticket
                                </a>
                            </li>
                            <li className="">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Wishlist
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Daily Groceries</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Dairy &amp; Eggs
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Meat &amp; Seafood
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Breakfast Food
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Household Supplies
                                </a>
                            </li>
                            <li className="mb-16">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Bread &amp; Bakery
                                </a>
                            </li>
                            <li className="">
                                <a href="shop.html" className="text-gray-600 hover-text-main-600">
                                    Pantry Staples
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="">Shop on The Go</h6>
                        <p className="mb-16">Marketpro App is available. Get it now</p>
                        <div className="flex-align gap-8 my-32">
                            <a href="https://www.apple.com/store" className="">
                                <img src="assets/images/thumbs/store-img1.png" alt="" />
                            </a>
                            <a href="https://play.google.com/store/apps?hl=en" className="">
                                <img src="assets/images/thumbs/store-img2.png" alt="" />
                            </a>
                        </div>
                        <ul className="flex-align gap-16">
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                >
                                    <i className="ph-fill ph-facebook-logo" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.twitter.com"
                                    className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                >
                                    <i className="ph-fill ph-twitter-logo" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com"
                                    className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                >
                                    <i className="ph-fill ph-instagram-logo" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.pinterest.com"
                                    className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                >
                                    <i className="ph-fill ph-linkedin-logo" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterOne
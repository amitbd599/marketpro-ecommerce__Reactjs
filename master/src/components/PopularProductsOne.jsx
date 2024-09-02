import React from 'react'

const PopularProductsOne = () => {
    return (
        <section className="popular-products pt-80">
            <div className="container container-lg">
                <div className="border border-gray-100 p-24 rounded-16">
                    <div className="section-heading mb-24">
                        <div className="flex-between flex-wrap gap-8">
                            <h5 className="mb-0">Popular Products</h5>
                            <div className="flex-align gap-16">
                                <a
                                    href="shop.html"
                                    className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                                >
                                    View All Products
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="popular-products-box rounded-16 overflow-hidden flex-between position-relative z-1 mb-24">
                        <img
                            src="assets/images/bg/expensive-offer-bg.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-block-start-0 w-100 h-100 z-n1"
                        />
                        <div className="d-lg-block d-none ps-32">
                            <img src="assets/images/thumbs/expensive-offer1.png" alt="" />
                        </div>
                        <div className="popular-products-box__content px-sm-4 d-block w-100 text-center py-20">
                            <div className="flex-align gap-16 justify-content-center">
                                <h6 className="mb-0">Exclusive Offer</h6>
                                <h4 className="mb-0">45% OFF</h4>
                            </div>
                            <div className="countdown mt-4" id="countdown10">
                                <ul className="countdown-list style-four flex-center flex-wrap">
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600 w-56 h-56">
                                        <span className="days" />
                                        Days
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600 w-56 h-56">
                                        <span className="hours" />
                                        Hour
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600 w-56 h-56">
                                        <span className="minutes" />
                                        Min
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600 w-56 h-56">
                                        <span className="seconds" />
                                        Sec
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-lg-block d-none ">
                            <img src="assets/images/thumbs/expensive-offer2.png" alt="" />
                        </div>
                    </div>
                    <div className="row gy-4">
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-xs-6">
                            <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                    tabIndex={0}
                                >
                                    <img
                                        src="assets/images/thumbs/popular-img1.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </a>
                                <div className="product-card__content flex-grow-1">
                                    <h6 className="title text-lg fw-semibold mb-12">
                                        <a
                                            href="product-details.html"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Headphone &amp; Earphone
                                        </a>
                                    </h6>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Wired Headphones
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Over-Ear Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Sports Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-0">
                                        Earbud Headphone
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="text-tertiary-600 flex-align gap-8 mt-24"
                                    >
                                        All Categories
                                        <i className="ph ph-arrow-right d-flex" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-xs-6">
                            <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                    tabIndex={0}
                                >
                                    <img
                                        src="assets/images/thumbs/popular-img2.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </a>
                                <div className="product-card__content flex-grow-1">
                                    <h6 className="title text-lg fw-semibold mb-12">
                                        <a
                                            href="product-details.html"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            TV &amp; Smart Home
                                        </a>
                                    </h6>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Wired Headphones
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Over-Ear Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Sports Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-0">
                                        Earbud Headphone
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="text-tertiary-600 flex-align gap-8 mt-24"
                                    >
                                        All Categories
                                        <i className="ph ph-arrow-right d-flex" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-xs-6">
                            <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                    tabIndex={0}
                                >
                                    <img
                                        src="assets/images/thumbs/popular-img3.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </a>
                                <div className="product-card__content flex-grow-1">
                                    <h6 className="title text-lg fw-semibold mb-12">
                                        <a
                                            href="product-details.html"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Video Games
                                        </a>
                                    </h6>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Wired Headphones
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Over-Ear Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Sports Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-0">
                                        Earbud Headphone
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="text-tertiary-600 flex-align gap-8 mt-24"
                                    >
                                        All Categories
                                        <i className="ph ph-arrow-right d-flex" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-xs-6">
                            <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                    tabIndex={0}
                                >
                                    <img
                                        src="assets/images/thumbs/popular-img4.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </a>
                                <div className="product-card__content flex-grow-1">
                                    <h6 className="title text-lg fw-semibold mb-12">
                                        <a
                                            href="product-details.html"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Computer &amp; Tablets
                                        </a>
                                    </h6>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Wired Headphones
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Over-Ear Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Sports Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-0">
                                        Earbud Headphone
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="text-tertiary-600 flex-align gap-8 mt-24"
                                    >
                                        All Categories
                                        <i className="ph ph-arrow-right d-flex" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-xs-6">
                            <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                    tabIndex={0}
                                >
                                    <img
                                        src="assets/images/thumbs/popular-img5.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </a>
                                <div className="product-card__content flex-grow-1">
                                    <h6 className="title text-lg fw-semibold mb-12">
                                        <a
                                            href="product-details.html"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Car &amp; GPS
                                        </a>
                                    </h6>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Wired Headphones
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Over-Ear Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Sports Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-0">
                                        Earbud Headphone
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="text-tertiary-600 flex-align gap-8 mt-24"
                                    >
                                        All Categories
                                        <i className="ph ph-arrow-right d-flex" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-xs-6">
                            <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                    tabIndex={0}
                                >
                                    <img
                                        src="assets/images/thumbs/popular-img6.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </a>
                                <div className="product-card__content flex-grow-1">
                                    <h6 className="title text-lg fw-semibold mb-12">
                                        <a
                                            href="product-details.html"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Camera &amp; Video
                                        </a>
                                    </h6>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Wired Headphones
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Over-Ear Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Sports Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-0">
                                        Earbud Headphone
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="text-tertiary-600 flex-align gap-8 mt-24"
                                    >
                                        All Categories
                                        <i className="ph ph-arrow-right d-flex" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-xs-6">
                            <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                    tabIndex={0}
                                >
                                    <img
                                        src="assets/images/thumbs/popular-img7.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </a>
                                <div className="product-card__content flex-grow-1">
                                    <h6 className="title text-lg fw-semibold mb-12">
                                        <a
                                            href="product-details.html"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Kitchen Appliance
                                        </a>
                                    </h6>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Wired Headphones
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Over-Ear Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Sports Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-0">
                                        Earbud Headphone
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="text-tertiary-600 flex-align gap-8 mt-24"
                                    >
                                        All Categories
                                        <i className="ph ph-arrow-right d-flex" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-xs-6">
                            <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                    tabIndex={0}
                                >
                                    <img
                                        src="assets/images/thumbs/popular-img8.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </a>
                                <div className="product-card__content flex-grow-1">
                                    <h6 className="title text-lg fw-semibold mb-12">
                                        <a
                                            href="product-details.html"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Phone &amp; Accessories
                                        </a>
                                    </h6>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Wired Headphones
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Over-Ear Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-4">
                                        Sports Headphone
                                    </span>
                                    <span className="text-gray-600 text-sm mb-0">
                                        Earbud Headphone
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="text-tertiary-600 flex-align gap-8 mt-24"
                                    >
                                        All Categories
                                        <i className="ph ph-arrow-right d-flex" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PopularProductsOne
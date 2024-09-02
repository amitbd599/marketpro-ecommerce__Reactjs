import React from 'react'

const BannerOne = () => {
    return (
        <div className="banner">
            <div className="container container-lg">
                <div className="banner-item rounded-24 overflow-hidden position-relative arrow-center">
                    <a
                        href="#featureSection"
                        className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800"
                    >
                        <span className="icon line-height-0">
                            <i className="ph ph-caret-double-down" />
                        </span>
                    </a>
                    <img
                        src="assets/images/bg/banner-bg.png"
                        alt=""
                        className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
                    />
                    <div className="flex-align">
                        <button
                            type="button"
                            id="banner-prev"
                            className="slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                        >
                            <i className="ph ph-caret-left" />
                        </button>
                        <button
                            type="button"
                            id="banner-next"
                            className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                        >
                            <i className="ph ph-caret-right" />
                        </button>
                    </div>
                    <div className="banner-slider">
                        <div className="banner-slider__item">
                            <div className="banner-slider__inner flex-between position-relative">
                                <div className="banner-item__content">
                                    <h1 className="banner-item__title bounce">
                                        Daily Grocery Order and Get Express Delivery
                                    </h1>
                                    <a
                                        href="shop.html"
                                        className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                    >
                                        Explore Shop{" "}
                                        <span className="icon text-xl d-flex">
                                            <i className="ph ph-shopping-cart-simple" />{" "}
                                        </span>
                                    </a>
                                </div>
                                <div className="banner-item__thumb">
                                    <img src="assets/images/thumbs/banner-img1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="banner-slider__item">
                            <div className="banner-slider__inner flex-between position-relative">
                                <div className="banner-item__content">
                                    <h1 className="banner-item__title">
                                        Daily Grocery Order and Get Express Delivery
                                    </h1>
                                    <a
                                        href="shop.html"
                                        className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                    >
                                        Explore Shop{" "}
                                        <span className="icon text-xl d-flex">
                                            <i className="ph ph-shopping-cart-simple" />{" "}
                                        </span>
                                    </a>
                                </div>
                                <div className="banner-item__thumb">
                                    <img src="assets/images/thumbs/banner-img3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BannerOne
import React from 'react'
import Slider from 'react-slick';

const NewArrivalOne = () => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                type="button" onClick={onClick}
                className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-right" />
            </button>
        );
    }
    function SamplePrevArrow(props) {
        const { className, onClick } = props;

        return (

            <button
                type="button"
                onClick={onClick}
                className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-left" />
            </button>
        );
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };
    return (
        <section className="new-arrival pb-80">
            <div className="container container-lg">
                <div className="section-heading">
                    <div className="flex-between flex-wrap gap-8">
                        <h5 className="mb-0">New Arrivals</h5>
                        <div className="flex-align mr-point gap-16">
                            <a
                                href="shop.html"
                                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                            >
                                View All Deals
                            </a>
                        </div>
                    </div>
                </div>
                <div className="new-arrival__slider arrow-style-two">
                    <Slider {...settings}>
                        <div>
                            <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center"
                                >
                                    <img src="assets/images/thumbs/product-img20.png" alt="" />
                                </a>
                                <div className="product-card__content mt-12">
                                    <div className="flex-align gap-6">
                                        <span className="text-xs fw-bold text-gray-500">4.8</span>
                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-bold text-gray-500">(17k)</span>
                                    </div>
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <a href="product-details.html" className="link text-line-2">
                                            C-500 Antioxidant Protect Dietary Supplement
                                        </a>
                                    </h6>
                                    <div className="flex-align gap-4">
                                        <span className="text-main-600 text-md d-flex">
                                            <i className="ph-fill ph-storefront" />
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            By Lucky Supermarket
                                        </span>
                                    </div>
                                    <div className="flex-between gap-8 mt-24 flex-wrap">
                                        <div className="product-card__price">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                                $28.99
                                            </span>
                                            <span className="text-heading text-md fw-semibold ">
                                                $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                            </span>
                                        </div>
                                        <a
                                            href="cart.html"
                                            className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                        >
                                            Add <i className="ph ph-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center"
                                >
                                    <img src="assets/images/thumbs/product-img21.png" alt="" />
                                </a>
                                <div className="product-card__content mt-12">
                                    <div className="flex-align gap-6">
                                        <span className="text-xs fw-bold text-gray-500">4.8</span>
                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-bold text-gray-500">(17k)</span>
                                    </div>
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <a href="product-details.html" className="link text-line-2">
                                            C-500 Antioxidant Protect Dietary Supplement
                                        </a>
                                    </h6>
                                    <div className="flex-align gap-4">
                                        <span className="text-main-600 text-md d-flex">
                                            <i className="ph-fill ph-storefront" />
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            By Lucky Supermarket
                                        </span>
                                    </div>
                                    <div className="flex-between gap-8 mt-24 flex-wrap">
                                        <div className="product-card__price">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                                $28.99
                                            </span>
                                            <span className="text-heading text-md fw-semibold ">
                                                $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                            </span>
                                        </div>
                                        <a
                                            href="cart.html"
                                            className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                        >
                                            Add <i className="ph ph-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center"
                                >
                                    <img src="assets/images/thumbs/product-img22.png" alt="" />
                                </a>
                                <div className="product-card__content mt-12">
                                    <div className="flex-align gap-6">
                                        <span className="text-xs fw-bold text-gray-500">4.8</span>
                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-bold text-gray-500">(17k)</span>
                                    </div>
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <a href="product-details.html" className="link text-line-2">
                                            C-500 Antioxidant Protect Dietary Supplement
                                        </a>
                                    </h6>
                                    <div className="flex-align gap-4">
                                        <span className="text-main-600 text-md d-flex">
                                            <i className="ph-fill ph-storefront" />
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            By Lucky Supermarket
                                        </span>
                                    </div>
                                    <div className="flex-between gap-8 mt-24 flex-wrap">
                                        <div className="product-card__price">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                                $28.99
                                            </span>
                                            <span className="text-heading text-md fw-semibold ">
                                                $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                            </span>
                                        </div>
                                        <a
                                            href="cart.html"
                                            className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                        >
                                            Add <i className="ph ph-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center"
                                >
                                    <img src="assets/images/thumbs/product-img23.png" alt="" />
                                </a>
                                <div className="product-card__content mt-12">
                                    <div className="flex-align gap-6">
                                        <span className="text-xs fw-bold text-gray-500">4.8</span>
                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-bold text-gray-500">(17k)</span>
                                    </div>
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <a href="product-details.html" className="link text-line-2">
                                            C-500 Antioxidant Protect Dietary Supplement
                                        </a>
                                    </h6>
                                    <div className="flex-align gap-4">
                                        <span className="text-main-600 text-md d-flex">
                                            <i className="ph-fill ph-storefront" />
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            By Lucky Supermarket
                                        </span>
                                    </div>
                                    <div className="flex-between gap-8 mt-24 flex-wrap">
                                        <div className="product-card__price">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                                $28.99
                                            </span>
                                            <span className="text-heading text-md fw-semibold ">
                                                $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                            </span>
                                        </div>
                                        <a
                                            href="cart.html"
                                            className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                        >
                                            Add <i className="ph ph-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center"
                                >
                                    <img src="assets/images/thumbs/product-img24.png" alt="" />
                                </a>
                                <div className="product-card__content mt-12">
                                    <div className="flex-align gap-6">
                                        <span className="text-xs fw-bold text-gray-500">4.8</span>
                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-bold text-gray-500">(17k)</span>
                                    </div>
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <a href="product-details.html" className="link text-line-2">
                                            C-500 Antioxidant Protect Dietary Supplement
                                        </a>
                                    </h6>
                                    <div className="flex-align gap-4">
                                        <span className="text-main-600 text-md d-flex">
                                            <i className="ph-fill ph-storefront" />
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            By Lucky Supermarket
                                        </span>
                                    </div>
                                    <div className="flex-between gap-8 mt-24 flex-wrap">
                                        <div className="product-card__price">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                                $28.99
                                            </span>
                                            <span className="text-heading text-md fw-semibold ">
                                                $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                            </span>
                                        </div>
                                        <a
                                            href="cart.html"
                                            className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                        >
                                            Add <i className="ph ph-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center"
                                >
                                    <img src="assets/images/thumbs/product-img25.png" alt="" />
                                </a>
                                <div className="product-card__content mt-12">
                                    <div className="flex-align gap-6">
                                        <span className="text-xs fw-bold text-gray-500">4.8</span>
                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-bold text-gray-500">(17k)</span>
                                    </div>
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <a href="product-details.html" className="link text-line-2">
                                            C-500 Antioxidant Protect Dietary Supplement
                                        </a>
                                    </h6>
                                    <div className="flex-align gap-4">
                                        <span className="text-main-600 text-md d-flex">
                                            <i className="ph-fill ph-storefront" />
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            By Lucky Supermarket
                                        </span>
                                    </div>
                                    <div className="flex-between gap-8 mt-24 flex-wrap">
                                        <div className="product-card__price">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                                $28.99
                                            </span>
                                            <span className="text-heading text-md fw-semibold ">
                                                $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                            </span>
                                        </div>
                                        <a
                                            href="cart.html"
                                            className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                        >
                                            Add <i className="ph ph-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a
                                    href="product-details.html"
                                    className="product-card__thumb flex-center"
                                >
                                    <img src="assets/images/thumbs/product-img21.png" alt="" />
                                </a>
                                <div className="product-card__content mt-12">
                                    <div className="flex-align gap-6">
                                        <span className="text-xs fw-bold text-gray-500">4.8</span>
                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-bold text-gray-500">(17k)</span>
                                    </div>
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <a href="product-details.html" className="link text-line-2">
                                            C-500 Antioxidant Protect Dietary Supplement
                                        </a>
                                    </h6>
                                    <div className="flex-align gap-4">
                                        <span className="text-main-600 text-md d-flex">
                                            <i className="ph-fill ph-storefront" />
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            By Lucky Supermarket
                                        </span>
                                    </div>
                                    <div className="flex-between gap-8 mt-24 flex-wrap">
                                        <div className="product-card__price">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                                $28.99
                                            </span>
                                            <span className="text-heading text-md fw-semibold ">
                                                $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                            </span>
                                        </div>
                                        <a
                                            href="cart.html"
                                            className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                        >
                                            Add <i className="ph ph-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>

    )
}

export default NewArrivalOne
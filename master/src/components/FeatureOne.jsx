import React from 'react'
import Slider from 'react-slick';

const FeatureOne = () => {

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                type="button" onClick={onClick}
                className={` ${className} slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
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
                className={`${className} slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
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
        slidesToShow: 10,
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
        <div className="feature" id="featureSection">
            <div className="container container-lg">
                <div className="position-relative arrow-center">
                    <div className="flex-align">
                        <button
                            type="button"
                            id="feature-item-wrapper-prev"
                            className="slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                        >
                            <i className="ph ph-caret-left" />
                        </button>
                        <button
                            type="button"
                            id="feature-item-wrapper-next"
                            className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                        >
                            <i className="ph ph-caret-right" />
                        </button>
                    </div>
                    <div className="feature-item-wrapper">
                        <Slider {...settings}>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img1.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Vegetables
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img2.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Fish &amp; Meats
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img3.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Desserts
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img4.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Drinks &amp; Juice
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img5.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Animals Food
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img6.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Fresh Fruits
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img7.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Yummy Candy
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img2.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Fish &amp; Meats
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img8.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Dairy &amp; Eggs
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img9.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Snacks
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <a href="shop.html" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img10.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <a href="shop.html" className="text-inherit">
                                            Frozen Foods
                                        </a>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FeatureOne
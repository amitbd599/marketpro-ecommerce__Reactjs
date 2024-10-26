import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import HeaderThree from "../components/HeaderThree";
import BannerThree from "../components/BannerThree";
import PromotionalThree from "../components/PromotionalThree";
import FeatureThree from "../components/FeatureThree";
import TextSlider from "../components/TextSlider";
import TrendingThree from "../components/TrendingThree";

const HomePageThree = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color='#FA6400' />

      {/* Preloader */}
      <Preloader />

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerThree */}
      <BannerThree />

      {/* PromotionalThree */}
      <PromotionalThree />

      {/* FeatureThree */}
      <FeatureThree />

      {/* TextSlider */}
      <TextSlider />

      {/* TrendingThree */}
      <TrendingThree />
    </>
  );
};

export default HomePageThree;

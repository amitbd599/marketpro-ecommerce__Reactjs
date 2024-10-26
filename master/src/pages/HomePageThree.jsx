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
import DiscountThree from "../components/DiscountThree";
import NewArrivalThree from "../components/NewArrivalThree";
import DealsSection from "../components/DealsSection";

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

      {/* DiscountThree */}
      <DiscountThree />

      {/* NewArrivalThree */}
      <NewArrivalThree />

      {/* DealsSection */}
      <DealsSection />
    </>
  );
};

export default HomePageThree;

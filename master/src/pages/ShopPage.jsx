import React from "react";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import ShippingTwo from "../components/ShippingTwo";
import FooterTwo from "../components/FooterTwo";
import ColorInit from "../layout/ColorInit";

const ShopPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* ShopSection */}
      <ShopSection />

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* FooterTwo */}
      <FooterTwo />


    </>
  );
};

export default ShopPage;

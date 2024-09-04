import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../layout/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import CartSection from "../components/CartSection";
import ShippingOne from "../components/ShippingOne";


const CartPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Cart"} />

      {/* CartSection */}
      <CartSection />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default CartPage;

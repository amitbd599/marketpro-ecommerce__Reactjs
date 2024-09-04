import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../layout/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Blog from "../components/Blog";


const BlogPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Blog"} />

      {/* Blog */}
      <Blog />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default BlogPage;

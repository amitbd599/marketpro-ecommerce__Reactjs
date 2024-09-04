import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomePageOne from "./pages/HomePageOne";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import HomePageTwo from "./pages/HomePageTwo";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";



function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <ScrollToTop smooth color="#299E60" />
      <Routes>
        <Route exact path="/" element={<HomePageOne />} />
        <Route exact path="/index-two" element={<HomePageTwo />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/product-details" element={<ProductDetailsPageOne />} />
        <Route exact path="/product-details-two" element={<ProductDetailsPageTwo />} />
        <Route exact path="/cart" element={<CartPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

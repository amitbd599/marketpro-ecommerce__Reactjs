import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomePageOne from "./pages/HomePageOne";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import HomePageTwo from "./pages/HomePageTwo";



function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <ScrollToTop smooth color="#299E60" />
      <Routes>
        <Route exact path="/" element={<HomePageOne />} />
        <Route exact path="/index-two" element={<HomePageTwo />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

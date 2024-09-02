import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomePageOne from "./pages/HomePageOne";
import PhosphorIconInit from "./helper/PhosphorIconInit";



function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <ScrollToTop smooth color="#A847F0" />
      <Routes>
        <Route exact path="/" element={<HomePageOne />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

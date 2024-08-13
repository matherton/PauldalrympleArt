import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeaturedImageGallery from "./components/FeaturedImageGallery";
import MixGallery from "./components/MixGallery";
import MyGallery from "./components/ImageCarousel";
import { MasonryGridGallery } from "./components/MasonaryGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/PauldalrympleArt/" element={<FeaturedImageGallery />} />
        <Route path="/PauldalrympleArt/drawings" element={<MixGallery />} />
        <Route path="/PauldalrympleArt/oils" element={<MyGallery />} />
        <Route
          path="/PauldalrympleArt/about"
          element={<MasonryGridGallery />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

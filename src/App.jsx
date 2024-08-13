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
        <Route path="/PauldalrympleArt/mix" element={<MixGallery />} />
        <Route path="/PauldalrympleArt/gallery" element={<MyGallery />} />
        <Route
          path="/PauldalrympleArt/masonry"
          element={<MasonryGridGallery />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import FeaturedImageGallery from "./components/FeaturedImageGallery";
import MixGallery from "./components/MixGallery";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <FeaturedImageGallery />
      <MixGallery />
      {/* <ImageCarousel />*/}
      <Footer />
    </>
  );
}

export default App;

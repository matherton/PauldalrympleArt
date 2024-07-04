import "./App.css";
import Header from "./components/Header";
import FeaturedImageGallery from "./components/FeaturedImageGallery";
import MixGallery from "./components/MixGallery";
import MyGallery from "./components/ImageCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <FeaturedImageGallery />
      <MixGallery />
      <MyGallery />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://i.imgur.com/AaTG7w6.jpeg",
    thumbnail: "https://i.imgur.com/AaTG7w6.jpeg",
  },
  {
    original: "https://i.imgur.com/1QZgR3O.png",
    thumbnail: "https://i.imgur.com/1QZgR3O.png",
  },
  {
    original: "https://i.imgur.com/ODaHuCg.jpeg",
    thumbnail: "https://i.imgur.com/ODaHuCg.jpeg",
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;

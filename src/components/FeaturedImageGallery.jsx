import React from "react";
export default function FeaturedImageGallery() {
  const images = [
    {
      src: "/PauldalrympleArt/src/assets/artwork/IMG_1.png",
    },
    {
      src: "/PauldalrympleArt/src/assets/artwork/IMG_2.png",
    },
    {
      src: "/PauldalrympleArt/src/assets/artwork/IMG_3.jpg",
    },
    {
      src: "/PauldalrympleArt/src/assets/artwork/IMG_4.jpg",
    },
    {
      src: "/PauldalrympleArt/src/assets/artwork/IMG_5.jpg",
    },
  ];

  const [activeImage, setActiveImage] = React.useState(images[0].src);

  return (
    <div className="grid gap-4 p-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={activeImage}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img
              onClick={() => setActiveImage(image.src)}
              src={image.src}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

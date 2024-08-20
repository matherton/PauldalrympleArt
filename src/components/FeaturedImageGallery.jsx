import React from "react";
export default function FeaturedImageGallery() {
  const images = [
    {
      src: "https://i.imgur.com/1QZgR3O.png",
    },
    {
      /* /PauldalrympleArt/src/assets/compressed/IMG_2.jpg */
      src: "https://i.imgur.com/ODaHuCg.jpeg",
    },
    {
      /* /PauldalrympleArt/src/assets/compressed/IMG_3.jpg */
      src: "https://i.imgur.com/pdqJMbx.jpeg",
    },
    {
      /* /PauldalrympleArt/src/assets/compressed/IMG_4.jpg */
      src: "https://i.imgur.com/DvG4ry3.jpeg",
    },
    {
      /* /PauldalrympleArt/src/assets/compressed/IMG_5.jpg */
      src: "https://i.imgur.com/AaTG7w6.jpeg",
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

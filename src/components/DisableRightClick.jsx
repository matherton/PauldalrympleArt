//Higher Ordrew Component to prevent right click and save images
const withDisableRightClick = (WrappedComponent) => {
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
  const DisableRightClickImage = ({ alt }) => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    return images.map((image, index) => (
      <img
        src={image.src}
        alt={alt}
        onContextMenu={handleContextMenu}
        key={index}
      />
    ));
  };

  const EnhancedComponent = ({ ...props }) => {
    return (
      <WrappedComponent
        {...props}
        DisableRightClickImage={DisableRightClickImage}
      />
    );
  };

  return EnhancedComponent;
};

export default withDisableRightClick;

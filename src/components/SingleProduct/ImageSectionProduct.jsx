import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ImageSectionProduct = ({ images, title }) => {
  const [mainIMG, setMainIMG] = useState(images[0]);
  const changeMainImg = (img) => {
    setMainIMG(img);
  };
  return (
    <div className="image_section">
      <figure className="poster_img">
        <LazyLoadImage effect="blur" height="100%" width="100%" src={mainIMG} alt={title} />
      </figure>
      <div className="gallery_images">
        {images.map((image, index) => (
          <figure
            key={index}
            className={`gallery_single_figure ${
              image === mainIMG ? "active" : ""
            }`}
            onClick={() => changeMainImg(image)}
          >
            <LazyLoadImage effect="blur" height="100%" width="100%" src={image} alt={title} />
          </figure>
        ))}
      </div>
    </div>
  );
};

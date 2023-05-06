import { FC } from "react";
import { galleryImages } from "./constants/galleryImages";
// import "./GalleryHeader.less";

export const GalleryImages: FC = () => {
  return (
    <div className="gallery-images">
      {galleryImages.map((image) => (
        <div key={image.id} className="gallery-image-container">
          <img src={image.src} />
        </div>
      ))}
    </div>
  );
};

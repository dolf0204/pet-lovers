import { FC } from "react";
import "./Gallery.less";
import { GalleryHeader } from "./gallery-header/GalleryHeader";
import { GalleryCarousel } from "./gallery-carousel/GalleryCarousel";

export const Gallery: FC = () => {
  return (
    <div className="gallery">
      <GalleryHeader></GalleryHeader>
      <GalleryCarousel></GalleryCarousel>
    </div>
  );
};

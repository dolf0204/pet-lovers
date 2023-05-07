import { FC } from "react";
import "./Gallery.less";
import { GalleryHeader } from "./gallery-header/GalleryHeader";
import { GalleryCarousel } from "./gallery-carousel/GalleryCarousel";
import { GalleryImages } from "./gallery-images/GalleryImages";

export const Gallery: FC = () => {
  return (
    <div className="gallery">
      <GalleryHeader></GalleryHeader>
      <GalleryCarousel></GalleryCarousel>
      <GalleryImages></GalleryImages>
    </div>
  );
};

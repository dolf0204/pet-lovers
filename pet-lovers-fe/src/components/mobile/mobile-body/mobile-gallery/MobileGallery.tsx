import { FC } from "react";
import "./MobileGallery.less";
import { MobileGalleryHeader } from "./mobile-gallery-header/MobileGalleryHeader";
import { MobileGalleryCarousel } from "./mobile-gallery-carousel/MobileGalleryCarousel";
import { MobileGalleryImages } from "./mobile-gallery-images/MobileGalleryImages";

export const MobileGallery: FC = () => {
  return (
    <div className="mobile-gallery">
      <MobileGalleryHeader></MobileGalleryHeader>
      <MobileGalleryCarousel></MobileGalleryCarousel>
      <MobileGalleryImages></MobileGalleryImages>
    </div>
  );
};

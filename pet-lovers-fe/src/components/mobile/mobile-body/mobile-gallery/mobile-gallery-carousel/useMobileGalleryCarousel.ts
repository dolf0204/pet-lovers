import { useState } from "react";
import { mobileCarouselimages } from "./constants/mobileCarouselImages";

export const useMobileGalleryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % mobileCarouselimages.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + mobileCarouselimages.length) %
        mobileCarouselimages.length
    );
  };

  return {
    currentSlide,
    nextSlide,
    prevSlide,
  };
};

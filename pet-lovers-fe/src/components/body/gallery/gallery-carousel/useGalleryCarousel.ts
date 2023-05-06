import { useState } from "react";
import { images } from "./constants/carouselImages";

export const useGalleryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return {
    currentSlide,
    nextSlide,
    prevSlide,
  };
};

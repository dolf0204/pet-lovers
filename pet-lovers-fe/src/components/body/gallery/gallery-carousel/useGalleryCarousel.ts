import { useRef } from "react";

import Slider from "react-slick";

export const useGalleryCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return {
    sliderRef,
    goToPrevSlide,
    goToNextSlide,
  };
};

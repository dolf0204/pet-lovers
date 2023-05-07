import { FC } from "react";
import "./MobileGalleryCarousel.less";

import { Image } from "antd";
import { useMobileGalleryCarousel } from "./useMobileGalleryCarousel";

import {
  mobileArrowLeft,
  mobileArrowRight,
} from "../../../../../assets/images/mobile";
import { mobileCarouselimages } from "./constants/mobileCarouselImages";

export const MobileGalleryCarousel: FC = () => {
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Image
        width={60}
        height={43}
        src={mobileArrowLeft}
        preview={false}
        onClick={onClick}
        className={"mobile-previous-arrow"}
      />
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Image
        width={60}
        height={43}
        src={mobileArrowRight}
        className={"mobile-next-arrow"}
        preview={false}
        onClick={onClick}
      />
    );
  };

  const { currentSlide, nextSlide, prevSlide } = useMobileGalleryCarousel();

  return (
    <div className="mobile-carousel-container">
      <div
        className="mobile-carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {mobileCarouselimages.map((image) => (
          <div key={image.id} className="mobile-slide">
            <img src={image.src}></img>
          </div>
        ))}
      </div>

      <div className="mobile-arrow-container">
        <CustomPrevArrow onClick={prevSlide}></CustomPrevArrow>
        <CustomNextArrow onClick={nextSlide}></CustomNextArrow>
      </div>
    </div>
  );
};

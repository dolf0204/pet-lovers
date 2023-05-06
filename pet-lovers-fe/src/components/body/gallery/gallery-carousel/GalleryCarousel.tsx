import { FC } from "react";
import "./GalleryCarousel.less";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
import { useGalleryCarousel } from "./useGalleryCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { arrowLeft, arrowRight } from "../../../../assets/images";
import { images } from "./constants/carouselImages";
import { carouselSettings } from "./constants/carouselSettings";

export const GalleryCarousel: FC = () => {
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Image
        width={60}
        height={43}
        src={arrowLeft}
        preview={false}
        onClick={onClick}
        className={"previous-arrow"}
      />
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Image
        width={60}
        height={43}
        src={arrowRight}
        className={"next-arrow"}
        preview={false}
        onClick={onClick}
      />
    );
  };
  const { sliderRef, goToPrevSlide, goToNextSlide } = useGalleryCarousel();

  return (
    <div>
      <Slider {...carouselSettings} ref={sliderRef}>
        {images.map((image) => (
          <div key={image.id} className="carousel-image-container">
            <img src={image.src} />
          </div>
        ))}
      </Slider>
      <div className="arrow-container">
        <CustomPrevArrow onClick={goToPrevSlide} />
        <CustomNextArrow onClick={goToNextSlide} />
      </div>
    </div>
  );
};

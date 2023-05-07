import { FC } from "react";
import "./GalleryCarousel.less";
import { Image } from "antd";
import { useGalleryCarousel } from "./useGalleryCarousel";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { arrowLeft, arrowRight } from "../../../../assets/images";
import { images } from "./constants/carouselImages";

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

  const { currentSlide, nextSlide, prevSlide } = useGalleryCarousel();

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="slide">
            <img src={image.src}></img>
          </div>
        ))}
      </div>

      <div className="arrow-container">
        <CustomPrevArrow onClick={prevSlide}></CustomPrevArrow>
        <CustomNextArrow onClick={nextSlide}></CustomNextArrow>
      </div>
    </div>
  );
};

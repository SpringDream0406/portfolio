import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ imageForderName, imageFiles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <Slider {...settings}>
      {imageFiles.map((image, index) => (
        <div key={index}>
          <img
            src={`${publicUrl}/images/${imageForderName}/${image}`}
            alt={`${image}`}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Picture = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
    };


    const context = require.context('../../public/images/pictures', false, /\.(png|jpe?g|svg)$/);
    const imageFiles = context.keys().map((key) => key.replace('./', ''));

    return (
        <PjExplainField>

            <Slider {...settings}>
                {imageFiles.map((image, index) => (
                    <div key={index}>
                        <img src={`/images/pictures/${image}`} alt={`사진 ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>
        </PjExplainField>

    );
};

export default Picture;


const PjExplainField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 100%;
  padding-top: 85px;
  padding-bottom: 85px;
  margin: auto;
  @media screen and (max-width: 1024px){
    width: 80%;
  }
`
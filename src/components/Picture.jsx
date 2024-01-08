import React from 'react';
import ImageSlider from '../components/ImageSlider';

const Picture = () => {

    const imageForderName = 'pictures';
    const context = require.context(`../../public/images/pictures`, false, /\.(png|jpe?g|svg)$/);
    const imageFiles = context.keys().map((key) => key.replace('./', ''));
  
    return (
        <ImageSlider imageForderName={imageForderName} imageFiles={imageFiles} />
    );
};

export default Picture;


// const PjExplainField = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   padding-top: 20px;
//   padding-bottom: 85px;
//   margin: auto;
//   @media screen and (max-width: 1024px){
//     width: 80%;
//   }
// `
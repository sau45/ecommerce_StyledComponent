import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const StyledImageCarousel = styled.div`
   margin-top:72px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;

  .carousel {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const ImageCarousel = ({data}) => {
  return (
    <StyledImageCarousel>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
      >
        <div className="slide">
          <img src={data[0].image} alt="Image 1" />
        </div>
        <div className="slide">
          <img src={data[1].image} alt="Image 2" />
        </div>
        <div className="slide">
          <img src={data[2].image} alt="Image 3" />
        </div>
       
      </Carousel>
    </StyledImageCarousel>
  );
};

export default ImageCarousel;

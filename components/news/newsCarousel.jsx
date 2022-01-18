import React from 'react'; 
import { Carousel } from 'react-bootstrap';
import image1 from './newsimages/image1.jpg';
import image2 from './newsimages/image2.jpg';
import image3 from './newsimages/image3.jpg';

const NewsCarousel = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default NewsCarousel;
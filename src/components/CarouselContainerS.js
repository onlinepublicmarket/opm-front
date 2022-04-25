import React from 'react';
import { Carousel } from 'react-bootstrap';

//import image1 from './../assets/images/banner1.jpg';
import image2 from './../assets/images/banner-6.png';
import image3 from './../assets/images/banner3.png';

const CarouselContainerS = () => {
  return (
    <Carousel fade={true} pause={false}>
     
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainerS;
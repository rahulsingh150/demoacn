import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Carousel.css';
import One from '../Assests/slider/001.jpg'
import Second from '../Assests/slider/002.jpg'
import Third from '../Assests/slider/003.jpg'
import Four from '../Assests/slider/004.jpg'
import Five from '../Assests/slider/005.jpg'
import Six from '../Assests/slider/006.jpg'

const Carousels = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
    >
      <div>
        <img src={Five} alt="Image 1" />
      </div>
      <div>
        <img src={Second} alt="Image 2" />
      </div>
      <div>
        <img src={Third} alt="Image 3" />
      </div>
      <div>
        <img src={Four} alt="Image 3" />
      </div>
      <div>
        <img src={One} alt="Image 3" />
      </div>
      <div>
        <img src={Six} alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default Carousels;

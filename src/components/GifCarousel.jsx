import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import taskGif1 from '../assets/Task.gif';
import taskGif2 from '../assets/Task2.gif';
import taskGif3 from '../assets/Task3.gif';
import taskGif4 from '../assets/Task4.gif';

const GifCarousel = () => {
  return (
    <Carousel controls={false} indicators={false} interval={4000} fade>
      <Carousel.Item>
        <img src={taskGif1} className="img-fluid home-image mx-auto" alt="Ilustración 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={taskGif2} className="img-fluid home-image mx-auto" alt="Ilustración 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={taskGif3} className="img-fluid home-image mx-auto" alt="Ilustración 3" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={taskGif4} className="img-fluid home-image mx-auto" alt="Ilustración 4" />
      </Carousel.Item>
    </Carousel>
  );
};

export default GifCarousel;


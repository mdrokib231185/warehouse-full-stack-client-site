import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner4.jpg'
import banner3 from '../../images/banner3.jpg'

const Banner = () => {
      return (
        <div className='mt-5 mb-5'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block "
                style={{ height: 600 }}
                src={banner1}
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner2}
                style={{ height: 600 }}
                alt="Second slide"
              />

              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: 600 }}
                src={banner3}
                alt="Third slide"
              />

             
            </Carousel.Item>
          </Carousel>
        </div>
      );
};

export default Banner;
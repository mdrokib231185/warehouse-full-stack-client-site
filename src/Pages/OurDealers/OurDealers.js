import React from 'react';
import './OurDealers.css'
import images from '../../images/download.jfif'

const OurDealers = () => {
      return (
            <div className="container">
                  <h1 className='header-title text-center mt-5'>Our Dealer</h1>
          <div className="ourDealer-container">
            <div>
              <h1 className="title-text">Happy Deals</h1>
              
              <p className="details">
                Helping You to Connect to Right Vehicles
                <span className='dealers'> Dealers </span> ”
              </p>
            </div>
            <div>
              <img className="test-img" src={images} alt="" />
            </div>
          </div>
        </div>
      );
};

export default OurDealers;
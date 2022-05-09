import React from 'react';
import image from '../../images/carton1.png'

const Notfound = () => {
      return (
        <div>
          <div className="mx-auto d-flex justify-content-center">
            <div>
                              <img className="mx-auto" src={image} alt="" />
                              <h1 className='text-danger'>Page Not Found</h1>
            </div>
          </div>
        </div>
      );
};

export default Notfound;
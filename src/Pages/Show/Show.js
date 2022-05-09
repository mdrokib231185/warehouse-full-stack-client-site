import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Show.css'

const Show = ({product}) => {
  const {_id, name, quantity, description, img, seller, price } = product;
   const navigate = useNavigate();
   const navigateToProductDetails = (id) => {
     navigate(`/inventory/${id}`);
   };
      return (
        <div className="inventroy">
          <img style={{ width: 300, height: 300 }} src={img} alt="" />
          <h3>Name: {name}</h3>
          <p>Description: {description.slice(0, 100)}...</p>
          <h4>Price: {price}</h4>
          <h4>Quantity:{quantity}</h4>
          <h5>Seller:{seller}</h5>
          <button className='btn btn-success
          ' onClick={() => navigateToProductDetails(_id)}>Update Now</button>
        </div>
      );
};

export default Show;
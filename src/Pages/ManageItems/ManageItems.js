import React, { useEffect, useState } from "react";

import useProduct from "../Hooks/Hooks";

import "./ManageItems.css";

const ManageItems = ({ product, handelDelete }) => {
  const { name, quantity, description, img, seller, price, _id } = product;
  


  return (
    <div className="inventroy mb-5">
      <img style={{ width: 300, height: 300 }} src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <h4>Price:{price}</h4>
      <h5>Quantity: {quantity}</h5>
      <h5>Seller:{seller}</h5>
      
      <br />

      <button
        className="btn btn-danger mt-3"
        onClick={() => handelDelete(product._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ManageItems;

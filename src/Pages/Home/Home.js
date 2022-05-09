import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import OurDealers from "../OurDealers/OurDealers";
import Seller from "../Seller/Seller";
import Show from "../Show/Show";

import Banner from "./Banner";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://whispering-chamber-57446.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <h1 className="text-center">This is inventory</h1>
        <div id="inventory" className="inventory-container">
          {products.slice(0, 6).map((product) => (
            <Show key={product._id} product={product}></Show>
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
        <Link to="/manageItemss" id="manage-btn">
          Manage Itmes
        </Link>
      </div>
      <OurDealers></OurDealers>
      <Seller></Seller>
    </div>
  );
};

export default Home;

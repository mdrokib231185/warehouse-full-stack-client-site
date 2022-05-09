import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ManageItems from "../ManageItems/ManageItems";

const ManageItemss = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://whispering-chamber-57446.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handelDelete = (id) => {
    const proceed = window.confirm("Are You Sure Want to delete");
    if (proceed) {
      const url = `https://whispering-chamber-57446.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="container">
      <h1>all items: {products.length}</h1>
      <h1 className="text-center">This is Inventory</h1>
      <div className="mb-5">
        <Link className="" to="/addItems" id="manage-btn">
          Add New Items
        </Link>
      </div>

      <div className="inventory-container">
        {products.map((product) => (
          <ManageItems
            key={product._id}
            product={product}
            handelDelete={handelDelete}
          ></ManageItems>
        ))}
      </div>
    </div>
  );
};

export default ManageItemss;

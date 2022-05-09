import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { register } = useForm();
  const navigate = useNavigate;
  //   const { register, handleSubmit } = useForm();
  const { inventoryId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://whispering-chamber-57446.herokuapp.com/products/${inventoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  });

  const number = parseInt(item.quantity);
  const { quantity, ...rest } = item;
  const deliveredHandle = (event) => {
    event.preventDefault();
    const newNumber = number - 1;
    const item = {
      quantity: newNumber,
    };
    if (quantity < 1) {
      return item;
    }
    const url = `https://whispering-chamber-57446.herokuapp.com/products/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        //      console.log("success", data);
        setItem({ quantity: newNumber, ...rest });
      });
  };
  // restock add item
  const handleSubmit = (event) => {
    event.preventDefault();

    let currentQuantity = event.target.quantity.value;
    let currentValue = parseInt(currentQuantity);
    let quantityParse = parseInt(item.quantity);
    let quantity = quantityParse + currentValue;

    event.target.quantity.value = "";

    if (quantity > 0) {
      const productInfo = {
        name: item.name,
        description: item.description,
        price: item.price,
        img: item.img,
        supplier: item.supplier,
        quantity: quantity,
      };
      const url = `https://whispering-chamber-57446.herokuapp.com/products/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setItem(productInfo);
        });
    }
  };

  return (
    <div className=" container m-5">
      <Card className="card-detail">
        <Card.Img
          className="product-img"
          style={{ width: 300, height: 300 }}
          variant="top"
          src={item.img}
        />
        <Card.Body>
          <Card.Title>
            <h2>Product Name: {item.name}</h2>{" "}
          </Card.Title>
          <h4>Price: {item.price}</h4>
          <Card.Text>Description: {item.description}</Card.Text>
          <h5>
            Available : {item.quantity} <br />
            Supplier: {item.seller}
          </h5>
          <button onClick={deliveredHandle} className="btn btn-success">
            Delivered
          </button>
        </Card.Body>
        <div>
          <form onSubmit={handleSubmit} className="d-flex flex-column mt-3 ">
            <input
              className="mb-3"
              placeholder="Quantity"
              type="number"
              {...register("quantity")}
            />
            <input
              className="btn btn-success"
              type="submit"
              value="Restock the item"
            />
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;

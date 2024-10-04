import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/store";

function FoodItem({ id, foodName, price, foodImg, description }) {
  const { cartItem, addCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-img-container">
        <img className="food-item-img" src={foodImg} alt="" />
        {!cartItem[id] ? (
          <img
            className="addIcon"
            onClick={() => addCart(id)}
            src="/src/assets/add.png"
            alt=""
          />
        ) : (
          <div className="food-item-count">
            <img
              className="remove"
              onClick={() => removeFromCart(id)}
              src="/src/assets/remove.png"
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              className="add"
              onClick={() => addCart(id)}
              src="/src/assets/add.png"
              alt=""
            />
          </div>
        )}
      </div>
      <div className="foodItem-info">
        <div className="food-item-name">
          <p>{foodName}</p>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;

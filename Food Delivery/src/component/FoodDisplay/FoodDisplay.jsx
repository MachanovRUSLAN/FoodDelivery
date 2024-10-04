import React, { useContext } from "react";
import "./FoodDisplaay.css";
import { StoreContext } from "../../context/store";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ category }) {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near to you</h2>
      <div className="food-display-list">
        {foodList.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item.id}
                foodName={item.foodName}
                foodImg={item.foodImg}
                description={item.description}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/store";
import { useNavigate } from "react-router";

function Cart() {
  const { foodList, cartItem, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item, index) => {
          if (cartItem[item.id]) {
            return (
              <div className="div" key={index}>
                <div className="cart-item-title cart-items-item">
                  <img src={item.foodImg} alt="" />
                  <p>{item.foodName}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item.id]}</p>
                  <p>${item.price * cartItem[item.id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item.id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <hr />
          <div className="div">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
            <hr />
          </div>
          <button onClick={() => navigate("/order")}>
            PROSESSED TO CHECHOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You Have Promocode,Enter It Here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import { createContext, useState } from "react";
import { foodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev,[itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]:prev[itemId] + 1 }));
    }
  }

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

 const getTotalCartAmount=()=> {
  let totalAmount = 0;
  for(const item in cartItem) 
    {  if(cartItem[item]>0){
            let itemInfo = foodList.find((product)=>product.id === item);
       totalAmount += itemInfo.price * cartItem[item];
    }
 
  }
  return totalAmount;
 }

  const contextValue = {
    foodList,
    cartItem,
    setCartItem,
    addCart,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

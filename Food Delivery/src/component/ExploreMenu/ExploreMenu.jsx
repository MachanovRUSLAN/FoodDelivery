import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

function ExploreMenu({category,setCategory}) {
  return (
    <div className="ExploreMenu" id="exploreMenu">
    <h1>Explore our menu</h1>
    <p className="explore-menu-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sit
      ipsum corporis asperiores inventore, animi deleniti sapiente. Minus vero
    </p>
    <div className="exploreMenu-list">
      {menu_list.map((item, index) => {
        return (
        <div className="explore-Menu-list-Item" onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)} key={index}>
          <img className={category === item.name?"active":""} src={item.image}  alt="" />
          <p>{item.name}</p>
        </div>
        )
      })}
    </div>
    <hr />
  </div>
  )
}

export default ExploreMenu;

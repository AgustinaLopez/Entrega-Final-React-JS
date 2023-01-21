import React from "react";
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({productos}) => {
  return (
    <div className="product-list-container">
      {productos.map((producto) => {
        return (
          <div className="card-container1" key={producto.id}>
            <Item producto={producto}  />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
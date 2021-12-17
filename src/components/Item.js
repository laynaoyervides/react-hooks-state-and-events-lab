import React, {useState } from "react";

function Item({ name, category }) {
  const [cartItem, addItem] = useState(false);
  const liClass = cartItem ? "in-cart" : "add" ;
  function handleButton(){
    addItem(!cartItem);
  }
  return (
    
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleButton} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;

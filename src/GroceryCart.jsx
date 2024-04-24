import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./StoreItems";

export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([item, ...cart]);
  };

  const removeItem = (targetIndex) => {
    setCart(cart.filter((item, index) => index !== targetIndex))
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <h2>In Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Available Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Available Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./StoreItems";

export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const existingItem = cart.includes(item);
    // console.log(existingItem) ==> true
    if (existingItem) {
      console.log("already on the list!");
      // console.log(cart) => array (6) ['Lemons', 'Avocados', 'Avocados', 'Avocados', 'Avocados', 'Avocados']
      // setCart([item, ...cart]);
      // add count to item in cart array?
    } else {
      setCart([item, ...cart]);
    }
  };

  const removeItem = (targetIndex) => {
    setCart(cart.filter((item, index) => index !== targetIndex));
  };

  return (
    <div id="main">
      <h1>Grocery Cart</h1>
      <h2>In Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty - let's buy some stuff! 🎉</p>
      ) : null}
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="shopList">
        <div>
          <h2>Available Fresh Produce</h2>
          <ItemList items={produce} onItemClick={addItem} />
        </div>
        <div>
          <h2>Available Pantry Items</h2>
          <ItemList items={pantryItems} onItemClick={addItem} />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { produce, pantryItems } from './StoreItems';
import ItemList from './ItemList';

export default function GroceryCart() {
  const [ cart, setCart ] = useState([]);

  const addItem = (item) => {
    setCart([item, ...prev]);
  };

  const removeItem = (targetIndex) => {
    setCart(cart.filter((item, index) => index !== targetIndex));
  };

  return (
    <div>
      <h1>Grocery cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Available produce</h2>
      <ItemList items={produce} onItemClick={addItem}/>
      <h2>Available pantry items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

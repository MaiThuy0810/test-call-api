import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ItemProduct from "../../Component/ItemProduct/ItemPro";

function ListCart({ cart, setCart }) {
  const [count, setCount] = useState([""]);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    console.log(arr);
  };

  const handelDe = (card_id) => {
    setCart((cart) =>
      cart.map((item) =>
        card_id === item.id ? { ...item, amount: card_id.amount - 1 } : item
      )
    );
  };
  const handelIn = (item) => {
    // const index = cart.findIndex((p) => p.id === item.id);
    // if (index > 0) {
    //   cart.forEach((element) => {
    //     if (element.id === item.id) {
    //       if (element.quantity === 1) {
    //         //if quantity is 1 then remove product from cart
    //         cart.splice(index, 1);
    //       } else {
    //         //else decrement the quantity by 1
    //         element.quantity -= item.quantity;
    //       }
    //     }
    //   });
    // }
    // setCart((cart) =>
    //   cart.map((item) =>
    //     card_id === item.id ? { ...item, amount: item.amount - 1 } : item
    //   )
    // );
  };
  return (
    <div>
      this is list cart
      {cart.map((item) => (
        <div className="" key={item.id}>
          <h2>{item.username}</h2>
          <p>{item.email}</p>
          <div className="" style={{ display: "flex" }}>
            <button onClick={() => handelDe(item.id)}>-</button>
            <p>Quantity 1({item.quantity})</p>
            <button onClick={() => handelIn(item.id)}>+</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListCart;

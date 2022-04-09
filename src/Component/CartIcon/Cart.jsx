import React from "react";
import { useEffect, useState } from "react";

function Cart({ cart, setCart, handleClick }) {
  return (
    <div style={{ cursor: "pointer" }}>
      Your card{" "}
      <span
        style={{
          background: "red",
          color: "white",
          padding: "10px",
          fontSize: "20px",
        }}
      >
        {/* {cart.length} */}
      </span>
    </div>
  );
}

export default Cart;

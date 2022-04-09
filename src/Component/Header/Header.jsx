import React from "react";
import Cart from "../CartIcon/Cart";

function Header() {
  return (
    <div
      style={{
        background: "violet",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between  ",
      }}
    >
      <h1>your shopping</h1>
      <Cart />
    </div>
  );
}

export default Header;

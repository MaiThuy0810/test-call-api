import React from "react";

function ItemPro({ item, handleClick, onAdd }) {
  //   const handleSubmit = () => {
  //     console.log("balbdsbj");
  //   };
  const { username, email } = item;
  return (
    <div>
      {" "}
      <h2>{username}</h2>
      <p>{email}</p>
      <button onClick={() => handleClick(item)}>Add to cart</button>
    </div>
  );
}

export default ItemPro;

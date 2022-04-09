import React from "react";
import { useEffect, useState } from "react";
import Cart from "../../Component/CartIcon/Cart";
import ItemProduct from "../../Component/ItemProduct/ItemPro";
import ListCart from "../ListCart/ListCart";

function HomePage({ username, email }) {
  const [cart, setCart] = useState([]);
  const [posts, setPost] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((posts) => {
        setPost(posts);
      });
  }, []);
  // console.log(posts);
  const handleClick = (item) => {
    // setCart([...cart, item]);
    // cart.push(item);
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  };

  let listUser = posts.map((item, index) => {
    return <ItemProduct key={item.id} item={item} handleClick={handleClick} />;
  });

  //   const onAdd = (product) => {
  //     const exist = cart.find((x) => x.id === product.id);
  //     if (exist) {
  //       setCart.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       );
  //     } else {
  //       setCart([...cart, { ...product, qty: 1 }]);
  //     }
  //   };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {" "}
        <h1 style={{ color: "red" }}>this is homepage</h1>
        <p style={{ background: "gray", color: "white" }}>
          YOUR CARR{" "}
          <span style={{ color: "white", background: "red", padding: "10px" }}>
            {cart.length}
          </span>
        </p>
      </div>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {" "}
        <div className="">{listUser}</div>
        <div className="">
          <ListCart cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

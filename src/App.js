import { useState } from "react";
import Header from "./Component/Header/Header";
import HomePage from "./Page/HomePage/HomePage";
import Cart from "./Page/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />

      {/* <HomePage /> */}
    </div>
  );
}

export default App;

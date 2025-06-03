import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductImg from "./components/ProductImg";
import ProductDes from "./components/ProductDes";

function App() {
  
  return (
    <>
      <div className="w-full overflow-x-hidden ">
        <div className="md:max-w-screen-xl md:mx-auto md:px-4">
          <Header></Header>
          <div className="md:flex ">
            <ProductImg></ProductImg>
            <ProductDes></ProductDes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

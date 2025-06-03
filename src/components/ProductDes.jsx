import React from "react";
import iconCart from "../assets/images/icon-cart.svg";

const ProductDes = () => {
  return (
    <div className="p-5 flex flex-col gap-4 md:w-1/2">
      <p className="text-sm text-gray-600 md:text-lg">Tommy</p>
      <h3 className="font-bold text-2xl">Fall Limited Edition Sneakers</h3>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
        quibusdam? Omnis atque dicta maiores, neque minima odit iusto dolorum
        odio, nulla animi dolorem fuga eligendi culpa deleniti non reiciendis
        similique!
      </p>

      <div className="flex  gap-2 items-center">
        <h3 className="font-bold text-2xl">$125.00</h3>
        <p className="text-sm text-white bg-black w-10 p-1 rounded-lg px-2 ">
          50%
        </p>
        <p className="text-sm text-gray-600 ml-auto line-through">$250.00</p>
      </div>
      <div className="flex flex-col gap-4 md:flex md:w-full md:flex-row md:justify-around">
      <div className="flex justify-around bg-gray-200 items-center p-1 rounded-xl md:w-1/3 ">
        <button className="text-4xl text-orange-600">-</button>
        <p className="font-bold text-xl">0</p>
        <button className="text-3xl text-orange-600">+</button>
      </div>
      <button className="flex items-center justify-center gap-4 text-lg font-bold p-2 bg-amber-500 rounded-lg md:w-2/3">
        {" "}
        <span>
          <img src={iconCart} alt="" />
        </span>{" "}
        Add to cart
      </button>
    </div></div>
  );
};

export default ProductDes;

import React from "react";
import productImg from "../assets/images/image-product-1.jpg";
import prev from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const ProductImg = () => {
  return (
    <div className="w-screen h-auto relative overflow-hidden md:w-1/2 flex flex-col items-center justify-center ">
      <img src={productImg} alt="" className="w-screen md:rounded-xl md:w-2/3" />
      <button className="absolute top-1/2 left-3 w-6 h-6 bg-white text-white rounded-4xl flex justify-center items-center md:hidden">
        <img src={prev} className=" text-black w-2 h-2 text-bold"></img>
      </button>
      <button className="absolute top-1/2 right-3 w-6 h-6 bg-white text-white rounded-4xl flex justify-center items-center md:hidden">
        <img src={next} alt="" className=" text-black w-2 h-2 text-bold" />
      </button>
      <div className="hidden md:grid md:grid-cols-4 md:w-2/3 md:gap-1 md:mt-5 justify-between">
        <img
          src={thumbnail1}
          className="hidden md:block   md:rounded-xl hover:opacity-50 hover:border-3 hover:border-orange-600"
          alt=""
        />
        <img
          src={thumbnail2}
          className="hidden md:block   md:rounded-xl"
          alt=""
        />
        <img
          src={thumbnail3}
          className="hidden md:block   md:rounded-xl"
          alt=""
        />
        <img
          src={thumbnail4}
          className="hidden md:block  md:rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductImg;

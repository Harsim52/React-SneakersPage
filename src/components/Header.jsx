import iconCart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import close from "../assets/images/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full flex md:mb-14 md:border-b-1 md:border-b-gray-300 overflow-x-hidden ">
      <div className="flex flex-1 justify-between items-center my-3">
        <div className="flex items-center">
          <button className="mx-2 text-xl md:hidden" onClick={()=> setMenuOpen(!menuOpen)}>☰</button>

          <h2 className="mx-1 font-bold  text-2xl lg:text-4xl  ">sneakers</h2>
        </div>
        
        <div className={`flex ${ menuOpen? "flex-col h-screen w-2/3 bg-white absolute top-0 left-0 z-50": "hidden md:flex"} md:static md:h-auto  `}>
          <img src={close} alt="" className="w-3 h-3 m-5 md:hidden" onClick={()=>setMenuOpen(!menuOpen)} />
          <ul className="font-bold p-3 flex flex-col  bg-white  text-black md:flex gap-5 md:p-0 md:flex-row md:text-sm ml-0 md:font-light md:text-gray-500 lg:text-lg">
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center mx-1 ">
          <img src={iconCart} alt="" className="w-3 h-3 md:mr-7 lg:w-5 lg:h-5" />
          <img src={avatar} className="w-7 h-7 p-1 ml-2 md:w-9 md:h-9"></img>
        </div>
      </div>
    </nav>  
  );
};

export default Header;

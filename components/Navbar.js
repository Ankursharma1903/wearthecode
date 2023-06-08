import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
  
} from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

// pasted from react icons
// as tishoppingg cart so import from icons/ti
// now use this and get the symbol

const Navbar = ({cart,addToCart,removeFromCart,subTotal,clearCart}) => {
 // console.log(cart,addToCart,removeFromCart,subTotal,clearCart)
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
    // so if translate x full not present inside that class where ref is reffered so make it full
  };

  // so made ref inside the sidebar that we are also usinggg in const ref tso we can use it inside the toggglecart function
  // now we can access the sidebar using this ref
  return (
    <div className="flex  flex-col md:flex-row md:justify-start justify-center items-cente py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo m-5">
        {" "}
        <Link legacyBehavior href={"/"}>
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/logo.jpg"
              className="h-30 w-30 bg-indigo-500 
                rounded-full"
              alt="logo"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl">WearTheCode.com</span>
          </a>
        </Link>
      </div>
      <div className="nav">
        {/* <ul className="flex items-center space-x-2 font-bold md:text-xl"> */}
        <ul className="flex items-center space-x-6 font-bold md:text-md md:mt-9 justify-center">
          <Link legacyBehavior href={"/tshirts"}>
            <a className="hover:text-pink-500">
              <li>Tshirts</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/mugs"}>
            <a className="hover:text-pink-500">
              <li>Mugs</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/hoodies"}>
            <a className="hover:text-pink-500">
              <li>Hoodies</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/stickers"}>
            <a className="hover:text-pink-500">
              <li>Stickers</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        
        className="cart absolute right-0 top-10 mx-5 cursor-pointer flex"
      >
       <Link legacyBehavior href={'/login'}><a><MdAccountCircle className="text-xl md:text-3xl mx-2"/></a></Link>
        <TiShoppingCart onClick={toggleCart} className="text-xl md:text-3xl" />
      </div>
      {/* here we are doing it dynamically so if cart empty so translate-x-o so it mean no need to go anywhere otherwise make it full when we add items*/}
      <div
        ref={ref}
        className="{`z-10 w-72 h-[100vh] sideCart overflow-y-scroll absolute top-0 right-0 bg-yellow-100 px-8 py-10 transform transition-transform ${Object.keys(cart).length !==0 ? 'translate-x-0:translate-x-full}`} "
        //made this in such a way that sidecart always hidden till we wan t it to open
        // iving problem in mobile so used overflow x hidden so make changes in global.css file
        // here giving problem of overlap so putted zindex inside my cart classname
      >
        {/* sidebar */}
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-xl text-orange-400"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
           {/* if cart is empty */}
           {Object.keys(cart).length==0 && 
           <div className="my-4 text-base font-semibold">
          Your cart is empty
           </div>}
          {/* insteaaad of haardcode no wwe aare using map function */}
      {Object.keys(cart).map((k)=>{ return   <li key={k}> 
      {/* k here is key and it can be considered as itemcode to differentiate between two things */}
        {/* ggiving error so place the item map on array object.keys is used */}
            <div className="item flex my-5">
              {/* instead of grid and flexbox we are just changingg the width */}
              <div className="w-2/3 font-semibold">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-xl ">
                <AiFillMinusCircle onClick={()=>{
                  removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant) // as e are trying only to reuce qty by 1 so given 1 in qty
                  // here k is the itemcode itself
                }} className=" text-orange-400 cursor-pointer" />
                <span className="mx-2 text-sm">{cart[k].qty}</span>
                <AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className=" text-orange-400 cursor-pointer" />
              </div>
            </div>
          </li>})}
          {/* <li>
            <div className="item flex my-5"> */}
              {/* instead of grid and flexbox we are just changingg the width */}
              {/* <div className="w-2/3 font-semibold">Tshirts - Wear The Code</div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-xl ">
                <AiFillMinusCircle className=" text-orange-400 cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className=" text-orange-400 cursor-pointer" />
              </div>
            </div>
          </li> */}
          {/* <li>
            <div className="item flex my-5"> */}
              {/* instead of grid and flexbox we are just changingg the width */}
              {/* <div className="w-2/3 font-semibold">Tshirts - Wear The Code</div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-xl ">
                <AiFillMinusCircle className=" text-orange-400 cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className=" text-orange-400 cursor-pointer" />
              </div>
            </div>
          </li> */}
          {/* <li>
            <div className="item flex my-5"> */}
              {/* instead of grid and flexbox we are just changingg the width */}
              {/* <div className="w-2/3 font-semibold">Tshirts - Wear The Code</div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-xl ">
                <AiFillMinusCircle className=" text-orange-400 cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className=" text-orange-400 cursor-pointer" />
              </div>
            </div>
          </li> */}
        </ol>
        <div className="font-bold total my-2">SubTotal : ₹{subTotal}</div>
        <div className="flex mt-10 ">
          
        <Link href={'/checkout'}>  <button className="flex  mr-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" /> CheckOut
          </button></Link>
          <button onClick={clearCart} className="flex mr-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// this file is tsx typescript i have changed it to js if o back to tsx to need to make changes inside the tsconfig file add "noImplicitAny": false,"strict":false
//IN ARRAY VARIABLE NOT COME IN "" LIKE ITEMCODE BUT FIELD OF OBJECT LIKE QTY COME IN ""

import '@/styles/globals.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const[cart,setCart]=useState({});// our initial cart is empty object and usinggg iproduct id as ke id to identif products uniquely and value like quantitiy
  const[subTotal,setSubTotal]=useState(0);
  const [user,setUser]=useState({value:null})
  const [key,setKey]=useState(0) // key help in rerendering navbar if we want to change it so change the key

const router=useRouter()

useEffect(()=>{
  try{
    if(localStorage.getItem("cart")){
 
      setCart(JSON.parse(localStorage.getItem("cart"))) // nee to parse s insie the locaal storage it is stored as string 
      // as cart can thro error or its chaange by someone so we putte it inside the try catch block
      
    //  saveCart(cart) // so cart and subtotal not lose its data when refreshed and subtotal dont become zero it is solving that error
    // as we know setcart dont work immediately so we need to pass the data by ourself
    saveCart(JSON.parse(localStorage.getItem("cart")));
      }
  }catch(error){
    console.log(error)
    localStorage.clear();
  }
  const token=localStorage.getItem('token')
  if (token) {
    setUser({value:token})
    setKey(Math.random())
  }
},[])
  const saveCart =(myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart));
    // so saving the cart state in the local storage and as cart store the value of the cart
    let subt=0;
    let keys=Object.keys(myCart) 
    for(let i=0;i<keys.length;i++){// // we iterating the object keys and cart object length
      // console.log(keys)
    subt+=myCart[keys[i]].price *myCart[keys[i]].qty // so go in mycart an for each key give quaantity
    }
    setSubTotal(subt)
  }


  // in addtocart we want to add itemcode so check it than need quantity and price and similarly other parameters
  const addToCart=(itemCode,qty,price,name,size,variant)=>{
let newCart=cart;
if(itemCode in cart){
  //IN ARRAY VARIABLE NOT COME IN "" LIKE ITEMCODE BUT FIELD OF OBJECT LIKE QTY COME IN ""
  newCart[itemCode].qty=cart[itemCode].qty+qty;
  // in this we are increasingg the qty of the cart with that itemcode
  // added items in the qty that we are already added qty
  // we can write [].qty or we can use []["qty"]
}else{
  newCart[itemCode]={qty:1,price,name,size,variant} // added new entry
}
setCart(newCart);
// to save the cart state we need to make the save cart function and store cart in local memory available
saveCart(newCart)
  }




  const buyNow=(itemCode,qty,price,name,size,variant)=>{

  let newCart={itemCode:{qty:1,price,name,size,variant}};
// here itemcode is the slug
setCart(newCart);
saveCart(newCart)
// to save the cart state we need to make the save cart function and store cart in local memory available

    router.push("/checkout") // this will open that window after running the above 2 functions
    
  }



  const clearCart=()=>{
    setCart({})
    saveCart({})// here we are not passingg the cart variable because when run  A STATE VARIABLE LIKE SETCART DOESNT GURANTEE UPDATION OF CART AT THAT TIME
    // JS WILL UPDATE THAT STATE BY ITS OWN AND DOESNT PROMISE THAT TIME UPDATION
    // IT IS DONE IN MILLISECONDS BUT NOT THAT MUCH FASTER THAT IT TAKE NEXT REQQUEST
  }
  const removeFromCart=(itemCode,qty,price,name,size,variant)=>{
    // let newCart=cart;
    let newCart=JSON.parse(JSON.stringify(cart)); // by this method whole object will be copied
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty-qty;
    //decrease qty
    }
    // makin check to check that qty already not 0
    if (newCart[itemCode]["qty"]<=0) {
      delete newCart[itemCode]
      //IN ARRAY VARIABLE NOT COME IN "" LIKE ITEMCODE BUT FIELD OF OBJECT LIKE QTY COME IN ""
    }
    setCart(newCart);
    // to save the cart state we need to make the save cart function and store cart in local memory available
    saveCart(newCart)
      }

      //WEE SOME METHODS INSIDE THE NAVBR AND COMPONENT

      // for login page
      
    


  return(<>
  {/* setted key as subtotal as subtotal till not update plz dont render it otherwise its rendering before the subtotal is updating */}
  <Navbar user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
  )
}

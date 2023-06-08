import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import connectDb from "../../middleware/mongoose"
import Product from "../../models/Product"
const Tshirts = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
           {/* {products.map((item)=>{ */}
           {Object.keys(products).map((item)=>{ //as its not an array now its an object
            return(  // and its return a key so instead of item.slug we ned ot mention products[item].slug 
              // passhref true so when click on inner items on the link then it will aslo oopen that link
            <Link passHref={true} key={products[item]._id} href={`Product/${products[item].slug}`} legacyBehavior>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="md:h-[30vh] block m-auto "
                  // src="https://m.media-amazon.com/images/I/41N6eTRWTPL._AC_UL480_FMwebp_QL65_.jpg"
                  src={products[item].img}
                />
              </a>
              <div className="mt-4 text-center md:text-left ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Tshirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                 {products[item].title}
                </h2>
                <p className="mt-1">{products[item].price}</p>
                <div className="mt-1">
                  {/* so if size present than show else show in span tag */}
                  {products[item].size.includes('S')&& <span className="border border-gray-300 pz-1 mx-1">S</span>} 
                  {products[item].size.includes('M')&& <span className="border border-gray-300 pz-1 mx-1">M</span>} 
                  {products[item].size.includes('L')&& <span className="border border-gray-300 pz-1 mx-1">L</span>} 
                  {products[item].size.includes('XL')&& <span className="border border-gray-300 pz-1 mx-1">XL</span>} 
                  {products[item].size.includes('XXL')&& <span className="border border-gray-300 pz-1 mx-1">XXL</span>} 
                </div>
                <div className="mt-1">
                {products[item].color.includes('red')&& <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                {products[item].color.includes('black')&& <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>} 
                {products[item].color.includes('green')&& <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                {products[item].color.includes('orange')&& <button className="border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                {products[item].color.includes('yellow')&& <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                {products[item].color.includes('purple')&& <button className="border-2 border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                
                </div>
              </div>
            </div>
          </Link>
         ) }) }
             

           
          </div>
        </div>
      </section>
    </div>
  );
};


export async function getServerSideProps(context){
// instead of fetch api we will do all the work of the getproducts api here
if(!mongoose.connections[0].readyState){
  await mongoose.connect(process.env.MONGO_URI)
}
let products=await Product.find({category:'tshirt'})// if find() without category so show every product but to get by category we mention categoryy in this
// so other products than this should not display on tshirts page

// console.log(products)
let tshirts={}
    // now to check if the product is available or not
// as products is array and need to iterate through it
    for(let item of products){
   if(item.title in tshirts){
    // here key value pair is made and in tshirts the key is title
    // as title is unique and value is whole object and color and size are arrays

    // title already present so need to check if that new variant for color and size is already present or not
        if(!tshirts[item.title].color.includes(item.color) && item.availableQty>0){
          // so if color not present
      tshirts[item.title].color.push(item.color)             // so pushed in array item.color
        }
        if(!tshirts[item.title].size.includes(item.size) && item.availableQty>0){
          // so if size not present
      tshirts[item.title].size.push(item.size)             // so pushed in array item.size
        }


   }else{
    // if not present so check the available qty>0 so made arrayy of color and size
    tshirts[item.title]=JSON.parse(JSON.stringify(item))       // pare and stringify together means deep copy
    if(item.availableQty > 0){
      tshirts[item.title].color=[item.color] // so made an array of color tshirts[item.title].color
      tshirts[item.title].size=[item.size]
    }


   }
    }
  return{
    props:{products:JSON.parse(JSON.stringify(tshirts))},
    // here after returning tshirts instead of products so products now its not an array now its an object so need to make changes in map function
    // to map in object use Object.keys(products).map
    // and its return a key so instead of item.slug we ned ot mention products[item].slug 
  }
}
export default Tshirts;

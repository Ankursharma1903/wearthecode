

import connectDb from "../../../middleware/mongoose"
import Product from "../../../models/Product"

const handler=async( req, res ) =>{
    let products=await Product.find()
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
    res.status(200).json({tshirts})
  }


export default connectDb( handler);
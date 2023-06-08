//\\\\\\\\\\\\\\\\\\\\\\\
// This api will not be public as we dont want anybody to cintrol this website api of adding products
import connectDb from "../../../middleware/mongoose"
import Product from "../../../models/Product"

const handler=async( req, res ) =>{
    if(req.method =='POST'){
      // console.log(req.body)
        for(let i=0;i<req.body.length;i++){

        //id is always _id

   let p= await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])                       // here used the mongo db function of find by id and update

}
res.status(200).json({success:"success"})  
    }
    else{
        res.status(400).json({error:"bad request this method is not allowed"})
    }
  
  }


export default connectDb( handler);
//\\\\\\\\\\\\\\\\\\\\\\\
// This api will not be public as we dont want anybody to cintrol this website api of adding products
import connectDb from "../../../middleware/mongoose"
import User from "../../../models/User"
var CryptoJS = require("crypto-js");
const handler=async( req, res ) =>{
    if(req.method =='POST'){
      // console.log(req.body)
      // made user model
      const {name,email}=req.body
      // let U=new User(req.body)
      let U=new User({name,email,password:CryptoJS.AES.encrypt(req.body.password,"secret123").toString()})
     await U.save()
       
res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"bad request this method is not allowed"})
    }
  
  }


export default connectDb( handler);
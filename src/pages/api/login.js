//\\\\\\\\\\\\\\\\\\\\\\\
// This api will not be public as we dont want anybody to cintrol this website api of adding products
import connectDb from "../../../middleware/mongoose"
import User from "../../../models/User"


var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler=async( req, res ) =>{
    if(req.method =='POST'){
        // finding user
        let user=await User.findOne({"email":req.body.email})
        const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
        // console.log( bytes.toString(CryptoJS.enc.Utf8) )
        let   decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        if(user){
            
            // authentication
            if(req.body.email==user.email && req.body.password==decryptedPass){
                var token = jwt.sign({email:user.email,name:user.name}, 'jwtsecret',{
                    expiresIn:"2d"});   // for jwt token and now thing in status now given by this
                    // so user now logged in for 2 days then it will automatically expires
                // in res.status return token as response
                res.status(200).json({success:true,token})
            }
            else{

                res.status(404).json({success:false,error:"Invalid credentials"})
            }
        }
        else{
            res.status(404).json({success:false,error:"No user found"})
        }
    }
    else{
        res.status(400).json({error:"bad request this method is not allowed"})
    }
  
  }


export default connectDb( handler);
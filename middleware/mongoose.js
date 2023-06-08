import mongoose from "mongoose";


const connectDb= handler=>async (req,res)=>{
    if(mongoose.connections[0].readyState){
        // tells if its already connected and its first connections in ready state
  return handler(req,res); // so returned the above handler with request and response
    }
    // if its not connected so connect
    mongoose.connect(process.env.MONGO_URI)
    // process.env.MONGO_URI so we have given this uri
    // so for this created the file .env.local and this is a environment variable file
    // so when we use different uri according to different mongo database apps like cloud so need to find again and again just change in the envirnment file


return handler(req,res);

}

export default connectDb;
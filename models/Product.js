
const { timeStamp } = require('console');
const mongoose = require('mongoose');

const ProductSchema =new mongoose.Schema({

//  it means this is a required field
// then made the array of objects for the products

title:{type:String,required:true},
slug:{type:String,required:true,unique:true}, // here it have to be unique also
desc:{type:String,required:true}, 
img:{type:String,required:true}, 
category:{type:String,required:true}, 
size:{type:String}, 
color:{type:String}, 
price:{type:Number,required:true}, 
availableQty:{type:Number}, 


},{timestamps:true});
// timestamp true will mark create and update time in the schema
// mongoose.models={}
// export default mongoose.model("Product",ProductSchema);

export default mongoose.models.Product || mongoose.model("Product",ProductSchema);
// no need to model={} and export default if use this line
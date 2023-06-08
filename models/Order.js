
const { timeStamp } = require('console');
const mongoose = require('mongoose');

const OrderSchema =new mongoose.Schema({
 userId:{type:String,required:true},
//  it means this is a required field
// then made the array of objects for the products

products:[{
productId:{type:String},
quantity:{type:Number,default:1},// so if not putted anything so it is one by default
}],
address:{type:String,required:true},
amount:{type:Number,required:true},
status:{type:String,default:"Pending",required:true},
},{timestamps:true});
// timestamp true will mark create and update time in the schema
mongoose.models={}
export default mongoose.model("Order",OrderSchema);

const { timeStamp } = require('console');
const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({

//  it means this is a required field
// then made the array of objects for the products

name:{type:String,required:true},
email:{type:String,required:true,unique:true}, // here it have to be unique also
password:{type:String,required:true}, 

},{timestamps:true});
// timestamp true will mark create and update time in the schema
// mongoose.models={}
// export default mongoose.model("User",UserSchema);

export default mongoose.models.User || mongoose.model("User",UserSchema);
// no need to model={} and export default if use this line
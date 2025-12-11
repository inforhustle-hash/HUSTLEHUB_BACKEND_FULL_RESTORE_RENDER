
import mongoose from 'mongoose';
const ContactSchema=new mongoose.Schema({
  user:{type:String,required:true},
  name:String,
  email:String,
  phone:String,
  tags:[String],
  notes:[{text:String,date:Date}]
});
export default mongoose.model("Contact",ContactSchema);

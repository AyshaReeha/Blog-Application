const mongoose =require('mongoose');
const{Schema}=mongoose;
const blogschema=new Schema({
    title:{
        type:String,
        required:true},
    description:{
        type:String,
        required:true},
    author:{
        type:String,
        required:true
    }
},{timestamps:true});

 const Blog=mongoose.model("blog",blogschema);
 module.exports={Blog}

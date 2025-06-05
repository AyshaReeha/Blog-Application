const express=require("express")
const router=express.Router();
const {Blog}  = require('../models/blog_model');
router.get('/get-all-blogs',async(req,res)=>{
    try{
        const blogs=await Blog.find({});
        res.send({count:blogs.length,data:blogs});
    }
    catch(err){
        console.log(err);
        res.status(400).send({message:"..something went wrong"});
    }
})
router.post('/create-blog',async(req,res)=>{
   
    try{
        const data=req.body;
        const blog=new Blog(data);
        const response=await blog.save();
        console.log(response);
        res.send(response);
    }
    catch(err){
        console.log("Error creating blog:", err); 
        res.status(400).send({message:"something went wrong"});
    }
})
router.delete('/blog/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body;
        const response=await Blog.findByIdAndDelete(id);
        console.log(response);
        res.send("deleted");

    }catch(err){
        console.log(err);
        res.status(400).send({messagge:"something wrong"})
    }
})
module.exports=router;
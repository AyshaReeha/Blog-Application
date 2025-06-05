const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require("mongoose");
require('dotenv').config();
const blogRoutes=require('./routes/blogRoutes')
const PORT=5000;


const {Blog} = require('./models/blog_model');



app.use(cors())
app.use(express.json());
app.use('/',blogRoutes);


mongoose.connect(process.env.DB_URI)
  .then(() => {
    //console.log(result);
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });


   const express=require('express');
   const app=express();
   const mongoose=require('mongoose');
   const dotenv=require('dotenv');
   const helmet=require('helmet');
   const morgan=require('morgan');
   const userRouter=require('./routes/users.js');
   const authRouter=require('./routes/auth.js');
   const postRouter=require("./routes/posts");
   const multer=require('multer');
   const path= require("path")

   dotenv.config();


   mongoose.connect(process.env.MONGO_URL,{useNewUrlparser:true},()=>{
      console.log("data connected")
   })


   app.use("/images",express.static(path.join(__dirname,"public/images")));

   //middleware 
   app.use(express.json());
   app.use(helmet()); //for view detail request
   app.use(morgan('combined'))


   //we use multer for share photo and text in my post and we want to store inside project not in mongo

   const storag=multer.diskStorage({
      destination:(req,file,cb) =>{
         cb(null,"public/images")
      },
      filename:function(req,file,cb){
         cb(null,req.body.name)
     
      }
   })
   const upload = multer({storag});
   app.post("/api/upload",upload.single("file"),(req,res) =>{
      try{
         return res.status(200).json("done")
      }
      catch(err){
         console.log(err)
      }
   })

   app.use("/api/users",userRouter);
   app.use("/api/auth",authRouter);
   app.use("/api/posts",postRouter);
   
   


  
   

      
   app.listen(8800,()=>{
    console.log("backend server is runnuing")
   })
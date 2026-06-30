require('dotenv').config();

const express=require("express");
const app=express();
var cors = require('cors');
const mongoose=require("mongoose");
app.use(cors());

const port=process.env.PORT || 8080;

(async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/zerodhaClone');
        console.log("mongoose database connected successfully");  
    }
    catch(error){
        console.log(error);
    }
})();

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    
})
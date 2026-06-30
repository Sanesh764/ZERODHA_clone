
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoldingsSchema=new Schema({
    name:{
        type:String,   
    },
    qty:{
        type:Number,
    },
    avg:{
        type:Number,
    },
    price:{
        type:Number,
    },
    net:{
        type:String, 
    },
    day:{
        type:String,   
    }
});
module.exports={HoldingsSchema};
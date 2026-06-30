
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    mode:{
        type:String,
        required:true
    }
});
module.exports={OrdersSchema};
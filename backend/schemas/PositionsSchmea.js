
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PositionsSchema=new Schema({
    postion:{
        type:String,
    },
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
    },
    isLoss:{
        type:Boolean
    }
});
module.exports={PositionsSchema};
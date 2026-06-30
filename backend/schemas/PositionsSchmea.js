
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PositionsSchema=new Schema({

    name:{
        type:String,
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
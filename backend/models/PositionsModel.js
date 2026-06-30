const {model}=require("mongoose");
const {PositionsSchema}=require("../schemas/PositionsSchmea.js");

const PositionsModel=new model("position",PositionsSchema);

module.exports={PositionsModel};
require('dotenv').config();

const express=require("express");
const app=express();
var cors = require('cors');

const {HoldingsModel}=require("./models/HoldingsModel.js");
const {PositionsModel}=require("./models/PositionsModel.js");
const mongoose=require("mongoose");
app.use(cors());

const dns=require("dns");
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
]);
const port=process.env.PORT || 8080;

//'mongodb://127.0.0.1:27017/zerodhaClone' // for local machine
let URL=process.env.MONGO_URL;
(async()=>{
    try{
        await mongoose.connect(URL);
        console.log("mongoose database connected successfully");  
    }
    catch(error){
        console.log(error);
    }
})();
 
//send to data in monodb dummary data isko dubara use mat karna otherwise duplicate data save ho jayega database me
// app.get("/addHoldings",async(req,res)=>{
//     let tempHoldings=[
//         {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
//     ];
//     tempHoldings.forEach((item)=>{
//         let newHolding=new HoldingsModel({
//             name:item.name,
//             qty:item.qty,
//             avg:item.avg,
//             price:item.price,
//             net:item.net,
//             day:item.day
//         });
//         newHolding.save();
//     });
//     res.send("data will save");
// });


//don,t run this code otherwise duplicate data will uploade on database
// app.get("/addpostion",async(req,res)=>{
//     let tempPositions=[
//     {
//   product: "CNC",
//   name: "TCS",
//   qty: 3,
//   avg: 3895.50,
//   price: 3942.80,
//   net: "+1.21%",
//   day: "+0.78%",
//   isLoss: false,
// },
// {
//   product: "CNC",
//   name: "INFY",
//   qty: 5,
//   avg: 1542.30,
//   price: 1528.60,
//   net: "-0.89%",
//   day: "-0.45%",
//   isLoss: true,
// },
// {
//   product: "CNC",
//   name: "HDFCBANK",
//   qty: 2,
//   avg: 1684.20,
//   price: 1712.75,
//   net: "+1.69%",
//   day: "+0.96%",
//   isLoss: false,
// },
// {
//   product: "CNC",
//   name: "RELIANCE",
//   qty: 1,
//   avg: 2865.40,
//   price: 2848.90,
//   net: "-0.58%",
//   day: "-0.31%",
//   isLoss: true,
// },
//     ];
//     tempPositions.forEach((item)=>{
//         let newPosition=new PositionsModel({
//             product:item.product,
//             name:item.name,
//             qty:item.qty,
//             avg:item.avg,
//             price:item.price,
//             net:item.net,
//             day:item.day,
//             isLoss:item.isLoss
//         });
//         newPosition.save();
//     });
//     res.send("new holding uploaded successfully");
//     console.log("data uploaded successfully");
// });

app.get("/allHoldings",async(req ,res)=>{
    let allHoldings=await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allpostions",async(req ,res)=>{
    let allpositions=await PositionsModel.find({});
    res.json(allpositions);
});
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    
})
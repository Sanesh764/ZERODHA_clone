
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose").default;

const UserSchema=new Schema({
    email:{
        type:String,
        required:true
    },
});
UserSchema.plugin(passportLocalMongoose);

const user=mongoose.model("user",UserSchema);
module.exports={user};
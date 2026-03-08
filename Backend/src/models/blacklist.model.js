 import mongoose from "mongoose";

 const BlacklisttokenSchema = new mongoose.Schema({
    token:{
        type:String,
        requied:[true,"token is required to be added in blacklist"]
    }
 },{timestamps:true})

 export const Blacklisttoken = mongoose.model("Blacklisttoken",BlacklisttokenSchema)

 
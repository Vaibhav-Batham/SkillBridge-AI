 import mongoose from "mongoose";

 const UserSchema = new mongoose.Schema({
 
 username:{
    type:String,
    unique:[true,"username already exist"],
    required:true,
 },

 email:{
    type:String,
    unique:[true,"Account already exist with this email"],
    required:true,
 },

 password:{
    type:String,
    required:true,
 }




 })  

 export const User = mongoose.model("user",UserSchema);
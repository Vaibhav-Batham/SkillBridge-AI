 import {User}  from "../models/user.model.js"
 import bcrypt from "bcryptjs"
 import jwt from "jsonwebtoken"
 

 // it is my register controller 

 async function registerUserController(req,res) {

    const {username , email , password} = req.body
    if(!username || !email || !password){
        return res.status(400).json({
            message:"Please provide username,email and password"
        })

    }
    const isUserAlreadyExists = await User.findOne({
        $or:[{username},{email}]
    })
    if(isUserAlreadyExists){
        return res.status(400).json({
            message: "Account already exists with this email address or username"
            
        })
    }
    const hash = await bcrypt.hash(password,10)
    const user = await User.create({
        username,
        email,
        password:hash
    })
    const token = jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.status(201).json({
        message: "User registered successfully",
        user:{
            id: user._id,
            username: user.username,
            email:user.email
        }
    })
 }

 // it is my login controller 

 async function loginUserController(req,res) {
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }
    const token = jwt.sign(
        {id: user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )
    res.cookie("token",token)
    res.status(200).json({
        message:"User loggedIn  successfully",
        user:{
            id: user._id,
            username:user.username,
            email:user.email

        }
    })
 }

 export  {registerUserController , loginUserController};
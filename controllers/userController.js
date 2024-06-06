const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.registerController = async(req,res)=>{
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Acoount already exists please login!!!")
        }
        else{
            const newUSer = new users({
                username,email,password
            })
            await newUSer.save()
            res.status(200).json(newUSer)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.loginController = async(req,res)=>{
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET_KEY)
            res.status(200).json({
                user:existingUser,
                token
            }) 
        }
        else{
            res.status(406).json("Invalid email/password!!!")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}
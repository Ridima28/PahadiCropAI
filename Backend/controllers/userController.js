import { JsonWebTokenError } from "jsonwebtoken";
import jwt from 'jsonwebtoken'
import { User } from "../models/User.js";

//Generate JWT 
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

//Api to register User
export const registerUser = async(registerUser, res) => {
    const {name,email,password} = req.body;

    try{
        const userExists = await User.findOne({email})
        if (userExists){
            return res.json({success:false, message: "User already exist"})
        }
        const user = await User.create({name, email, password})

        const token = generateToken(user._id)
        res.json({success: true, token})
    }catch (err){
        return res.json({success: false, message: err.message})
        
    }
}
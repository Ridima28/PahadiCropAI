import { JsonWebTokenError } from "jsonwebtoken";
import User from '../models/User.js';

import jwt from JsonWebTokenError

export const protect =  async(req,res,next) => {
    let token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decode.id;
        const user = await User.findById(userId)

        if (!user) {
            return res.json({success: false, message: "Not authorized user"})
        }
        req.user = user;
        next() 
    }catch(err){
        res.status(401).json({message: "Not authorized"})
    }
}
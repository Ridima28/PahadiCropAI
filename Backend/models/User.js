import mongoose from "mongoose";
import bycrypt from 'bcryptjs'
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

})

//hash pass before saving

userSchema.pre("save", async function (next) {
    if (!this.isModified('password')){
        return next()
    }
    const salt = await bycrypt.genSalt(10)
    this.password= await bycrypt.hash(this.password, salt)
    next();
    
})

export const User = mongoose.model("User", userSchema);


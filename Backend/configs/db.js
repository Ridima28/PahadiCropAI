import mongoose from 'mongoose';

export const connectDB = async () =>{
    try{
        mongoose.connection.on('connected', ()=> console.log("Database Conneced"))
        await mongoose.connect(`${process.env.MONGODB_URI}/PahadiCrop`);
    } catch (err){
        console.log(err.message)
        
    }
};
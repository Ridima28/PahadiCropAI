import express from 'express';
import {
    registerUser,
    loginUser,
    getUser
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/data', getUser)



export default userRouter;
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import userRouter from './routes/userRoutes'
import { connectDB } from './configs/db.js'

const app = express()

await connectDB()

//middleware

app.use(cors())
app.use(express.json())

// routes
app.get('/', (req,res)=> res.send('server is running'))
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
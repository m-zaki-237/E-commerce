import express from 'express'
import dotenv from 'dotenv'
import Connection from './db/Conn.js';
import productRoute from './routes/product.route.js'
import userRoute from './routes/user.route.js'
import cors from 'cors'

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 8000

Connection()

//defining routes

app.use("/products",productRoute)
app.use("/user",userRoute)


app.listen(port, ()=>{
    console.log(`server listening to: ${port}`);
    
})
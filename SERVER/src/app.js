import express, { urlencoded } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import {Server} from 'socket.io'
import http from 'http'
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

const server = http.createServer(app);
const io = new Server(server)
//routes import
import userRouter from './routes/user.route.js'
import messagerouter from './routes/message.route.js'

//routes declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/users",messagerouter)
export  { app , io , server}
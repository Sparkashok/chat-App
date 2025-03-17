import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.route.js";
import connectDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.json());//helps to parse the incoming requests with json payloads (req.body);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.get("/",(req,res)=>{
    res.send("Hello world");

});

app.listen(PORT,async ()=>{
    await connectDB();
    console.log(`App is listening at ${PORT}`)
});
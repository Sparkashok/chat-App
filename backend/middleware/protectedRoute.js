import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectedRoute = async (req,res,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Unauthorized: No cookie found"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error:"Unauthorized: Invalid token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error: "User not found"});
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("Errror in protected route",error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export default protectedRoute;
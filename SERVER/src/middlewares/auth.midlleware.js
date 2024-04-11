import { asynchandler } from "../utils/Asynchandler.js"
import { Apierror } from "../utils/Apierror.js"
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js"

export const verifyJWT = asynchandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer", "").trim()
        console.log("Token:", token);
        console.log("Secret:", process.env.ACCESS_TOKEN_SECRET);
        if (!token) {
            throw new Apierror(401, "Unauthorized token")
        }
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log("Decoded token:", decodedToken);
        
        const user = await User.findById(decodedToken?._id).select("-password -refreshtoken")
        
        if (!user) {
            throw new Apierror(401, "Invalid Access token")
        }
        req.user = user;
        next()
    } catch (error) {
        console.log("Error:", error);
        throw new Apierror(401, error?.message || "Invalid Access Token")
    }
})

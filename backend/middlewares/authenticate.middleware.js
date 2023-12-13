const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const authenticate = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader.includes("Bearer ")){
        res.status(403);
        throw new Error("You are unauthorized to access this, please login first");
    }
    const token = authHeader.split("Bearer ")[1];
    console.log({token});
    if (!token){
        res.status(403);
        throw new Error("You are unauthorized to access this, please login first");
    }

    const validateToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log({validateToken});
    
    if (!validateToken.userid){
        res.status(403);
        throw new Error("You are unauthorized or Token is expired");
    }

    req.userid = validateToken.userid;
    next();
})

module.exports = authenticate;
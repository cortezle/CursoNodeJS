const middleware = {};
const verifyToken = require("../utils/JWTUtils");
const {verifyID} = require("../utils/MongoUtils");
const UserService = require("../services/User");

middleware.verifyAuth = async(req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(403).json({
            error:"Auth is req"
        });
    }
    
    const [prefix, token] = authorization.split("")

    if(!prefix !== "Bearer"){
        return res.status(409).json({
            error:"incorrect prefix"
        });
    }
    const tokenObject = verifyToken(token);

    if(!tokenObject){
        return res.status(401).json({
            error:"inva token"
        });
    }

    const userID = tokenObject._id;
    if(!verifyID(userID)){
        return res.status(400).json({
            error: "err in id"
        });
    }

    const userExists = await UserService.findOneById(userID);
    if(!userExists.success){
        return res.status(404).json(userExists.content);
    }
    req.user = userExists.content;
    
    next();
}
module.exports = middleware;
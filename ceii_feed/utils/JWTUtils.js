const jwt = require("jsonwebtoken");
const secret = process.env.JWTSECRET || "Secret";

const tools = { };

tools.createToked = (_id)=>{
    const payLoad = {
        _id
    };

    return jwt.sign(payLoad,secret,{
        expiresIn:"1m",
    });
}

tools.verifyToken = (token)=>{
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return false;
    }
}
module.exports = tools;
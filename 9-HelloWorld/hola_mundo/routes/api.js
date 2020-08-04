const express = require('express');
const router = express.Router();

const users = require("./api/users");
const test = require("./api/test");
router.use("/user",users);

router.use((req,res,next)=>{
    req.headers.message = "He modificado la req.ALlevame"
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(403).json({
            msg:"Zona Prohibido!"
        });
    }
    next();
});


router.use("/test",test);

module.exports = router;
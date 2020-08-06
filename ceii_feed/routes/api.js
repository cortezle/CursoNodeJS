const express = require("express");
const router = express.Router();

const PostRouter = require("./api/Post");
const Authrouter = require("./api/Auth");

router.use("/post",PostRouter);
router.use("/auth",Authrouter);
module.exports = router;
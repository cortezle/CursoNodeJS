const express = require("express");
const router = express.Router();

const Authmiddleware = require("../middlewares/Auth");

const PostRouter = require("./api/Post");
const Authrouter = require("./api/Auth");

router.use("/auth",Authrouter);
router.use(Authmiddleware.verifyAuth);
router.use("/post",PostRouter);

module.exports = router;
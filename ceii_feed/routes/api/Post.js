const express = require("express");
const router = express.Router();


const PostController = require("../../controllers/api/Post");

router.post("/",PostController.create);
router.get("/id/:_id",PostController.findOneById);
router.get("/all",PostController.findAll);
module.exports = router;
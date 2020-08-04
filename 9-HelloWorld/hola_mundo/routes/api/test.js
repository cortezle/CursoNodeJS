var express = require('express');
var router = express.Router();
const testController = require("../../controllers/api/test");

router.get("/data", testController.getData);
router.get("/person", testController.getPerson);
router.get("/statusTest", testController.statusTest);

router.get("/",testController.getMethod);
router.post("/",testController.postMethod);
router.put("/",testController.putMethod);
router.patch("/",testController.patchMethod);
router.delete("/",testController.deleteMethod);

module.exports = router;
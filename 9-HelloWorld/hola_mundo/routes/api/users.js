var express = require('express');
var router = express.Router();
const user = require("../../controllers/api/users");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/data',(req,res)=>{
  /**
   * Le devolvemos un estado de ok y le pasamos un json
   * como respuesta
   */
  res.status(200).json([
    {name:"Pedro",age:22},
    {name:"Doug",age:40}
  ]);
});

router.post("/signup",user.signup);
// rutaExample /id/1
router.get("/id/:id",user.getUserById);
/**
 * Despues de ? va query
 * /user/getAll?cmp=vl&cmp2=vl2
 * 
 */
router.get("/getAll",user.getAllUsers);
module.exports = router;

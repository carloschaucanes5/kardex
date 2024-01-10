const {Router} = require("express");
const {validateToken} = require("../middleware/validateToken");
const CG = require("../config/configGeneral");

const {getUsers,saveUser,login ,getUserById, deleteUser, updateUser,getTypesIdentification} = require("../controllers/users.js") 
const router = Router();
router.get(CG.API+"/users",getUsers);
router.post(CG.API+"/saveUser",validateToken,saveUser);
router.get(CG.API+"/users/:id",getUserById);
router.delete(CG.API+"/users/:id",deleteUser);
router.put(CG.API+"/users/:id",updateUser);
router.post(CG.API+"/login",login);
router.get(CG.API+"/validateToken",validateToken);
router.get(CG.API+"/getTypesIdentification",getTypesIdentification);
module.exports = router;
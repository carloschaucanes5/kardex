const {Router} = require("express");
const {validateToken,revalidateToken} = require("../middleware/validateToken");
const CG = require("../config/configGeneral");
const {getUsers,saveUser,login ,getUserById, deleteUser, updateUser,getTypesIdentification,utilEncryptText,compareEncryptText} = require("../controllers/users.js") 
const router = Router();
router.get(CG.API+"/users",getUsers);
router.post(CG.API+"/saveUser",validateToken,saveUser);
router.get(CG.API+"/users/:id",getUserById);
router.delete(CG.API+"/users/:id",deleteUser);
router.put(CG.API+"/users/:id",updateUser);
router.post(CG.API+"/login",login);
router.post(CG.API+"/revalidateToken",revalidateToken);
router.get(CG.API+"/getTypesIdentification",getTypesIdentification);
router.post(CG.API+"/encryptText",utilEncryptText);
router.post(CG.API+"/compareEncryptText",compareEncryptText);
module.exports = router;
const {Router} = require("express");
const {validateToken} = require("../middleware/validateToken");

const {getUsers,saveUser,login ,getUserById, deleteUser, updateUser} = require("../controllers/users.js") 
const router = Router();
router.get("/users",getUsers);
router.post("/saveUser",validateToken,saveUser);
router.get("/users/:id",getUserById);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);
router.post("/users/login",login);
module.exports = router;
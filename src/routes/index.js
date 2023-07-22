const {Router} = require("express");
const {getUsers,saveUser, getUserById, deleteUser, updateUser} = require("../controllers/users.js") 
const router = Router();
router.get("/users",getUsers);
router.post("/saveUser",saveUser);
router.get("/users/:id",getUserById);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);
module.exports = router;
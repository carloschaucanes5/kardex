const {pool} =  require("../db/conection");

const saveUser = async (req,res)=>{
    const {
            idUser,firstName,secondName,firstLastname,secondLastname,
            email,address,phone,status,password,idRole
          } = req.body;

    let sql = "insert into users(idUser,firstName,secondName,firstLastname,secondLastname,email,address,phone,status,password,idRole)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)";
    const response = await pool.query(sql,[idUser,firstName,secondName,firstLastname,secondLastname,email,address,phone,status,password,idRole]);
    console.log("this is the response=>",response);
    res.send(response);
}

const getUsers = async(req,res)=>{
const response = await pool.query("select * from users");
    console.log(response.rows);
    res.send(response.rows);   
}

const getUserById = async(req,res)=>{
    const idUser = req.params.id;
    const response = await pool.query("select * from users where id = $1",[idUser]);
    res.json(response.rows);
}

const deleteUser = async(req,res)=>{
    const idUser = req.params.id; 
    const response = await pool.query("delete from users where id = $1",[idUser]);
    res.json(response);
}

const updateUser = async(req,res)=>{
    const idUser = req.params.id;
    const {name,email} = req.body;
    const response = await pool.query("update users set name = $1, email = $2 where id=$3",[name,email,idUser]);
    res.json(response);
}
//hello there is a change
module.exports = {getUsers,saveUser,getUserById,deleteUser,updateUser};
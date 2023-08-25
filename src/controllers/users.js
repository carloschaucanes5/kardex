const {pool} =  require("../db/conection");
const Response = require("../models/Response");
const CDB = require("../config/configDb");
const CT = require("../config/users/configTableUser");
const resu = new Response();
const saveUser = async (req,res)=>{
    try{
        const {
            id_user,first_name,second_name,first_lastname,second_lastname,
            email,address,phone,status,password,id_role
          } = req.body;
        let sql = "insert into users(id_user,first_name,second_name,first_lastname,second_lastname,email,address,phone,status,password,id_role)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)";
        const response = await pool.query(sql,[id_user,first_name,second_name,first_lastname,second_lastname,email,address,phone,status,password,id_role]);
        resu.setCode(200);
        resu.setMessage("");
        resu.setResponse(response.rowCount);
        res.json("usuario registrado");
    }catch(err){
        const resError = new  CT();
        const r = resError.processErrors(err);
        res.json(r);
    }

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
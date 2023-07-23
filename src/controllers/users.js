const { Pool} = require("pg");
const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'postgres1',
    database:'kardex',
    port:'5432'
})

const saveUser = async (req,res)=>{
    const {name,email} = req.body;
    let sql = "insert into users(name,email)values($1,$2)";
    const response = await pool.query(sql,[name,email]);
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
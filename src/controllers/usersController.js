
const Response = require("../models/Response");
const CG = require("../config/configGeneral");
const CU = require("../config/users/configUser");
const resu = new Response();
const EncryptText = require("../middleware/encryptText");
const UsersModel = require("../models/usersModel");
//Apires guardar usuario(carlosCh)
const saveUser = async (req,res)=>{
    let user = new UsersModel();
    try{
        let resUser = await user.saveUser(req.body);
        if(resUser.code == CG.RESCOMMIT){
            resu.setCode(CG.C200);
            resu.setMessage(CU.registerSuccessUser);
            resu.setResponse(resUser);
            res.json(resu);
        }
        else
        {
            resu.setCode(CG.C400);
            resu.setMessage(CU.userInvalideData);
            resu.setResponse(resUser);
            res.json(resu);
        }
    }catch(err){
        resu.setCode(CG.c500);
        resu.setMessage(CG.c500Message);
        resu.setResponse(err);
        res.json(resu);   
    }
}

//apires autenticar usuario(CarlosCh)
const login = async(req,res)=>{
    try
    {
       let user = new UsersModel();
       const {identification,password} = req.body;
       let resp = await user.login(identification,password);
       if(resp.code == CG.RESCOMMIT){
            resu.setCode(CG.C200);
            resu.setMessage(CU.authenticatedUser);
            resu.setResponse(resp.message);
            res.json(resu);
        }else if(resp.code == CG.RESNOCOMMIT){
            resu.setCode(CG.C400);
            resu.setMessage(resp.message);
            resu.setResponse('');
            res.json(resu);
        }else{
            resu.setCode(CG.c500);
            resu.setMessage(CG.c500Message);
            resu.setResponse(resp.message);
            res.json(resu);
        }
    
    }catch(err){
        resu.setCode(CG.c500);
        resu.setMessage(CG.c500Message);
        resu.setResponse(err);
        res.json(resu);
    }
}


























//funcion obtener lista de usuarios
const getUsers = async(req,res)=>{
    const response = await pool.query("select * from users");
    res.send(response.rows);   
}
//funcion obtner usuario por el numero de identificacion
const getUserById = async(req,res)=>{
    try
    {
        const idUser = req.params.id;
        const response = await pool.query("select * from users where identification = $1",[idUser]);
        resu.setCode(CG.C200);
        resu.setMessage(CU.userFound);
        resu.setResponse(response.rows);
        res.json(resu);
    }catch(err){
        resu.setCode(CG.c500);
        resu.setMessage(CG.c500Message);
        resu.setResponse(err);
        res.json(resu);
    }
}


//funcion para listar usuarios
const listUser = async(req,res)=>{
    try{
        const response  = await pool.query("select * from users where status = $1",[CU.activeStatusUser]);
        if(response.rowCount >0){
            resu.setCode(CG.C200);
            resu.setMessage(response.rowCount);
            resu.setResponse(response.rows);
            res.json(resu);
        }else{
            resu.setCode(CG.C200);
            resu.setMessage(response.rowCount);
            resu.setResponse(response.rows);
            res.json(resu);
        }
    }catch{
        resu.setMessage(CG.c500Message);
        resu.setResponse(err);
        res.json(resu);
    }
}





//funcion eliminar usuario
const deleteUser = async(req,res)=>{
    const idUser = req.params.id; 
    const response = await pool.query("delete from users where id = $1",[idUser]);
    res.json(response);
}
//funcion actualizar usuario
const updateUser = async(req,res)=>{
    const idUser = req.params.id;
    const {name,email} = req.body;
    const response = await pool.query("update users set name = $1, email = $2 where id=$3",[name,email,idUser]);
    res.json(response);
}

//funcion listado de los tipos de identificacion para los usuarios
const getTypesIdentification = async(req,res)=>{
    try{
        const response = await pool.query("select * from typesidentification where state = 'a'");
        resu.setCode(CG.C200);
        resu.setMessage('');
        resu.setResponse(response.rows);
        res.json(resu);
    }
    catch(err)
    {
        const resError = new CTU();
        const r = resError.processErrors(err);
        res.json(r);
    }
}
//funcion para encriptar la constraseña de software
const utilEncryptText = async (req,res)=>{
    try{
        const {secretWord} = req.body;
        const result = await EncryptText.encrypt(secretWord,CG.numberOfRounds);
        resu.setCode(CG.C200);
        resu.setMessage('');
        resu.setResponse(result);
        res.json(resu);
    }catch(err){
        resu.setCode(CG.c500);
        resu.setMessage(CG.c500Message);
        resu.setResponse(err);
        res.json(resu);
    }
}
//funcion para comparar coincidencia de contraseña
    const compareEncryptText = async (req,res)=>{
        try{
            const {secretWord,encrypWord} = req.body;
            const result = await EncryptText.compare(secretWord,encrypWord);
            if(result){
                resu.setCode(CG.C200);
                resu.setMessage('');
                resu.setResponse(result);
                res.json(resu);
            }else{
                resu.setCode(CG.C401);
                resu.setMessage('');
                resu.setResponse(result);
                res.json(resu);
            }

        }catch(err){
            resu.setCode(CG.c500);
            resu.setMessage(CG.c500Message);
            resu.setResponse(err);
            res.json(resu);
        }
    }

module.exports = {getUsers,saveUser,getUserById,deleteUser,updateUser,login,getTypesIdentification,utilEncryptText,compareEncryptText,listUser};
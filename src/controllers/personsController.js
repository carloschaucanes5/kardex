require("../models/personsModel");
const {generateAccessToken} = require("../middleware/validateToken");
const Response = require("../models/Response");
const CG = require("../config/configGeneral");
const CU = require("../config/users/configUser");
const resu = new Response();
const EncryptText = require("../middleware/encryptText");
const jwt = require('jsonwebtoken');
const PersonsModel = require('../models/personsModel'); 

//funcion guardar usuario
const saveUser = async (req,res)=>{
    let person = new PersonsModel();
    try{
        /*
        const {
            identification,first_name,second_name,first_lastname,second_lastname,
            email,address,phone,types_identification_id
          } = req.body;*/
        let resp = person.saveUser(req.body);

        
        resu.setCode(CG.C200);
        resu.setMessage(CU.registerSuccessUser);
        resu.setResponse(response.rowCount);
        res.json(JSON.stringify(resp));
    }catch(err){
        if(err.constraint == CU.emailDuplicateConstraint){
            resu.setCode(CG.C401);
            resu.setMessage(CU.emailDuplicate);
            resu.setResponse(err);
            res.json(resu);
        }else if(err.constraint = CU.identificationDuplicateConstraint){
            resu.setCode(CG.C401);
            resu.setMessage(CU.identificationDuplicate);
            resu.setResponse(err);
            res.json(resu);
        }else{
            resu.setCode(CG.c500);
            resu.setMessage(CG.c500Message);
            resu.setResponse(err);
            res.json(resu);
        }  
    }
}
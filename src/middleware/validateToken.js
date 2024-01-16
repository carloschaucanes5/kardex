const jwt = require("jsonwebtoken");
const CG = require("../config/configGeneral"); 
const Response = require("../models/Response");
const resp = new Response();
//funcion para validar token al momento de realizar una peticion http a este servidor
const validateToken = (req,res,next)=>{
    const accessToken = req.headers[CG.KEYauthorization];
    if(!accessToken){
        resp.setCode(CG.C401);
        resp.setMessage(CG.C401Message);
        resp.setResponse(CG.C401Message);
        res.json(resp);
    }
    else
    {
        jwt.verify(accessToken,CG.SECRETTOKEN,(err,user)=>{
            if(err){
                
                resp.setCode(CG.C401);
                resp.setMessage(CG.C401Message);
                resp.setResponse(CG.C401Message);
                res.json(resp);
            }
            else
            {
                next();
            }
        })
    }

}
//revalidar token para identificar su validez en cuanto a tiempo
const revalidateToken = (req,res)=>{
    try{
        const token = req.headers[CG.KEYauthorization];
        jwt.verify(token,CG.SECRETTOKEN,(err,user)=>{
            if(err){
                resp.setCode(CG.C401);
                resp.setMessage(CG.C401Message);
                resp.setResponse(CG.C401Message);
                res.json(resp);
            }else{
                resp.setCode(CG.C200);
                resp.setMessage(CG.C200Authorized);
                resp.setResponse(CG.C200Authorized);
                res.json(resp);
            }
        })
    }catch(err){
        resp.setCode(CG.c500);
        resp.setMessage(CG.c500Message);
        resp.setResponse(err);
        res.json(resp);
    }
}
//GENERAR ACCESS TOKEN  como metodo de seguridad
const generateAccessToken = (user)=>{
    return jwt.sign(user,CG.SECRETTOKEN,{expiresIn:+CG.expireTokenTime});
}


module.exports = {validateToken,revalidateToken,generateAccessToken};


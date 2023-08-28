const jwt = require("jsonwebtoken");
const CG = require("../config/configGeneral"); 
const Response = require("../models/Response");
const resp = new Response();
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
        });
    }

}

module.exports = {validateToken};


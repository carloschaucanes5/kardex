const CG = require("../configGeneral");
const Response = require("../../models/Response");
class ConfigTableUser{
        
        constructor(){
            this.tableUser = {name:"users"};
            this.identification = {
                name:"identification",
                alias: "id",
                descripcion:"cedula de ciudadania",
                constraint:"uq_users_identification",
                constraintError:"El número de identificación se encuentra registrado",
                code:CG.C400,
                constraint1:"ck_users_identification_not_null",
                constraintError1:"El número de identificación no debe ser nulo o vacío",
                code1:CG.C400
            }
            this.email = {
                name:"email",
                alias: "email",
                description:"correo electrónco",
                constraint:"uq_users_email",
                constraintError:"El correo electrónico ya se encuentra en uso",
                code:CG.C400,
                constraint1:"ck_email_not_null",
                constraintError1:"El correo electrónico no debe ser nulo",
                code1:CG.C400
            };
            this.first_name = {
                name:"first_name",
                alias:"first_name",
                descripcion: "primer nombre",
                constraint:"ck_first_name_not_null",
                constraintError:"El primer nombre no debe ser nulo",
                code:CG.C400
            }
            this.first_lastname = {
                name:"first_lastname",
                alias:"first_lastname",
                descripcion: "primer apellido",
                constraint:"ck_first_lastname_not_null",
                constraintError:"El primer apellido no debe ser nulo",
                code:CG.C400
            }
            this.id_role = {
                name:"id_role",
                alias:"id_role",
                descripcion: "Rol usuario",
                constraint:"users_id_role_fkey",
                constraintError:"opción invalida para el rol de usuario",
                code:CG.C400
            }
        }
       
        processErrors=(err)=> {
            if(err.constraint == this.identification.constraint){
                return this.processResponse(this.identification.code,this.identification.constraintError,err); 
            }
            else if(err.constraint == this.identification.constraint1){
                return this.processResponse(this.identification.code1,this.identification.constraintError1,err); 
            }
            else if(err.constraint == this.email.constraint){
                return this.processResponse(this.email.code,this.email.constraintError,err); 
            }
            else if(err.constraint == this.email.constraint1){
                return this.processResponse(this.email.code1,this.email.constraintError1,err); 
            }
            else if(err.constraint == this.first_name.constraint){
                return this.processResponse(this.first_name.code,this.first_name.constraintError,err); 
            }
            else if(err.constraint == this.first_lastname.constraint){
                return this.processResponse(this.first_lastname.code,this.first_lastname.constraintError,err);
            }
            else if(err.constraint == this.id_role.constraint){
                return this.processResponse(this.id_role.code,this.id_role.constraintError,err);
            }
            else
            {
                return this.processResponse(CG.c500,CG.c500Message,err);
            }
        }

        processResponse(code,message,err){
            const res = new Response();
            res.setCode(code);
            res.setMessage(message);
            res.setResponse(err);
            return res;
        }
    };

    module.exports = ConfigTableUser;

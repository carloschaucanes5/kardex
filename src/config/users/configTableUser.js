class ConfigTableUser{
        
        constructor(){
            this.tableUser = {name:"users"};
            this.id_user = {
                name:"id_user",
                alias: "id",
                descripcion:"cedula de ciudadania",
                constraint:"users_pkey",
                constraintError:"El número de identificación se encuentra registrado",
                constraint1:"ck_id_user_not_null",
                constraintError1:"El número de identificación no debe ser nulo o vacío"
            }
            this.email = {
                name:"email",
                alias: "email",
                description:"correo electrónco",
                constraint:"uq_users_email",
                constraintError:"El correo electrónco ya se encuentra en uso",
                constraint1:"ck_email_not_null",
                constraintError1:"El correo electrónico no debe ser nulo",
            };
            this.first_name = {
                name:"first_name",
                alias:"first_name",
                descripcion: "primer nombre",
                constraint:"ck_first_name_not_null",
                constraintError:"El primer nombre no debe ser nulo"
            }
            this.first_lastname = {
                name:"first_lastname",
                alias:"first_lastname",
                descripcion: "primer apellido",
                constraint:"ck_first_lastname_not_null",
                constraintError:"El primer apellido no debe ser nulo"
            }
            this.id_role = {
                name:"id_role",
                alias:"id_role",
                descripcion: "Rol usuario",
                constraint:"users_id_role_fkey",
                constraintError:"opción invalida para el rol de usuario"
            }
        }
       
        processErrors=(err)=> {
            if(err.constraint == this.id_user.constraint){
                return this.id_user.constraintError;
            }
            else if(err.constraint == this.id_user.constraint1){
                return this.id_user.constraintError1;
            }
            else if(err.constraint == this.email.constraint){
                return this.email.constraintError;
            }
            else if(err.constraint == this.email.constraint1){
                return this.email.constraintError1;
            }
            else if(err.constraint == this.first_name.constraint1){
                return this.first_name.constraintError;
            }
            else if(err.constraint == this.first_lastname.constraint){
                return this.first_lastname.constraintError;
            }
            else if(err.constraint == this.id_role.constraint){
                return this.id_role.constraintError;
            }
            else
            {
                return err;
            }
        }
    };

    module.exports = ConfigTableUser;

const {pool} =  require("../db/conection");
const {EncryptText} = require("../middleware/encryptText")

export class PersonsModel{
    constructor(){}
    //funcion guardar persona
    async savePerson (person){
        try{
            const {
                identification,first_name,second_name,first_lastname,second_lastname,
                email,address,phone,types_identification_id
            } = person;
            let sql = "insert into users(identification,first_name,second_name,first_lastname,second_lastname,email,address,phone,types_identification_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)";
            const response = await pool.query(sql,[identification,first_name.toUpperCase(),second_name.toUpperCase(),first_lastname.toUpperCase(),second_lastname.toUpperCase(),email,address,phone,types_identification_id]);
            return response;
        }catch(err){
            return error;
        }
    }
}
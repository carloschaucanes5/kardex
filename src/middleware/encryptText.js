const bcrypt = require("bcryptjs")
class EncryptText{
    constructor(){}
    static async encrypt(planeText,numberOfRounds){
        const encryptedWord = await bcrypt.hash(planeText,numberOfRounds);
        return encryptedWord;
    }
    static async compare(planeText,encryptedWord){
        const validWord = await bcrypt.compare(planeText,encryptedWord);
        return validWord;
    }
}
module.exports =  EncryptText;
